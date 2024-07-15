"use client";
import styled from "@emotion/styled";
import { COLOR_GREY_MEDIUM, GLASS_MORPHISM } from "@/shared/theme/colors";
import Flex from "../Layout/Flex";
import FlexColumn from "../Layout/FlexColumn";
import FlexCenter from "../Layout/FlexCenter";
import { COMPANY_CARD_HEIGH } from "./constants";

export const StyledCompanyCard = styled(Flex)`
  border-radius: 12px;
  position: relative;
  background-color: ${COLOR_GREY_MEDIUM};
  height: ${COMPANY_CARD_HEIGH}px;

  img {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 12px;
    width: 100% !important;
  }
`;

export const StyledCompanyBottom = styled(Flex)`
  padding: 0.5rem 0.75rem;
  position: absolute;
  bottom: 0;
  width: 100%;
  ${GLASS_MORPHISM};

  border-radius: 0 0 12px 12px;
`;

export const StyledRate = styled(FlexColumn)`
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  position: absolute;
  top: 0;
  left: 0;

  ${GLASS_MORPHISM};

  border-radius: 12px 0 12px 0;

  span {
    text-align: center;
  }
`;

export const StyledFavorite = styled(FlexCenter)`
  max-width: 42px;
  padding: 0.5rem;
  position: absolute;
  top: 0;
  right: 0;

  height: 52px;
  width: 52px;

  ${GLASS_MORPHISM};

  border-radius: 0 12px 0 12px;
`;
