"use client";
import { companyTabsLabels } from "@/app/(entities)/company/contstants";
import { useCompanyStore } from "@/app/(entities)/company/store/useCompanyStore";
import { CompanyTabs } from "@/app/(entities)/company/types";
import TabPanel from "@/app/_components/TabPanel";

export default function Tabs() {
  const { tab, setTab } = useCompanyStore();

  return (
    <TabPanel<CompanyTabs>
      tabs={companyTabsLabels}
      activeTab={tab}
      setActiveTab={setTab}
    />
  );
}
