import FlexColumn from "@/app/_components/Layout/FlexColumn";
import { COLOR_WHITE } from "@/app/_theme/colors";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

export const StyledModalHeader = styled(Box)`
  width: 100%;
  background-color: ${COLOR_WHITE};
`;

export const StyledHeader = styled(FlexColumn)`
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  height: 3rem;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
`;

export const StyledIconButton = styled(IconButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  padding: 0.25rem;
`;
