import styled from "@emotion/styled";
import FlexCenter from "../Layout/FlexCenter";

export const StyledAvatar = styled(FlexCenter)`
  border-radius: 50%;

  img {
    width: 100%;
    height: 100% !important;
    border-radius: 50%;
    object-fit: cover;
  }

  .MuiAvatar-root {
    width: 100%;
    height: 100%;
    font-size: 30px;
  }
`;
