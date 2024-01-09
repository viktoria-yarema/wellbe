"use client";

import { alpha } from "@mui/material";

export const COLOR_WHITE = "#FFFFFF";
export const COLOR_BLACK = "#000000";
export const COLOR_PRIMARY = "#FF962F";
export const COLOR_PRIMARY_DARK = "#DC6C1D";
export const COLOR_SECONDARY = "#222222";
export const COLOR_ERROR = "#DB0000";
export const COLOR_SUCCESS = "#88FD2C";
export const COLOR_INFO = "#64D1FF";
export const COLOR_WARN = "#FFE352";
export const COLOR_GREY_LIGHT = "#F4F4F4";
export const COLOR_GREY_MEDIUM = "#D9D9D9";
export const COLOR_CARD = alpha(COLOR_GREY_MEDIUM, 0.1);
export const COLOR_TEXT_SECONDARY = alpha(COLOR_BLACK, 0.6);
export const COLOR_SECONDARY_LIGHTEN = alpha(COLOR_SECONDARY, 0.8);
export const COLOR_BORDER = alpha(COLOR_SECONDARY, 0.2);

export const BORDER = `0.2px solid ${COLOR_BORDER}`;
export const GLASS_MORPHISM =
  "background: rgba(255, 255, 255, 0.2); backdrop-filter: blur(10px);";
