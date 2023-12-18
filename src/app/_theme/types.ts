import { Breakpoints, Theme } from "@mui/material/styles";
import "@mui/styles";
import React from "react";

export type IconType = {
  color?: string;
  size?: number;
};

declare module "@mui/material/styles" {
  // tslint:disable-next-line:no-empty-interface
  interface DefaultTheme extends Theme {
    breakpoints: Breakpoints;
  }
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    heading1: React.CSSProperties;
    heading2: React.CSSProperties;
    heading3: React.CSSProperties;
    heading3Bold: React.CSSProperties;
    heading4: React.CSSProperties;
    heading4Bold: React.CSSProperties;
    heading5: React.CSSProperties;
    heading5Bold: React.CSSProperties;
    heading6: React.CSSProperties;

    bodyXLSemiBold: React.CSSProperties;
    bodyXLMedium: React.CSSProperties;
    bodyXLRegular: React.CSSProperties;

    bodyLSemiBold: React.CSSProperties;
    bodyLMedium: React.CSSProperties;
    bodyLRegular: React.CSSProperties;

    bodyMSemiBold: React.CSSProperties;
    bodyMMedium: React.CSSProperties;
    bodyMRegular: React.CSSProperties;

    bodySSemiBold: React.CSSProperties;
    bodySMedium: React.CSSProperties;
    bodySRegular: React.CSSProperties;
    bodySLight?: React.CSSProperties;

    bodyXSSemiBold: React.CSSProperties;
    bodyXSMedium: React.CSSProperties;
    bodyXSRegular: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    heading1?: React.CSSProperties;
    heading2?: React.CSSProperties;
    heading3?: React.CSSProperties;
    heading3Bold?: React.CSSProperties;
    heading4?: React.CSSProperties;
    heading4Bold?: React.CSSProperties;
    heading5?: React.CSSProperties;
    heading5Bold?: React.CSSProperties;
    heading6?: React.CSSProperties;

    bodyXLSemiBold?: React.CSSProperties;
    bodyXLMedium?: React.CSSProperties;
    bodyXLRegular?: React.CSSProperties;

    bodyLSemiBold?: React.CSSProperties;
    bodyLMedium?: React.CSSProperties;
    bodyLRegular?: React.CSSProperties;

    bodyMSemiBold?: React.CSSProperties;
    bodyMMedium?: React.CSSProperties;
    bodyMRegular?: React.CSSProperties;

    bodySSemiBold?: React.CSSProperties;
    bodySMedium?: React.CSSProperties;
    bodySRegular?: React.CSSProperties;
    bodySLight?: React.CSSProperties;

    bodyXSSemiBold?: React.CSSProperties;
    bodyXSMedium?: React.CSSProperties;
    bodyXSRegular?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    heading1: true;
    heading2: true;
    heading3: true;
    heading3Bold: true;
    heading4: true;
    heading4Bold: true;
    heading5: true;
    heading5Bold: true;
    heading6: true;

    bodyXLSemiBold: true;
    bodyXLMedium: true;
    bodyXLRegular: true;

    bodyLSemiBold: true;
    bodyLMedium: true;
    bodyLRegular: true;

    bodyMSemiBold: true;
    bodyMMedium: true;
    bodyMRegular: true;

    bodySSemiBold: true;
    bodySMedium: true;
    bodySRegular: true;
    bodySLight: true;

    bodyXSSemiBold: true;
    bodyXSMedium: true;
    bodyXSRegular: true;
  }
}

declare module "@mui/material/styles" {
  interface Palette {
    card: Palette["primary"];
    natural?: Pick<Palette["primary"], "main" | "light">;
    white: Pick<Palette["primary"], "main">;
    black: Pick<Palette["primary"], "main">;
  }

  interface PaletteOptions {
    card?: PaletteOptions["primary"];
    natural?: Pick<Palette["primary"], "main" | "light">;
    white: Pick<Palette["primary"], "main">;
    black: Pick<Palette["primary"], "main">;
  }
}
