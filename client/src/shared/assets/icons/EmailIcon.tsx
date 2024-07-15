import { FC } from "react";
import { COLOR_GREY_MEDIUM } from "@/shared/theme/colors";
import { IconType } from "@/shared/theme/types";

const EmailIcon: FC<IconType> = ({ color = COLOR_GREY_MEDIUM }) => (
  <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
    <g clip-path="url(#clip0_64_358)">
      <path
        d="M15.3196 3.5H3.31958C2.49458 3.5 1.82708 4.175 1.82708 5L1.81958 14C1.81958 14.825 2.49458 15.5 3.31958 15.5H15.3196C16.1446 15.5 16.8196 14.825 16.8196 14V5C16.8196 4.175 16.1446 3.5 15.3196 3.5ZM15.3196 14H3.31958V6.5L9.31958 10.25L15.3196 6.5V14ZM9.31958 8.75L3.31958 5H15.3196L9.31958 8.75Z"
        fill={color}
        fill-opacity="0.6"
      />
    </g>
    <defs>
      <clipPath id="clip0_64_358">
        <rect
          width="18"
          height="18"
          fill="white"
          transform="translate(0.31958 0.5)"
        />
      </clipPath>
    </defs>
  </svg>
);

export default EmailIcon;
