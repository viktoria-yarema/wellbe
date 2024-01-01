"use client";
import { StyledContainer } from "./styled";

type PageDetailsLayoutProps = {
  children: React.ReactNode;
};

export default function PageDetailsLayout({
  children,
}: PageDetailsLayoutProps) {
  return <StyledContainer>{children}</StyledContainer>;
}
