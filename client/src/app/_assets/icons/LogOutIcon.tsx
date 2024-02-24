import { FC } from "react";
import { COLOR_GREY_MEDIUM } from "@/app/_theme/colors";
import { IconType } from "@/app/_theme/types";

const LogOutIcon: FC<IconType> = ({ color = COLOR_GREY_MEDIUM }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <g clip-path="url(#clip0_64_403)">
      <path
        d="M18.4167 7.58333L16.8892 9.11083L19.6842 11.9167H8.66667V14.0833H19.6842L16.8892 16.8783L18.4167 18.4167L23.8333 13L18.4167 7.58333ZM4.33334 5.41667H13V3.25H4.33334C3.14167 3.25 2.16667 4.225 2.16667 5.41667V20.5833C2.16667 21.775 3.14167 22.75 4.33334 22.75H13V20.5833H4.33334V5.41667Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_64_403">
        <rect width="26" height="26" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default LogOutIcon;
