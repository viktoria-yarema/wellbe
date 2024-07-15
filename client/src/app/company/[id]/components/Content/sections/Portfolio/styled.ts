"use client";
import styled from "@emotion/styled";
import Flex from "@/shared/components/Layout/Flex";
import { GLASS_MORPHISM } from "@/shared/theme/colors";

export const StyledImgCard = styled(Flex)`
  gap: 1rem;
  position: relative;
`;

export const StyledTitle = styled(Flex)`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0.25rem 0.5rem;
  ${GLASS_MORPHISM};
`;
