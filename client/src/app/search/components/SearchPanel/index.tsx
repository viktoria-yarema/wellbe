"use client";

import SearchField from "@/shared/components/Forms/SearchField";
import { StyledSearchPanelWrapper } from "./styled";
import { useSearchStore } from "../../store/useSearchStore";

export function SearchPanel() {
  const searchStore = useSearchStore();

  return (
    <StyledSearchPanelWrapper bgcolor={"primary.dark"}>
      <SearchField
        value={searchStore.searchValue}
        onChange={searchStore.setSearchValue}
        placeholder="Search your service"
        textFieldProps={{ fullWidth: true, autoComplete: "off" }}
      />
    </StyledSearchPanelWrapper>
  );
}
