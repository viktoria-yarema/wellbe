"use client";
import { MouseEvent } from "react";
import { StyledToggleAuthMethod, StyledToggleItem } from "./styled";
import { ToggleAuthMethodEnum } from "./types";

type ToggleAuthMethodProps = {
  value: ToggleAuthMethodEnum;
  handleChange: (
    event: MouseEvent<HTMLElement>,
    value: ToggleAuthMethodEnum
  ) => void;
};

export default function ToggleAuthMethod({
  value,
  handleChange,
}: ToggleAuthMethodProps) {
  return (
    <StyledToggleAuthMethod
      exclusive
      value={value}
      onChange={handleChange}
      aria-label="Platform"
    >
      <StyledToggleItem value={ToggleAuthMethodEnum.LOG_IN}>
        Log in
      </StyledToggleItem>
      <StyledToggleItem value={ToggleAuthMethodEnum.SIGN_UP}>
        Sign up
      </StyledToggleItem>
    </StyledToggleAuthMethod>
  );
}
