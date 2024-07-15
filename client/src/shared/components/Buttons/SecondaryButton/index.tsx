import { ButtonProps } from "@mui/material/Button";
import { StyledSecondaryButton } from "./styled";

type SecondaryButtonProps = {
  title: string;
} & ButtonProps;

export default function SecondaryButton({
  title,
  ...props
}: SecondaryButtonProps) {
  return (
    <StyledSecondaryButton
      color="white"
      variant="contained"
      size="large"
      {...props}
    >
      {title}
    </StyledSecondaryButton>
  );
}
