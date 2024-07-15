import { ButtonProps } from "@mui/material/Button";
import { StyledPrimaryButton } from "./styled";
import { CircularProgress } from "@mui/material";
import { COLOR_BLACK } from "@/shared/theme/colors";

type PrimaryButtonProps = {
  title: string;
  loading?: boolean;
} & ButtonProps;

export default function PrimaryButton({
  title,
  loading,
  ...props
}: PrimaryButtonProps) {
  return (
    <StyledPrimaryButton
      color="primary"
      variant="contained"
      size="large"
      {...props}
    >
      {loading ? <CircularProgress size={18} color="secondary" /> : title}
    </StyledPrimaryButton>
  );
}
