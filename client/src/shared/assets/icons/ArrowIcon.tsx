import { FC } from "react";
import { COLOR_GREY_MEDIUM } from "@/shared/theme/colors";
import { IconType } from "@/shared/theme/types";

const ArrowIcon: FC<IconType> = ({ color = COLOR_GREY_MEDIUM }) => (
  <svg width="22" height="24" viewBox="0 0 22 24" fill={color}>
    <path
      d="M14.2815 5.78159L8.17747 12.136L14.0694 18.4999L14.0709 20.0822L6.21977 12.134L14.2799 4.08358L14.2815 5.78159Z"
      fill={color}
    />
  </svg>
);

export default ArrowIcon;
