import { useAuthUser } from "../(entities)/auth/hooks/useAuthUser";
import { useUserDetailsQuery } from "../(entities)/auth/queries/useUserDetailsQuery";

export function GlobalSideEffects() {
  useAuthUser();
  useUserDetailsQuery();
  return null;
}
