"use client";
import { COLOR_SECONDARY, COLOR_GREY_LIGHT } from "@/shared/theme/colors";
import styled from "@emotion/styled";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { fonts } from "@/shared/theme/fonts";
import { css } from "@emotion/react";

export const StyledToggleAuthMethod = styled(ToggleButtonGroup)`
  &.MuiToggleButtonGroup-root {
    background-color: ${COLOR_GREY_LIGHT};
    border: unset;
    box-shadow: unset;
    border-radius: 12px;
    width: 216px;
    height: 40px;
  }
`;

export const StyledToggleItem = styled(ToggleButton)`
  ${() => css`
    ${fonts.bodyLMedium};
    text-transform: capitalize;
    width: 100%;
    border: unset;
    color: ${COLOR_SECONDARY};
    border-radius: 12px;
    height: 40px;

    &.Mui-selected,
    &.Mui-selected:hover {
      background-color: ${COLOR_SECONDARY};
      color: ${COLOR_GREY_LIGHT};
    }
  `}
`;
