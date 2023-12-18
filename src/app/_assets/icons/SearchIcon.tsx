import { FC } from "react";
import { COLOR_GREY_MEDIUM } from "@/app/_theme/colors";
import { IconType } from "@/app/_theme/types";

const SearchIcon: FC<IconType> = ({ color = COLOR_GREY_MEDIUM }) => (
  <svg width="26" height="24" viewBox="0 0 26 24" fill="none">
    <g clipPath="url(#clip0_92_465)">
      <path
        d="M16.6458 14H15.8229L15.5312 13.73C16.5521 12.59 17.1667 11.11 17.1667 9.5C17.1667 5.91 14.1354 3 10.3958 3C6.65625 3 3.625 5.91 3.625 9.5C3.625 13.09 6.65625 16 10.3958 16C12.0729 16 13.6146 15.41 14.8021 14.43L15.0833 14.71V15.5L20.2917 20.49L21.8438 19L16.6458 14ZM10.3958 14C7.80208 14 5.70833 11.99 5.70833 9.5C5.70833 7.01 7.80208 5 10.3958 5C12.9896 5 15.0833 7.01 15.0833 9.5C15.0833 11.99 12.9896 14 10.3958 14Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_92_465">
        <rect width="25" height="24" fill="white" transform="translate(0.5)" />
      </clipPath>
    </defs>
  </svg>
);

export default SearchIcon;
