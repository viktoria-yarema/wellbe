import styled from "@emotion/styled";
import { BORDER } from "@/shared/theme/colors";
import FlexColumn from "@/shared/components/Layout/FlexColumn";

export const StyledCommentCard = styled(FlexColumn)`
  padding: 0.75rem 1rem;
  justify-content: space-between;
  border-radius: 8px;
  border: ${BORDER};
  row-gap: 0.75rem;
`;
