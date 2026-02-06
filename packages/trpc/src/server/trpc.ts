import { initTRPC, TRPCError } from "@trpc/server";
import { z } from "zod";
import { db } from "@kabootr/db";
import { auth } from "@kabootr/auth";
import superjson from "superjson";

const t = initTRPC.create({
  transformer: superjson,
});

export const createTRPCRouter = t.router;
export const publicProcedure = t.procedure;

export const protectedProcedure = t.procedure.use(async ({ ctx, next }) => {
  const session = await auth.api.getSession({
    headers: ctx.headers,
  });

  if (!session) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }

  return next({
    ctx: {
      ...ctx,
      session,
      user: session.user,
    },
  });
});

export const organizationProcedure = protectedProcedure.use(
  async ({ ctx, next }) => {
    if (!ctx.user.organizationId) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "User is not associated with an organization",
      });
    }

    return next({
      ctx: {
        ...ctx,
        organizationId: ctx.user.organizationId,
      },
    });
  },
);

export type Context = {
  headers: Headers;
  db: typeof db;
};
