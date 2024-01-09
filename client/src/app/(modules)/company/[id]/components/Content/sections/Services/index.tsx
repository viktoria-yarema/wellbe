import { GroupServices } from "@/app/(entities)/services/types";
import AccordionServices from "@/app/_components/AccordionServices";

type ServicesProps = {
  groupsServices: GroupServices[];
};

export default function Services({ groupsServices }: ServicesProps) {
  return <AccordionServices servicesGroups={groupsServices} />;
}
