"use client";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import { fonts } from "@/app/_theme/fonts";
import { BORDER } from "@/app/_theme/colors";

export const StyledSecondaryButton = styled(Button)({
  ...fonts.bodyXLRegular,
  borderRadius: "12px",
  padding: "12px 16px",
  textTransform: "unset",
  boxShadow: "unset",
  minWidth: "138px",
  border: BORDER,
});
