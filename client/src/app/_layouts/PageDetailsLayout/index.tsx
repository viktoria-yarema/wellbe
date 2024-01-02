import { StyledContainer } from "./styled";

type PageDetailsLayoutProps = {
  children: React.ReactNode;
};

export default function PageDetailsLayout({
  children,
}: PageDetailsLayoutProps) {
  return <StyledContainer pt={"1rem"}>{children}</StyledContainer>;
}
