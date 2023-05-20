import { createTRPCRouter } from "~/server/api/trpc";
// import { exampleRouter } from "~/server/api/routers/example";
import { inviteesRouter } from "~/server/api/routers/invitees";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  invitees: inviteesRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
