"use client";
import styled from "@emotion/styled";
import FlexColumn from "@/shared/components/Layout/FlexColumn";

export const StyledContainer = styled(FlexColumn)`
  justify-content: unset;
  height: 100vh;
  padding-bottom: 16px;

  @media (min-width: 1024px) {
    width: 1024px;
    margin: 0 auto;
  }
`;
