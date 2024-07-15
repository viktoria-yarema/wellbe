"use client";

import styled from "@emotion/styled";
import Box, { BoxProps } from "@mui/material/Box";
import { ReactNode } from "react";

const Component = styled(Box)`
  display: flex;
`;

type FlexProps = { children: ReactNode } & BoxProps;

export default function Flex({ children, ...props }: FlexProps) {
  return <Component {...props}>{children}</Component>;
}
