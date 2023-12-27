import NavItem from "./components/NavItem";
import { navMap } from "./components/NavItem/constants";
import { StyledNavBar } from "./styled";

export default function NavigationBar() {
  return (
    <StyledNavBar>
      {navMap.map((navItem) => (
        <NavItem {...navItem} key={navItem.href} />
      ))}
    </StyledNavBar>
  );
}
