"use client";

import styled from "@emotion/styled";
import Box, { BoxProps } from "@mui/material/Box";
import { ReactNode } from "react";

const Component = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

type FlexColumnProps = { children: ReactNode } & BoxProps;

export default function FlexColumn({ children, ...props }: FlexColumnProps) {
  return <Component {...props}>{children}</Component>;
}
