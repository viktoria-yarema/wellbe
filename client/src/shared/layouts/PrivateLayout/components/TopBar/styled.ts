"use client";
import styled from "@emotion/styled";
import { BORDER, COLOR_WHITE } from "@/shared/theme/colors";

export const StyledTopBar = styled.aside`
  padding: 16px;
  width: 100%;
  background-color: ${COLOR_WHITE};
  border-bottom: ${BORDER};
  display: flex;
  justify-content: center;
`;

export const StyledLogoTitle = styled.span`
  font-size: 24px;
`;
