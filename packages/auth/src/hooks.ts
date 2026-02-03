import { useSession } from "./client.js";

export function useUser() {
  const { data: session } = useSession();
  return session?.user;
}

export function useIsAuthenticated() {
  const { data: session } = useSession();
  return !!session?.user;
}

export function useOrganization() {
  const user = useUser();
  return user?.organizationId;
}

export function useUserRole() {
  const user = useUser();
  return user?.role;
}
