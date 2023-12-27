"use client";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import { fonts } from "@/app/_theme/fonts";

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    white: true;
  }
}

export const StyledPrimaryButton = styled(Button)({
  ...fonts.bodyXLRegular,
  borderRadius: "12px",
  padding: "12px 16px",
  textTransform: "unset",
  boxShadow: "unset",
  minWidth: "138px",
});
