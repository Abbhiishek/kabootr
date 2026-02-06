import { z } from "zod";
import { createTRPCRouter, organizationProcedure } from "../trpc.js";
import { campaigns } from "@kabootr/db";
import { eq, and, desc } from "drizzle-orm";

export const campaignRouter = createTRPCRouter({
  list: organizationProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100).default(20),
        cursor: z.string().optional(),
        status: z
          .enum(["draft", "scheduled", "sending", "sent", "paused"])
          .optional(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const whereConditions = [
        eq(campaigns.organizationId, ctx.organizationId),
      ];

      if (input.status) {
        whereConditions.push(eq(campaigns.status, input.status));
      }

      const items = await ctx.db.query.campaigns.findMany({
        where: and(...whereConditions),
        orderBy: desc(campaigns.createdAt),
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
      const campaign = await ctx.db.query.campaigns.findFirst({
        where: and(
          eq(campaigns.id, input.id),
          eq(campaigns.organizationId, ctx.organizationId),
        ),
      });
      return campaign;
    }),

  create: organizationProcedure
    .input(
      z.object({
        name: z.string().min(1).max(255),
        type: z.enum(["transactional", "marketing", "workflow"]),
        templateId: z.string().uuid().optional(),
        fromEmail: z.string().email(),
        fromName: z.string().min(1).max(255),
        replyTo: z.string().email().optional(),
        segmentId: z.string().uuid().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const [campaign] = await ctx.db
        .insert(campaigns)
        .values({
          ...input,
          organizationId: ctx.organizationId,
          status: "draft",
        })
        .returning();
      return campaign;
    }),

  update: organizationProcedure
    .input(
      z.object({
        id: z.string().uuid(),
        name: z.string().min(1).max(255).optional(),
        fromEmail: z.string().email().optional(),
        fromName: z.string().min(1).max(255).optional(),
        replyTo: z.string().email().optional(),
        scheduledAt: z.date().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { id, ...data } = input;
      const [campaign] = await ctx.db
        .update(campaigns)
        .set({ ...data, updatedAt: new Date() })
        .where(
          and(
            eq(campaigns.id, id),
            eq(campaigns.organizationId, ctx.organizationId),
          ),
        )
        .returning();
      return campaign;
    }),

  send: organizationProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      const [campaign] = await ctx.db
        .update(campaigns)
        .set({ status: "sending", updatedAt: new Date() })
        .where(
          and(
            eq(campaigns.id, input.id),
            eq(campaigns.organizationId, ctx.organizationId),
          ),
        )
        .returning();
      return campaign;
    }),
});
