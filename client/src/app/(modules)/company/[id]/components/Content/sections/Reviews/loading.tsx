import FlexColumn from "@/app/_components/Layout/FlexColumn";
import Skeleton from "@mui/material/Skeleton";

export default function CommentsSkeleton() {
  return (
    <FlexColumn rowGap={"1rem"}>
      <Skeleton
        variant="rectangular"
        width={"100%"}
        height={124}
        sx={{
          borderRadius: "8px",
        }}
      />
      <Skeleton
        variant="rectangular"
        width={"100%"}
        height={124}
        sx={{
          borderRadius: "8px",
        }}
      />
      <Skeleton
        variant="rectangular"
        width={"100%"}
        height={124}
        sx={{
          borderRadius: "8px",
        }}
      />
    </FlexColumn>
  );
}
