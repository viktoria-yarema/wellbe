import FlexColumn from "@/shared/components/Layout/FlexColumn";
import Typography from "@mui/material/Typography";
import Title from "../../../../../Title";

type AboutProps = {
  description: string;
};

export default function About({ description }: AboutProps) {
  return (
    <FlexColumn rowGap={"0.5rem"}>
      <Title title={"About"} />
      <Typography variant="bodySRegular">{description}</Typography>
    </FlexColumn>
  );
}
