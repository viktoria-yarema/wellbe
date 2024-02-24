import { FC } from "react";
import { COLOR_GREY_MEDIUM } from "@/app/_theme/colors";
import { IconType } from "@/app/_theme/types";

const PhoneIcon: FC<IconType> = ({ color = COLOR_GREY_MEDIUM }) => (
  <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
    <g clip-path="url(#clip0_64_354)">
      <path
        d="M5.28458 8.5925C6.36458 10.715 8.10458 12.4475 10.2271 13.535L11.8771 11.885C12.0796 11.6825 12.3796 11.615 12.6421 11.705C13.4821 11.9825 14.3896 12.1325 15.3196 12.1325C15.7321 12.1325 16.0696 12.47 16.0696 12.8825V15.5C16.0696 15.9125 15.7321 16.25 15.3196 16.25C8.27708 16.25 2.56958 10.5425 2.56958 3.5C2.56958 3.0875 2.90708 2.75 3.31958 2.75H5.94458C6.35708 2.75 6.69458 3.0875 6.69458 3.5C6.69458 4.4375 6.84458 5.3375 7.12208 6.1775C7.20458 6.44 7.14458 6.7325 6.93458 6.9425L5.28458 8.5925Z"
        fill={color}
        fill-opacity="0.6"
      />
    </g>
    <defs>
      <clipPath id="clip0_64_354">
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

export default PhoneIcon;
