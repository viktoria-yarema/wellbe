import { ThemeOptions } from "@mui/material/styles";
import { fonts } from "./fonts";
import { Open_Sans } from "next/font/google";

import {
  COLOR_BLACK,
  COLOR_CARD,
  COLOR_ERROR,
  COLOR_GREY_LIGHT,
  COLOR_GREY_MEDIUM,
  COLOR_PRIMARY,
  COLOR_SECONDARY,
  COLOR_SECONDARY_LIGHTEN,
  COLOR_SUCCESS,
  COLOR_TEXT_SECONDARY,
  COLOR_WARN,
  COLOR_WHITE,
} from "./colors";

const openSans = Open_Sans({
  weight: ["300", "400", "500", "700"],
  style: "normal",
  subsets: ["latin"],
  display: "swap",
});

export const themeOptions: ThemeOptions = {
  breakpoints: {
    values: {
      xs: 374, // Tiny Mobile
      sm: 680, // Mobile
      md: 1000, // Desktop
      lg: 1280,
      xl: 1920,
    },
  },
  spacing: [0, 4, 8, 16, 18, 24, 32, 64],
  typography: {
    fontFamily: openSans.style.fontFamily,
    ...fonts,
  },
  palette: {
    background: {
      default: COLOR_WHITE,
    },
    text: {
      primary: COLOR_SECONDARY,
      secondary: COLOR_TEXT_SECONDARY,
    },
    primary: {
      main: COLOR_PRIMARY,
    },
    secondary: {
      main: COLOR_SECONDARY,
      light: COLOR_SECONDARY_LIGHTEN,
    },
    error: {
      main: COLOR_ERROR,
    },
    warning: {
      main: COLOR_WARN,
    },
    success: {
      main: COLOR_SUCCESS,
    },
    card: {
      main: COLOR_CARD,
    },
    natural: {
      main: COLOR_GREY_MEDIUM,
      light: COLOR_GREY_LIGHT,
    },
    white: {
      main: COLOR_WHITE,
    },
    black: {
      main: COLOR_BLACK,
    },
  },
};
