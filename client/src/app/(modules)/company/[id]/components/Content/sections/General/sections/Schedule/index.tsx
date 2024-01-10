import FlexColumn from "@/app/_components/Layout/FlexColumn";
import Typography from "@mui/material/Typography";
import Title from "../../../../../Title";
import Flex from "@/app/_components/Layout/Flex";
import { CompanySchedule } from "@/app/(entities)/company/types";
import FlexCenter from "@/app/_components/Layout/FlexCenter";

type ScheduleProps = {
  schedule: CompanySchedule[];
};

export default function Schedule({ schedule }: ScheduleProps) {
  return (
    <FlexColumn rowGap={"0.5rem"}>
      <Title title={"Schedule"} />
      <FlexColumn rowGap={"0.25rem"}>
        {schedule.map((item) => (
          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            key={item.day}
          >
            <Typography
              variant="bodyMMedium"
              color={"text.secondary"}
              textTransform={"capitalize"}
            >
              {item.day}
            </Typography>
            <Typography variant="bodySRegular">{item.timestamp}</Typography>
          </Flex>
        ))}
      </FlexColumn>
    </FlexColumn>
  );
}
