import FlexCenter from "@/app/_components/Layout/FlexCenter";
import { Typography } from "@mui/material";

export function EmptyBookedList() {
  return (
    <FlexCenter mt="2rem">
      <Typography variant="bodyLRegular" color={"text.secondary"}>
        Not found appointment
      </Typography>
    </FlexCenter>
  );
}
