import { FC } from "react";
import { COLOR_GREY_MEDIUM } from "@/shared/theme/colors";
import { IconType } from "@/shared/theme/types";

const ProfileIcon: FC<IconType> = ({ color = COLOR_GREY_MEDIUM }) => (
  <svg width="25" height="24" viewBox="0 0 25 24" fill="none">
    <path
      d="M12.5 0C5.876 0 0.5 5.376 0.5 12C0.5 18.624 5.876 24 12.5 24C19.124 24 24.5 18.624 24.5 12C24.5 5.376 19.124 0 12.5 0ZM12.5 3.6C14.492 3.6 16.1 5.208 16.1 7.2C16.1 9.192 14.492 10.8 12.5 10.8C10.508 10.8 8.9 9.192 8.9 7.2C8.9 5.208 10.508 3.6 12.5 3.6ZM12.5 20.64C9.5 20.64 6.848 19.104 5.3 16.776C5.336 14.388 10.1 13.08 12.5 13.08C14.888 13.08 19.664 14.388 19.7 16.776C18.152 19.104 15.5 20.64 12.5 20.64Z"
      fill={color}
    />
  </svg>
);

export default ProfileIcon;
