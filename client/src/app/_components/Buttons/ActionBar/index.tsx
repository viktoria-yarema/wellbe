import { StyledActionsBar } from "./styled";

type ActionBarProps = {
  children: React.ReactNode;
};

export default function ActionBar({ children }: ActionBarProps) {
  return <StyledActionsBar>{children}</StyledActionsBar>;
}
