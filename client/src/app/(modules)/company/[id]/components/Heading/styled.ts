"use client";
import styled from "@emotion/styled";
import {
  COLOR_SECONDARY_LIGHTEN,
  COLOR_GREY_MEDIUM,
} from "@/app/_theme/colors";
import FlexColumn from "@/app/_components/Layout/FlexColumn";

export const StyledCompanyHeading = styled(FlexColumn)`
  background-color: ${COLOR_GREY_MEDIUM};
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 100;
  padding: 1rem;

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 220px;
    background-color: ${COLOR_SECONDARY_LIGHTEN};
    position: absolute;
    top: 0;
    left: 0;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100% !important;

    z-index: -1;
  }
`;
