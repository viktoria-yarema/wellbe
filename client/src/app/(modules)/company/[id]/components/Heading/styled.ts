"use client";
import styled from "@emotion/styled";
import { COLOR_GREY_MEDIUM } from "@/app/_theme/colors";
import Flex from "@/app/_components/Layout/Flex";
import FlexColumn from "@/app/_components/Layout/FlexColumn";

export const StyledCompanyHeading = styled(FlexColumn)`
  /* position: relative; */
  background-color: ${COLOR_GREY_MEDIUM};
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: -1;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100% !important;

    z-index: -1;
  }
`;
