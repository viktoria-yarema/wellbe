"use client";
import NavigationBar from "@/app/_layouts/PrivateLayout/components/NavigationBar";
import { StyledContainer } from "./styled";
import TopBar from "./components/TopBar";

type PrivateLayoutProps = {
  children: React.ReactNode;
};

export default function PrivateLayout({ children }: PrivateLayoutProps) {
  return (
    <StyledContainer>
      <TopBar />
      {children}
      <NavigationBar />
    </StyledContainer>
  );
}
