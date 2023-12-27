import styled from "@emotion/styled";
import Box, { BoxProps } from "@mui/material/Box";
import { ReactNode } from "react";

const Component = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

type FlexCenterProps = { children: ReactNode } & BoxProps;

export default function FlexCenter({ children, ...props }: FlexCenterProps) {
  return <Component {...props}>{children}</Component>;
}
