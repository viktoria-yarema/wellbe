import styled from "@emotion/styled";
import FlexCenter from "../Layout/FlexCenter";

export const StyledAvatar = styled(FlexCenter)`
  border-radius: 50%;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: contain;
  }
`;
