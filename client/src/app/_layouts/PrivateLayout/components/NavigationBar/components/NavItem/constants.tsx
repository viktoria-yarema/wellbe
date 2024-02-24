import {
  HOME_PAGE_PATH,
  PROFILE_PAGE_PATH,
  SCHEDULE_PAGE_PATH,
  SEARCH_PAGE_PATH,
} from "@/app/_global/routes";
import HomeIcon from "../../../../../../_assets/icons/HomeIcon";
import ProfileIcon from "../../../../../../_assets/icons/ProfileIcon";
import ScheduleIcon from "../../../../../../_assets/icons/ScheduleIcon";
import SearchIcon from "../../../../../../_assets/icons/SearchIcon";
import { NavItemType } from "./types";

export const navMap: NavItemType[] = [
  {
    name: "Home",
    Icon: HomeIcon,
    href: HOME_PAGE_PATH,
  },
  {
    name: "Search",
    Icon: SearchIcon,
    href: SEARCH_PAGE_PATH,
  },
  {
    name: "Schedule",
    Icon: ScheduleIcon,
    href: SCHEDULE_PAGE_PATH,
  },
  {
    name: "Profile",
    Icon: ProfileIcon,
    href: PROFILE_PAGE_PATH,
  },
];
