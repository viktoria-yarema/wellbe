"use client";
import styled from "@emotion/styled";
import { COLOR_SECONDARY_LIGHTEN } from "@/shared/theme/colors";
import { alpha } from "@mui/system";

export const StyledNavBar = styled.nav`
  padding: 1rem 28px;
  display: flex;
  justify-content: space-between;
  background-color: ${COLOR_SECONDARY_LIGHTEN};
  border-radius: 12px;

  box-shadow: 0px 2px 8px 0px ${alpha(COLOR_SECONDARY_LIGHTEN, 0.3)};
  backdrop-filter: blur(10px);

  position: fixed;
  bottom: 1rem;
  right: 1rem;
  left: 1rem;

  @media (min-width: 1024px) {
    width: 500px;
    margin: 0 auto;
  }
`;
