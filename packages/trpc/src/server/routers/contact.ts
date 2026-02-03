import { z } from "zod";
import { createTRPCRouter, organizationProcedure } from "../trpc.js";
import { contacts } from "@repo/db";
import { eq, and, ilike } from "drizzle-orm";

export const contactRouter = createTRPCRouter({
  list: organizationProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100).default(20),
        cursor: z.string().optional(),
        search: z.string().optional(),
        status: z.enum(["active", "unsubscribed", "bounced"]).optional(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const whereConditions = [eq(contacts.organizationId, ctx.organizationId)];

      if (input.status) {
        whereConditions.push(eq(contacts.status, input.status));
      }

      if (input.search) {
        whereConditions.push(ilike(contacts.email, `%${input.search}%`));
      }

      const items = await ctx.db.query.contacts.findMany({
        where: and(...whereConditions),
        limit: input.limit,
      });

      return {
        items,
        nextCursor:
          items.length === input.limit
            ? items[items.length - 1]?.id
            : undefined,
      };
    }),

  getById: organizationProcedure
    .input(z.object({ id: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      const contact = await ctx.db.query.contacts.findFirst({
        where: and(
          eq(contacts.id, input.id),
          eq(contacts.organizationId, ctx.organizationId),
        ),
      });
      return contact;
    }),

  create: organizationProcedure
    .input(
      z.object({
        email: z.string().email(),
        firstName: z.string().max(255).optional(),
        lastName: z.string().max(255).optional(),
        customFields: z.record(z.any()).optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const [contact] = await ctx.db
        .insert(contacts)
        .values({
          ...input,
          organizationId: ctx.organizationId,
        })
        .returning();
      return contact;
    }),

  update: organizationProcedure
    .input(
      z.object({
        id: z.string().uuid(),
        firstName: z.string().max(255).optional(),
        lastName: z.string().max(255).optional(),
        status: z.enum(["active", "unsubscribed", "bounced"]).optional(),
        customFields: z.record(z.any()).optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { id, ...data } = input;
      const [contact] = await ctx.db
        .update(contacts)
        .set({ ...data, updatedAt: new Date() })
        .where(
          and(
            eq(contacts.id, id),
            eq(contacts.organizationId, ctx.organizationId),
          ),
        )
        .returning();
      return contact;
    }),

  delete: organizationProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db
        .delete(contacts)
        .where(
          and(
            eq(contacts.id, input.id),
            eq(contacts.organizationId, ctx.organizationId),
          ),
        );
      return { success: true };
    }),
});
