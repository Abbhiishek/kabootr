import { createTRPCRouter } from "./trpc.js";
import { organizationRouter } from "./routers/organization.js";
import { userRouter } from "./routers/user.js";
import { contactRouter } from "./routers/contact.js";
import { campaignRouter } from "./routers/campaign.js";
import { templateRouter } from "./routers/template.js";

export const appRouter = createTRPCRouter({
  organization: organizationRouter,
  user: userRouter,
  contact: contactRouter,
  campaign: campaignRouter,
  template: templateRouter,
});

export type AppRouter = typeof appRouter;
