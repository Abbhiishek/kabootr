import { auth } from "./index.js";

export const authConfig = {
  basePath: "/api/auth",
  secret: process.env.AUTH_SECRET || "your-secret-key-here",
  trustedOrigins: process.env.TRUSTED_ORIGINS?.split(",") || [
    "http://localhost:3000",
  ],
};

export { auth };
