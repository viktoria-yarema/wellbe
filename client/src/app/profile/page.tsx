import { StyledProfileContainer } from "./styled";
import Divider from "@/shared/components/Divider";
import FlexColumn from "@/shared/components/Layout/FlexColumn";
import Details from "./components/Details";

export default function ProfilePage() {
  return (
    <StyledProfileContainer>
      <FlexColumn rowGap={"2rem"}>
        <Details />
        <Divider />
      </FlexColumn>
    </StyledProfileContainer>
  );
}
