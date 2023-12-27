import { FC } from "react";
import { COLOR_GREY_MEDIUM } from "@/app/_theme/colors";
import { IconType } from "@/app/_theme/types";

const HomeIcon: FC<IconType> = ({ color = COLOR_GREY_MEDIUM }) => (
  <svg width="26" height="24" viewBox="0 0 26 24" fill="none">
    <path
      d="M10.4 24V15.5294H15.6V24H22.1V12.7059H26L13 0L0 12.7059H3.9V24H10.4Z"
      fill={color}
    />
  </svg>
);

export default HomeIcon;
