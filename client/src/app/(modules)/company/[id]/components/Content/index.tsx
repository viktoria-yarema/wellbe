"use client";

import { useCompanyStore } from "@/app/(entities)/company/store/useCompanyStore";
import { Company, CompanyTabs } from "@/app/(entities)/company/types";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const ReviewsDynamic = dynamic(() => import("./sections/Reviews"));
const PortfolioDynamic = dynamic(() => import("./sections/Portfolio"));
const GeneralDynamic = dynamic(() => import("./sections/General"));
const ServicesDynamic = dynamic(() => import("./sections/Services"));

type ContentProps = {
  company: Company;
};

export default function Content({ company }: ContentProps) {
  const { tab } = useCompanyStore();

  const tabsContent = {
    [CompanyTabs.GENERAL]: <GeneralDynamic company={company} />,
    [CompanyTabs.SERVICES]: <ServicesDynamic companyId={company.id} />,
    [CompanyTabs.REVIEWS]: <ReviewsDynamic companyId={company.id} />,
    [CompanyTabs.PORTFOLIO]: (
      <PortfolioDynamic portfolioImages={company.portfolio ?? []} />
    ),
  };

  return <Suspense fallback="Loading tab data...">{tabsContent[tab]}</Suspense>;
}
