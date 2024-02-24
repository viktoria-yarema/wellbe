"use client";
import styled from "@emotion/styled";
import FlexCenter from "@/app/_components/Layout/FlexCenter";
import { BORDER } from "@/app/_theme/colors";

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
