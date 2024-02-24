import { useQuery } from "@tanstack/react-query";
import { getUserDetails } from "../../user/api/ getUserDetails";
import { useUserStore } from "../../user/store/useUserStore";
import { ServerUser } from "../../user/types";

export const useUserDetailsQuery = () => {
  const { firebaseUser, setUser } = useUserStore();

  return useQuery({
    queryKey: ["userDetails", (firebaseUser as ServerUser)?.uid],
    queryFn: async () => {
      const user = await getUserDetails(
        (firebaseUser as ServerUser)?.uid ?? ""
      );
      setUser(user);

      return user;
    },
    enabled: Boolean(firebaseUser),
  });
};
