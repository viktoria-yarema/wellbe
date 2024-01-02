"use client";

import { useRouter } from "next/navigation";
import { StyledHeader, StyledIconWrapper } from "./styled";
import ArrowIcon from "@/app/_assets/icons/ArrowIcon";

type HeaderProps = {
  children: React.ReactNode;
};

export function Header({ children }: HeaderProps) {
  const router = useRouter();
  return (
    <StyledHeader>
      <StyledIconWrapper onClick={() => router.back()}>
        <ArrowIcon color="text.secondary" />
      </StyledIconWrapper>
      {children}
    </StyledHeader>
  );
}
