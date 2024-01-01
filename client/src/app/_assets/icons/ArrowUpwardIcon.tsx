import { FC } from "react";
import { COLOR_GREY_MEDIUM } from "@/app/_theme/colors";
import { IconType } from "@/app/_theme/types";

const ArrowUpwardIcon: FC<IconType> = ({ color = COLOR_GREY_MEDIUM }) => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
    <path
      d="M11.5251 8.59093L11.5251 9.40913L16.2121 9.42052L8.17541 16.7728L8.99359 17.5909L16.9044 10.1128L16.9044 14.4916L17.6614 14.4916L17.6614 8.59092L11.5251 8.59093Z"
      fill={color}
      fillOpacity="0.6"
    />
  </svg>
);

export default ArrowUpwardIcon;
