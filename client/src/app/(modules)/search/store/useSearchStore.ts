"use client";

import { create } from "zustand";

type SearchStoreStore = {
  searchValue: string;
  setSearchValue: (value: string) => void;
};

export const useSearchStore = create<SearchStoreStore>((set) => ({
  searchValue: "",
  setSearchValue: (value: string) =>
    set({
      searchValue: value,
    }),
}));
