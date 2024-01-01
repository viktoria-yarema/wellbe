import HomeIcon from "../../../../../../_assets/icons/HomeIcon";
import ProfileIcon from "../../../../../../_assets/icons/ProfileIcon";
import ScheduleIcon from "../../../../../../_assets/icons/ScheduleIcon";
import SearchIcon from "../../../../../../_assets/icons/SearchIcon";
import { NavItem } from "./types";

export const navMap: NavItem[] = [
  {
    name: "Home",
    Icon: HomeIcon,
    href: "/",
  },
  {
    name: "Search",
    Icon: SearchIcon,
    href: "/search",
  },
  {
    name: "Schedule",
    Icon: ScheduleIcon,
    href: "/schedule",
  },
  {
    name: "Profile",
    Icon: ProfileIcon,
    href: "/profile",
  },
];
