import { IconType } from "@/app/_theme/types";

export type NavItemType = {
  name: string;
  Icon: React.FC<IconType>;
  href: string;
};
