"use client";
import { companyTabsLabels } from "@/app/(entities)/company/contstants";
import { CompanyTabs } from "@/app/(entities)/company/types";
import TabPanel from "@/app/_components/TabPanel";
import { useState } from "react";

export default function Tabs() {
  const [tab, setTab] = useState(CompanyTabs.SERVICES);

  return (
    <TabPanel<CompanyTabs> tabs={companyTabsLabels} activeTab={tab} setActiveTab={setTab} />
  );
}
