import { AppointmentStatus } from "@/app/(entities)/appointment/types";
import { create } from "zustand";

export type SearchPageStore = {
  tab: AppointmentStatus;
  setTab: (tab: AppointmentStatus) => void;
};

export const useSearchStore = create<SearchPageStore>((set) => ({
  tab: AppointmentStatus.Approved,
  setTab: (tab: AppointmentStatus) =>
    set({
      tab,
    }),
}));
