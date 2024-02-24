import { getCompanyId } from "@/app/(entities)/company/api/getCompanyId";
import Heading from "./components/Heading";
import Divider from "@/app/_components/Divider";
import Tabs from "./components/Tabs";
import Content from "./components/Content";
import Flex from "@/app/_components/Layout/Flex";
import { StyledContentWrapper, StyledHeadingWrapper } from "./styled";
import PageContainer from "@/app/_components/PageContainer";
import { queryClient } from "@/app/_global/queryClient";
import { getGroupsServices } from "@/app/(entities)/services/api/getGroupsServices";
import { getCompanyComments } from "@/app/(entities)/comments/api/getCompanyComments";

export default async function CompanyDetails({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const company = await getCompanyId(id);
  await queryClient.prefetchQuery({
    queryKey: ["servicesGroup", { id }],
    queryFn: () => getGroupsServices(id),
  });

  await queryClient.prefetchQuery({
    queryKey: ["comments", { companyId: id }],
    queryFn: () => getCompanyComments(id),
  });

  return (
    <PageContainer p={0} position={"relative"}>
      <StyledHeadingWrapper>
        <Heading company={company} />
        <Divider />
        <Flex pl="1rem">
          <Tabs />
        </Flex>
      </StyledHeadingWrapper>
      <StyledContentWrapper>
        <Content company={company} />
      </StyledContentWrapper>
    </PageContainer>
  );
}
