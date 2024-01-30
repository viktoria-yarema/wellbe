import styled from "@emotion/styled";
import { BORDER } from "@/app/_theme/colors";
import Flex from "../Layout/Flex";
import FlexColumn from "../Layout/FlexColumn";
import FlexCenter from "../Layout/FlexCenter";

export const StyledAppointmentCard = styled(Flex)`
  justify-content: space-between;
  border-radius: 18px;
  border: ${BORDER};
`;

export const StyledContent = styled(FlexColumn)`
  row-gap: 0.5rem;
  padding: 0.75rem 1rem;
  justify-content: space-around;
`;

export const StyledTimeBlock = styled(FlexColumn)`
  justify-content: center;
  border-left: ${BORDER};
  position: relative;
  max-width: 40%;
  min-width: 40%;
  row-gap: 0.5rem;

  span {
    text-align: center;
  }
`;

export const StyledArrowWrapper = styled(FlexCenter)`
  position: absolute;
  top: 0.25rem;
  right: 0.5rem;
`;
