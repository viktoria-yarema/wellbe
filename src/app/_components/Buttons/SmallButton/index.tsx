"use client";

import { ButtonProps } from "@mui/material/Button";
import { StyledSmallButton } from "./styled";

type SmallButtonProps = {
  title: string;
} & ButtonProps;

export default function SmallButton({ title, ...props }: SmallButtonProps) {
  return (
    <StyledSmallButton
      color="primary"
      variant="contained"
      size="medium"
      {...props}
    >
      {title}
    </StyledSmallButton>
  );
}
