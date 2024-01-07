import { getCompanyId } from "@/app/(entities)/company/api/getCompanyId";
import FlexColumn from "@/app/_components/Layout/FlexColumn";
import Heading from "./components/Heading";
import Divider from "@/app/_components/Divider";
import Tabs from "./components/Tabs";
import AccordionServices from "@/app/_components/AccordionServices";

export default async function CompanyDetails({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const company = await getCompanyId(id);
  return (
    <FlexColumn p={0} rowGap={"1rem"}>
      <Heading company={company} />
      <Divider />
      <Tabs />
      <AccordionServices servicesGroups={company.groupsServices} />
    </FlexColumn>
  );
}
