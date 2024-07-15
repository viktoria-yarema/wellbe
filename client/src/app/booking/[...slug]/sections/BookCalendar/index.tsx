"use client";

import Calendar from "@/shared/components/Calendar";
import { useBookingStore } from "../../store/useBookingStore";
import { AvailableTime } from "@/entities/appointment/types";
import { convertTimestampToDate } from "../Timestamps/utils";

type BookCalendarProps = {
  bookingDates: AvailableTime[];
};

export default function BookCalendar({ bookingDates }: BookCalendarProps) {
  const { setSelectedDate, selectedDate } = useBookingStore();

  const availableDates = bookingDates?.map((date) =>
    convertTimestampToDate(date.start),
  );

  if (!bookingDates) {
    return null;
  }

  return (
    <Calendar
      date={selectedDate}
      setCalendarDate={setSelectedDate}
      availableDates={availableDates}
    />
  );
}
