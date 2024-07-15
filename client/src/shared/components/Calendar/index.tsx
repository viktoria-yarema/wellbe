"use client";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { StyledDateCalendar } from "./styled";
import dayjs from "dayjs";

type CalendarProps = {
  date: Date;
  setCalendarDate: (date: Date) => void;
  availableDates: Date[];
};

export default function Calendar({
  date,
  setCalendarDate,
  availableDates,
}: CalendarProps) {
  const availableDayjsDates = availableDates.map((date) => dayjs(date));

  // Function to check if a date should be enabled
  const isDateTimeAvailable = (date: any) => {
    const now = dayjs();
    return availableDayjsDates.some(
      (availableDate) =>
        availableDate.isSame(date, "day") && availableDate.isAfter(now)
    );
  };
  // Function to check if a date should be disabled
  const isDateDisabled = (date: any) => !isDateTimeAvailable(date);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StyledDateCalendar
        value={dayjs(date)}
        onChange={(value) => setCalendarDate(value.toDate())}
        views={["year", "month", "day"]}
        disablePast
        shouldDisableDate={isDateDisabled}
      />
    </LocalizationProvider>
  );
}
