import AccordionServices from "@/app/_components/AccordionServices";
import { useGroupServicesQuery } from "@/app/(entities)/services/queries/useGroupServicesQuery";
import { useRouter } from "next/navigation";
import { BOOK_PATH } from "@/app/_global/routes";

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
