import { create } from "zustand";
import { CompanyTabs } from "../types";

export type CompanyStore = {
  tab: CompanyTabs;
  setTab: (tab: CompanyTabs) => void;
};

export const useCompanyStore = create<CompanyStore>((set) => ({
  tab: CompanyTabs.SERVICES,
  setTab: (tab: CompanyTabs) =>
    set({
      tab,
    }),
}));
