"use client";
import styled from "@emotion/styled";
import FlexColumn from "@/shared/components/Layout/FlexColumn";

export const StyledPageContainer = styled(FlexColumn)`
  row-gap: 1rem;
  padding: 1rem;
  margin-top: 1rem;

  @media (min-width: 1024px) {
    width: 1024px;
    margin: 0 auto;
  }
`;
