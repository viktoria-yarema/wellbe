"use client";

import { useCompanyStore } from "@/app/(entities)/company/store/useCompanyStore";
import { Company, CompanyTabs } from "@/app/(entities)/company/types";
import Services from "./sections/Services";
import Portfolio from "./sections/Portfolio";
import General from "./sections/General";
import Reviews from "./sections/Reviews";

type ContentProps = {
  company: Company;
};

export default function Content({ company }: ContentProps) {
  const { tab } = useCompanyStore();

  const tabsContent = {
    [CompanyTabs.GENERAL]: <General />,
    [CompanyTabs.SERVICES]: (
      <Services groupsServices={company.groupsServices} />
    ),
    [CompanyTabs.REVIEWS]: <Reviews />,
    [CompanyTabs.PORTFOLIO]: <Portfolio />,
  };

  return <div>{tabsContent[tab]}</div>;
}
