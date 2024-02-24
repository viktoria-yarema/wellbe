"use client";
import { css } from "@emotion/react";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import { fonts } from "@/app/_theme/fonts";

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    white: true;
  }
}

export const StyledPrimaryButton = styled(Button)`
  ${fonts.bodyXLRegular};
  border-radius: 12px;
  padding: 12px 16px;
  text-transform: unset;
  min-width: 138px;
  box-shadow: unset;

  &.MuiButtonBase-root:hover {
    box-shadow: unset;
  }

  ${(props) =>
    props.size === "small" &&
    css`
      ${fonts.bodySLight};
      min-width: auto;
      padding: 0.4rem 1.5rem;
      border-radius: 16px;
    `}

  ${(props) =>
    props.size === "medium" &&
    css`
      ${fonts.bodyMRegular};
      min-width: auto;
      padding: 0.75rem;
    `}
`;
