"use client";

import { createAuthClient } from "better-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
});

export { authClient };

export const { signIn, signUp, signOut, useSession, getSession } = authClient;

export function useAuth() {
  const { data: session, isPending, error } = useSession();
  const router = useRouter();

  return {
    user: session?.user,
    session,
    isLoading: isPending,
    error,
    isAuthenticated: !!session?.user,
    signIn: async (email: string, password: string) => {
      const result = await signIn.email({ email, password });
      if (!result.error) {
        router.push("/");
        router.refresh();
      }
      return result;
    },
    signUp: async (email: string, password: string, name: string) => {
      const result = await signUp.email({ email, password, name });
      if (!result.error) {
        router.push("/");
        router.refresh();
      }
      return result;
    },
    signOut: async () => {
      await signOut();
      router.push("/login");
      router.refresh();
    },
  };
}

export function useRequireAuth(redirectTo: string = "/login") {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push(redirectTo);
    }
  }, [user, isLoading, router, redirectTo]);

  return { user, isLoading };
}

export function useRedirectIfAuthenticated(redirectTo: string = "/") {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && user) {
      router.push(redirectTo);
    }
  }, [user, isLoading, router, redirectTo]);

  return { user, isLoading };
}
