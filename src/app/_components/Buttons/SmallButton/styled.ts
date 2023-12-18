"use client";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import { fonts } from "@/app/_theme/fonts";

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    white: true;
  }
}

export const StyledSmallButton = styled(Button)({
  ...fonts.bodySRegular,
  borderRadius: "12px",
  padding: "2px 12px",
  textTransform: "unset",
  boxShadow: "unset",
  height: "28px",
});
