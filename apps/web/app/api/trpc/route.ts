import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "@kabootr/trpc/server";
import { db } from "@kabootr/db";

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: () => ({
      headers: req.headers,
      db,
    }),
  });

export { handler as GET, handler as POST };
