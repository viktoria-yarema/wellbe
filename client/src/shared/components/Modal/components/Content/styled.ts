import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const StyledModalContent = styled(Box)`
  width: 100%;
  height: 100%;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 1px;
  }

  &::-webkit-scrollbar-thumb {
    background: transparent;
  }
`;
