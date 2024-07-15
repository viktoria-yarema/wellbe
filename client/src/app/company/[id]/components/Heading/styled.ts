"use client";
import styled from "@emotion/styled";
import { COLOR_GREY_MEDIUM } from "@/shared/theme/colors";
import FlexColumn from "@/shared/components/Layout/FlexColumn";

export const StyledCompanyHeading = styled(FlexColumn)`
  background-color: ${COLOR_GREY_MEDIUM};
  left: 0;
  top: 0;
  right: 0;
  z-index: 100;

  img {
    width: 100% !important;
    z-index: -1;
    object-fit: cover;
  }
`;

export const StyledHeaderWrapper = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  right: 1rem;
`;
