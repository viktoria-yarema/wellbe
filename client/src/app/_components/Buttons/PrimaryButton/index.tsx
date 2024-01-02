import { ButtonProps } from "@mui/material/Button";
import { StyledPrimaryButton } from "./styled";

type PrimaryButtonProps = {
  title: string;
} & ButtonProps;

export default function PrimaryButton({ title, ...props }: PrimaryButtonProps) {
  return (
    <StyledPrimaryButton
      color="primary"
      variant="contained"
      size="large"
      {...props}
    >
      {title}
    </StyledPrimaryButton>
  );
}
