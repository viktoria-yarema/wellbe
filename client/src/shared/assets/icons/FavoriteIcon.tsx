import { FC } from "react";
import { IconType } from "@/shared/theme/types";

const FavoriteIcon: FC<IconType> = ({ size = 18, color = " #DB0035" }) => (
  <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
    <g clipPath="url(#clip0_162_410)">
      <path
        d="M9 16.0125L7.9125 15.0225C4.05 11.52 1.5 9.21 1.5 6.375C1.5 4.065 3.315 2.25 5.625 2.25C6.93 2.25 8.1825 2.8575 9 3.8175C9.8175 2.8575 11.07 2.25 12.375 2.25C14.685 2.25 16.5 4.065 16.5 6.375C16.5 9.21 13.95 11.52 10.0875 15.03L9 16.0125Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_162_410">
        <rect width={size} height={size} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FavoriteIcon;
