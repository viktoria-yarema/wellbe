"use client";
import styled from "@emotion/styled";
import Flex from "../Layout/Flex";
import { COLOR_PRIMARY, COLOR_SECONDARY } from "@/app/_theme/colors";

export const StyledLoadingPage = styled(Flex)`
  height: 100vh;
  width: 100vw;

  margin: 0 auto;

  @keyframes appear {
    0% {
      opacity: 0;
      filter: blur(13px);
    }

    100% {
      opacity: 1;
      filter: blur(0px);
    }
  }

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 700;
    opacity: 0;

    animation: appear 1s 0.4s linear 1 forwards;
  }
`;

export const StyledLogoAnima = styled.div`
  border-radius: 50%;
  filter: blur(20px);

  @keyframes move-2 {
    0% {
      top: 29%;
      left: 70%;
      transform: scale(1.2);
    }

    50% {
      top: 42%;
      left: 60%;
      transform: scale(1.8);
    }

    100% {
      top: 35%;
      left: 48%;
      transform: scale(1.2);
      filter: blur(10px);
    }
  }

  &.ball-1 {
    position: absolute;
    top: 55%;
    left: 30%;

    width: 40px;
    height: 60px;
    background-color: ${COLOR_PRIMARY};
    box-shadow: 0px 0px 40px ${COLOR_PRIMARY};
    animation: move-1 0.5s linear 1 forwards, pulse 1s 0.5s linear infinite;
  }

  @keyframes move-1 {
    0% {
      top: 50%;
      left: 30%;
      transform: scale(1.2);
    }

    50% {
      top: 47%;
      left: 40%;
      transform: scale(1.8);
    }

    100% {
      top: 35%;
      left: 43%;
      transform: scale(1.2) rotate(12deg) translate(-1px, 0px) skew(6deg, -6deg);
      filter: blur(10px);
    }
  }

  &.ball-2 {
    position: absolute;
    top: 0%;
    left: 70%;

    width: 35px;
    height: 50px;
    background-color: ${COLOR_SECONDARY};
    box-shadow: 0px 0px 30px ${COLOR_SECONDARY};
    animation: move-2 0.5s ease-in 1 forwards, pulse 1s 0.5s linear infinite;
  }

  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
    }

    50% {
      transform: scale(1.4);
    }
  }
`;
