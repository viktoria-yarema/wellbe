import { getCompanyId } from "@/app/(entities)/company/api/getCompanyId";
import FlexColumn from "@/app/_components/Layout/FlexColumn";
import Heading from "./components/Heading";
import Divider from "@/app/_components/Divider";
import Tabs from "./components/Tabs";
import Content from "./components/Content";
import Flex from "@/app/_components/Layout/Flex";
import { StyledContentWrapper, StyledHeadingWrapper } from "./styled";

export default async function CompanyDetails({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const company = await getCompanyId(id);

  return (
    <FlexColumn p={0} rowGap={"1rem"} position={"relative"}>
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
    </FlexColumn>
  );
}
