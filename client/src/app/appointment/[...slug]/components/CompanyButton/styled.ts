"use client";
import styled from "@emotion/styled";
import FlexCenter from "@/shared/components/Layout/FlexCenter";
import { BORDER } from "@/shared/theme/colors";

export const StyledCompanyButton = styled(FlexCenter)`
  align-self: center;
  justify-content: flex-start;
  column-gap: 0.5rem;
  padding: 0.75rem 2rem 0.75rem 1.25rem;
  min-width: 200px;
  max-width: 260px;
  border-radius: 12px;
  border: ${BORDER};

  position: relative;
`;
