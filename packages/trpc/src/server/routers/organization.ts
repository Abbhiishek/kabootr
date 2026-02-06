import { z } from "zod";
import {
  createTRPCRouter,
  organizationProcedure,
  protectedProcedure,
} from "../trpc.js";
import { organizations } from "@kabootr/db";
import { eq } from "drizzle-orm";

export const organizationRouter = createTRPCRouter({
  getById: protectedProcedure
    .input(z.object({ id: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      const org = await ctx.db.query.organizations.findFirst({
        where: eq(organizations.id, input.id),
      });
      return org;
    }),

  getCurrent: organizationProcedure.query(async ({ ctx }) => {
    const org = await ctx.db.query.organizations.findFirst({
      where: eq(organizations.id, ctx.organizationId),
    });
    return org;
  }),

  create: protectedProcedure
    .input(
      z.object({
        name: z.string().min(1).max(255),
        slug: z.string().min(1).max(255),
        plan: z.enum(["free", "pro", "enterprise"]).default("free"),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const [org] = await ctx.db
        .insert(organizations)
        .values({
          ...input,
        })
        .returning();
      return org;
    }),

  update: organizationProcedure
    .input(
      z.object({
        name: z.string().min(1).max(255).optional(),
        customDomain: z.string().max(255).optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const [org] = await ctx.db
        .update(organizations)
        .set({ ...input, updatedAt: new Date() })
        .where(eq(organizations.id, ctx.organizationId))
        .returning();
      return org;
    }),
});
