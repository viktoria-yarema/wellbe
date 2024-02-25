import Typography from "@mui/material/Typography";
import { NavItemType } from "./types";
import FlexCenter from "@/app/_components/Layout/FlexCenter";
import { StyledNavItem } from "./styled";
import { COLOR_GREY_MEDIUM, COLOR_PRIMARY } from "@/app/_theme/colors";
import { usePathname } from "next/navigation";

type NavItemProps = NavItemType;

export default function NavItem({ name, href, Icon }: NavItemProps) {
  const pathname = usePathname();

  const isActiveLink =
    pathname.replace(/\?.*$/, "") === href.replace(/\?.*$/, "");

  const color = isActiveLink ? COLOR_PRIMARY : COLOR_GREY_MEDIUM;

  return (
    <StyledNavItem href={href}>
      <FlexCenter>
        <Icon color={color} />
      </FlexCenter>
      <Typography variant="bodySRegular" color={color}>
        {name}
      </Typography>
    </StyledNavItem>
  );
}
