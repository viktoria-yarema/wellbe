"use client";

import Flex from "@/shared/components/Layout/Flex";
import FlexColumn from "@/shared/components/Layout/FlexColumn";
import Typography from "@mui/material/Typography";
import { filterAvailableTimeByDate, formatAvailableTime } from "./utils";
import { StyledTimeChip } from "./styled";
import { useBookingStore } from "../../store/useBookingStore";
import { AvailableTime } from "@/entities/appointment/types";
import Title from "../../components/Title";

type TimestampsProps = {
  serviceAvailableTime: AvailableTime[];
};

export default function Timestamps({ serviceAvailableTime }: TimestampsProps) {
  const { setSelectedTime, selectedTime, selectedDate } = useBookingStore();

  const availableTimeByDate = filterAvailableTimeByDate(
    selectedDate,
    serviceAvailableTime ?? [],
  );

  const isAvailableTime = Boolean(availableTimeByDate.length);

  return (
    <FlexColumn rowGap={"0.5rem"}>
      <Title title="Available time" />
      <Flex flexWrap={"wrap"} columnGap={"0.5rem"} minHeight={36}>
        {isAvailableTime &&
          availableTimeByDate.map((time) => (
            <StyledTimeChip
              // @ts-ignore
              key={time.start._seconds}
              onClick={() => setSelectedTime(time)}
              className={
                // @ts-ignore
                selectedTime?.start._seconds === time.start._seconds
                  ? "active"
                  : ""
              }
            >
              <Typography variant="bodySRegular">
                {formatAvailableTime(time.start)}
              </Typography>
            </StyledTimeChip>
          ))}
        {!isAvailableTime && (
          <Typography variant="bodySLight">No available time</Typography>
        )}
      </Flex>
    </FlexColumn>
  );
}
