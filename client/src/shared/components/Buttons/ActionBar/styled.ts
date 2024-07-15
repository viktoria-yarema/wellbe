"use client";
import styled from "@emotion/styled";
import FlexCenter from "@/shared/components/Layout/FlexCenter";

export const StyledActionsBar = styled(FlexCenter)`
  justify-content: space-between;
  column-gap: 1rem;
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;

  > button {
    width: 100%;
  }
`;
