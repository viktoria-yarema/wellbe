import { FC } from "react";
import { COLOR_SECONDARY } from "@/app/_theme/colors";
import { IconType } from "@/app/_theme/types";

const CloseIcon: FC<IconType> = ({ color = COLOR_SECONDARY }) => (
  <svg width="18" height="19" viewBox="0 0 18 19" fill="none">
    <path
      d="M18 1.78126L16.8112 0.59259L9 8.40387L1.18876 0.59259L0 1.78126L7.81129 9.59259L0 17.4039L1.18876 18.5926L9 10.7813L16.8112 18.5926L18 17.4039L10.1887 9.59259L18 1.78126Z"
      fill={color}
    />
  </svg>
);

export default CloseIcon;
