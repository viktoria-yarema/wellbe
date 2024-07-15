"use client";

import FlexColumn from "@/shared/components/Layout/FlexColumn";
import styled from "@emotion/styled";

export const StyledSearchPanelWrapper = styled(FlexColumn)`
  min-height: 78px;
  width: 100%;
  padding: 0 1rem;

  @media (min-width: 1024px) {
    * > div {
      width: 1024px;
    }
  }
`;
