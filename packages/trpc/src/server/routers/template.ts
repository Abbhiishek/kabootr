import { z } from "zod";
import { createTRPCRouter, organizationProcedure } from "../trpc.js";
import { templates } from "@kabootr/db";
import { eq, and } from "drizzle-orm";

export const templateRouter = createTRPCRouter({
  list: organizationProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100).default(20),
        cursor: z.string().optional(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const items = await ctx.db.query.templates.findMany({
        where: eq(templates.organizationId, ctx.organizationId),
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
      const template = await ctx.db.query.templates.findFirst({
        where: and(
          eq(templates.id, input.id),
          eq(templates.organizationId, ctx.organizationId),
        ),
      });
      return template;
    }),

  create: organizationProcedure
    .input(
      z.object({
        name: z.string().min(1).max(255),
        subject: z.string().min(1).max(500),
        markdownContent: z.string().min(1),
        variables: z.array(z.string()).optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const [template] = await ctx.db
        .insert(templates)
        .values({
          ...input,
          organizationId: ctx.organizationId,
        })
        .returning();
      return template;
    }),

  update: organizationProcedure
    .input(
      z.object({
        id: z.string().uuid(),
        name: z.string().min(1).max(255).optional(),
        subject: z.string().min(1).max(500).optional(),
        markdownContent: z.string().min(1).optional(),
        htmlPreview: z.string().optional(),
        variables: z.array(z.string()).optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { id, ...data } = input;
      const [template] = await ctx.db
        .update(templates)
        .set({ ...data, updatedAt: new Date() })
        .where(
          and(
            eq(templates.id, id),
            eq(templates.organizationId, ctx.organizationId),
          ),
        )
        .returning();
      return template;
    }),

  delete: organizationProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db
        .delete(templates)
        .where(
          and(
            eq(templates.id, input.id),
            eq(templates.organizationId, ctx.organizationId),
          ),
        );
      return { success: true };
    }),
});
