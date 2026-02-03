import { headers } from "next/headers";
import { auth } from "./index.js";

export async function getServerSession() {
  return await auth.api.getSession({
    headers: await headers(),
  });
}

export async function requireAuth() {
  const session = await getServerSession();

  if (!session) {
    throw new Error("Unauthorized");
  }

  return session;
}

export async function getCurrentUser() {
  const session = await getServerSession();
  return session?.user;
}

export { auth };
