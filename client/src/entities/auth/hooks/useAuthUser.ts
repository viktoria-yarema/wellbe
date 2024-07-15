import { onAuthStateChanged } from "firebase/auth";
import { useUserStore } from "../../user/store/useUserStore";
import { useEffect } from "react";
import { auth } from "@/firebase";

export const useAuthUser = () => {
  const { setFirebaseUser } = useUserStore();

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => setFirebaseUser(user));
  }, []);
};
