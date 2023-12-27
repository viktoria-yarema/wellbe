import { IconType } from "@/app/_theme/types";

export type NavItem = {
  name: string;
  Icon: React.FC<IconType>;
  href: string;
};
