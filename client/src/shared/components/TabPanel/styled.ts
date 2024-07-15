"use client";
import styled from "@emotion/styled";
import { fonts } from "@/shared/theme/fonts";
import { BORDER, COLOR_SECONDARY, COLOR_WHITE } from "@/shared/theme/colors";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

export const StyledTab = styled(Tab)({
  ...fonts.bodyMRegular,
  borderRadius: "8px",
  padding: "4px 12px",
  boxShadow: "unset",
  textTransform: "unset",
  minHeight: "32px",
  minWidth: "unset",
  "&.Mui-selected": {
    background: COLOR_SECONDARY,
    color: COLOR_WHITE,
    border: "unset",
  },
  border: BORDER,
  boxSizing: "border-box",
});

export const StyledTabs = styled(Tabs)`
  .MuiTabs-indicator {
    display: none;
  }

  .MuiTabs-flexContainer {
    column-gap: 12px;
    overflow-x: auto;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &.MuiTabs-root {
    min-height: unset;
  }
`;
