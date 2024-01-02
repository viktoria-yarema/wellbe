import { FC } from "react";
import { COLOR_GREY_MEDIUM } from "@/app/_theme/colors";
import { IconType } from "@/app/_theme/types";

const ArrowIcon: FC<IconType> = ({ color = COLOR_GREY_MEDIUM }) => (
  <svg width="24" height="26" viewBox="0 0 26 26" fill={color}>
    <path
      d="M18.8319 5.994L10.1899 13.4286L18.092 20.4239L17.1304 21.7961L7.53155 13.4006L17.3052 5.20929L18.8319 5.994Z"
      fill={color}
      fill-opacity="0.6"
    />
  </svg>
);

export default ArrowIcon;
