import { create } from "zustand";
import { ServerUser, UserDetails } from "../types";

export type UserStore = {
  firebaseUser: ServerUser | null | false;
  user: UserDetails | null;
  setUser: (user: UserDetails | null) => void;
  setFirebaseUser: (user: ServerUser | null | false) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  firebaseUser: false,
  user: null,
  setUser: (user: UserDetails | null) =>
    set({
      user,
    }),
  setFirebaseUser: (firebaseUser: ServerUser | null | false) =>
    set({
      firebaseUser,
    }),
}));
