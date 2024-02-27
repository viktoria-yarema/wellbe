"use client";

import Calendar from "@/app/_components/Calendar";
import { useChangeAppointmentStore } from "../../store/useChangeAppointmentStore";
import { AvailableTime } from "@/app/(entities)/appointment/types";
import { convertTimestampToDate } from "../Timestamps/utils";

type BookCalendarProps = {
  bookingDates: AvailableTime[];
};

export default function BookCalendar({ bookingDates }: BookCalendarProps) {
  const { setSelectedDate, selectedDate } = useChangeAppointmentStore();

  const availableDates = bookingDates?.map((date) =>
    convertTimestampToDate(date.start)
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
