import { IconType } from "@/shared/theme/types";

export type NavItemType = {
  name: string;
  Icon: React.FC<IconType>;
  href: string;
};
