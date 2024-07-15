"use client";
import styled from "@emotion/styled";
import Flex from "../Layout/Flex";
import FlexCenter from "../Layout/FlexCenter";
import { COLOR_GREY_LIGHT, GLASS_MORPHISM } from "@/shared/theme/colors";

export const StyledHeader = styled(Flex)`
  height: 38px;
  justify-content: space-between;
  z-index: 100;
  align-items: center;
`;

export const StyledIconWrapper = styled(FlexCenter)`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${COLOR_GREY_LIGHT};
  ${GLASS_MORPHISM};
`;
