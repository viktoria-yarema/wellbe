import styled from "@emotion/styled";
import { BORDER, COLOR_BLACK, COLOR_WHITE } from "@/app/_theme/colors";
import Flex from "@/app/_components/Layout/Flex";

export const StyledTimeChip = styled(Flex)`
  border-radius: 12px;
  border: ${BORDER};
  padding: 0.5rem 1rem;
  border-color: ${COLOR_BLACK};

  &.active {
    background-color: ${COLOR_BLACK};
    color: ${COLOR_WHITE};
  }
`;
