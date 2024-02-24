import { ReactNode } from "react";
import { StyledPageContainer } from "./styled";
import { BoxProps } from "@mui/material";

type PageContainer = {
  children: ReactNode;
} & BoxProps;

export default function PageContainer({ children, ...props }: PageContainer) {
  return <StyledPageContainer {...props}>{children}</StyledPageContainer>;
}
