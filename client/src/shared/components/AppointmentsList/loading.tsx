import Skeleton from "@mui/material/Skeleton";
import FlexColumn from "../Layout/FlexColumn";

export function LoadingBookedList() {
  return (
    <FlexColumn rowGap={"1rem"}>
      <Skeleton
        variant="rectangular"
        sx={{ borderRadius: "1rem", height: 126, width: "100%" }}
      />
      <Skeleton
        variant="rectangular"
        sx={{ borderRadius: "1rem", height: 126, width: "100%" }}
      />
    </FlexColumn>
  );
}
