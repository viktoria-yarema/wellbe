"use client";
import NavigationBar from "@/app/_layouts/MobileLayout/components/NavigationBar";

import { StyledContainer } from "./styled";
import TopBar from "./components/TopBar";

type MobileLayoutProps = {
  children: React.ReactNode;
};

export default function MobileLayout({ children }: MobileLayoutProps) {
  return (
    <StyledContainer>
      <TopBar />
      {children}
      <NavigationBar />
    </StyledContainer>
  );
}
