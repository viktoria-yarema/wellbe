import { Typography } from "@mui/material";
import { StyledLoadingPage, StyledLogoAnima } from "./styled";

export default function LoadingPage() {
  return (
    <StyledLoadingPage>
      <StyledLogoAnima className="ball-2" />
      <StyledLogoAnima className="ball-1" />
      <Typography variant="heading2">Wellbe</Typography>
    </StyledLoadingPage>
  );
}
