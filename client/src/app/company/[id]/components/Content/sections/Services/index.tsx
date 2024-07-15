"use client";

import AccordionServices from "@/shared/components/AccordionServices";
import { useGroupServicesQuery } from "@/entities/services/queries/useGroupServicesQuery";
import { useRouter } from "next/navigation";
import { BOOK_PATH } from "@/shared/global/routes";

type ServicesProps = {
  companyId: string;
};

export default function Services({ companyId }: ServicesProps) {
  const { data: groupsServices = [] } = useGroupServicesQuery(companyId);
  const router = useRouter();

  const handleBook = (serviceId: string) =>
    router.push(`${BOOK_PATH.replace("id", companyId)}/${serviceId}`);

  return (
    <AccordionServices
      servicesGroups={groupsServices}
      handleAction={handleBook}
    />
  );
}
