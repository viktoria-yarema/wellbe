"use client";
import styled from "@emotion/styled";
import PageContainer from "@/shared/components/PageContainer";

export const StyledProfileContainer = styled(PageContainer)`
  justify-content: space-between;
  height: calc(100% - 160px);

  @media (min-width: 1024px) {
    width: 500px;
    margin: 0 auto;
  }
`;
