import { FC } from "react";
import { COLOR_GREY_MEDIUM } from "@/shared/theme/colors";
import { IconType } from "@/shared/theme/types";

const ScheduleIcon: FC<IconType> = ({ color = COLOR_GREY_MEDIUM }) => (
  <svg width="25" height="24" viewBox="0 0 25 24" fill="none">
    <path
      d="M19.1667 13.2H12.5V19.2H19.1667V13.2ZM17.8333 0V2.4H7.16667V0H4.5V2.4H3.16667C1.68667 2.4 0.513333 3.48 0.513333 4.8L0.5 21.6C0.5 22.92 1.68667 24 3.16667 24H21.8333C23.3 24 24.5 22.92 24.5 21.6V4.8C24.5 3.48 23.3 2.4 21.8333 2.4H20.5V0H17.8333ZM21.8333 21.6H3.16667V8.4H21.8333V21.6Z"
      fill={color}
    />
  </svg>
);

export default ScheduleIcon;
