import { FC } from "react";
import { COLOR_GREY_MEDIUM } from "@/app/_theme/colors";
import { IconType } from "@/app/_theme/types";

const ArrowUpwardIcon: FC<IconType> = ({ color = COLOR_GREY_MEDIUM }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M8.90909 6.68179L8.90907 7.31817L12.5545 7.32703L6.30377 13.0454L6.94014 13.6818L13.093 7.86549L13.093 11.2712L13.6818 11.2712L13.6818 6.68179L8.90909 6.68179Z"
      fill={color}
      fillOpacity="0.6"
    />
  </svg>
);

export default ArrowUpwardIcon;
