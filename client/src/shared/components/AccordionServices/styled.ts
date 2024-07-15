import styled from "@emotion/styled";
import AccordionSummary from "@mui/material/AccordionSummary";
import { COLOR_CARD } from "@/shared/theme/colors";
import Accordion from "@mui/material/Accordion";
import Flex from "../Layout/Flex";
import FlexCenter from "../Layout/FlexCenter";

export const StyledAccordion = styled(Accordion)`
  &.MuiAccordion-root {
    box-shadow: unset;
    background-color: ${COLOR_CARD};
    border-radius: 12px;
    padding: 0 1rem;

    &::before {
      display: none;
    }
  }
`;

export const StyledAccordionHeading = styled(AccordionSummary)`
  &.MuiAccordionSummary-root {
    min-height: unset;
    padding: 0;
  }

  .MuiAccordionSummary-content {
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
    min-height: auto;

    &.Mui-expanded {
      margin: 1rem 0;
    }
  }
`;

export const StyledAccordionContent = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  column-gap: 0.5rem;
`;

export const StyledArrow = styled(FlexCenter)<{ opened: boolean }>`
  transform: rotate(180deg);
  ${(props) => props.opened && ` transform: rotate(-90deg);`}
`;
