import styled from "@emotion/styled";
import { BORDER } from "@/app/_theme/colors";
import Flex from "../Layout/Flex";
import FlexColumn from "../Layout/FlexColumn";
import FlexCenter from "../Layout/FlexCenter";

export const StyledAppointmentCard = styled(Flex)`
  justify-content: space-between;
  border-radius: 18px;
  border: ${BORDER};

  /* box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.08); */
`;

export const StyledTimeBlock = styled(FlexColumn)`
  justify-content: center;
  padding: 1.25rem 1rem 0.75rem;
  border-left: ${BORDER};
  position: relative;

  span {
    text-align: center;
  }
`;

export const StyledArrowWrapper = styled(FlexCenter)`
  position: absolute;
  top: 0.25rem;
  right: 0.5rem;
`;
