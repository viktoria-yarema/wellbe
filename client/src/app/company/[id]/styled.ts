"use client";
import FlexColumn from "@/shared/components/Layout/FlexColumn";
import { COLOR_WHITE } from "@/shared/theme/colors";
import styled from "@emotion/styled";

export const StyledHeadingWrapper = styled(FlexColumn)`
  position: absolute;
  top: 0;
  left: 0;
  position: fixed;
  row-gap: 1rem;
  width: 100%;
  z-index: 200;

  background-color: ${COLOR_WHITE};
  padding-bottom: 1rem;
  border-bottom: 1px solid ${COLOR_WHITE};
`;

export const StyledContentWrapper = styled.div`
  margin-top: 290px;
  z-index: 110;
`;
