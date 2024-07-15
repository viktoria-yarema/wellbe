"use client";
import { companyTabsLabels } from "@/entities/company/contstants";
import { useCompanyStore } from "@/entities/company/store/useCompanyStore";
import { CompanyTabs } from "@/entities/company/types";
import TabPanel from "@/shared/components/TabPanel";

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
