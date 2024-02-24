"use client";
import React from "react";
import Flex from "../Layout/Flex";
import { StyledTab, StyledTabs } from "./styled";

export type TabItem<T> = {
  value: T;
  label: string;
};

type TabPaneProps<T> = {
  tabs: TabItem<T>[];
  activeTab: T;
  setActiveTab: (value: T) => void;
};

export default function TabPanel<T>({
  tabs,
  activeTab,
  setActiveTab,
}: TabPaneProps<T>) {
  const handleChange = (event: React.SyntheticEvent, newValue: T) => {
    setActiveTab(newValue);
  };

  return (
    <Flex>
      <StyledTabs value={activeTab} onChange={handleChange}>
        {tabs.map((tab) => (
          <StyledTab label={tab.label} key={tab.label} value={tab.value} />
        ))}
      </StyledTabs>
    </Flex>
  );
}
