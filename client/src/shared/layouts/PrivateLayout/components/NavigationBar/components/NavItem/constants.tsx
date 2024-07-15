import {
  HOME_PAGE_PATH,
  PROFILE_PAGE_PATH,
  SCHEDULE_PAGE_PATH,
  SEARCH_PAGE_PATH,
} from "@/shared/global/routes";
import HomeIcon from "../../../../../../assets/icons/HomeIcon";
import ProfileIcon from "../../../../../../assets/icons/ProfileIcon";
import ScheduleIcon from "../../../../../../assets/icons/ScheduleIcon";
import SearchIcon from "../../../../../../assets/icons/SearchIcon";
import { NavItemType } from "./types";
import { AppointmentStatus } from "@/entities/appointment/types";

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
    href: `${SCHEDULE_PAGE_PATH}?status=${AppointmentStatus.Approved}`,
  },
  {
    name: "Profile",
    Icon: ProfileIcon,
    href: PROFILE_PAGE_PATH,
  },
];
