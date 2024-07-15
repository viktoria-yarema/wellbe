"use client";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import { fonts } from "@/shared/theme/fonts";
import { BORDER } from "@/shared/theme/colors";

export const StyledSecondaryButton = styled(Button)`
  ${fonts.bodyXLRegular};
  border-radius: 12px;
  padding: 12px 16px;
  text-transform: unset;
  min-width: 138px;
  box-shadow: unset;
  border: ${BORDER};

  &:hover {
    box-shadow: unset;
  }
`;
