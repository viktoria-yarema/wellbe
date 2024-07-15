"use client";

import { AvailableTime } from "@/entities/appointment/types";
import { format, isBefore, isSameDay } from "date-fns";

export const convertTimestampToDate = (timeStamp: CustomTimestamp) =>
  // @ts-ignore
  new Date(timeStamp?._seconds * 1000);

export const formatAvailableTime = (timeStamp: CustomTimestamp) => {
  const date = convertTimestampToDate(timeStamp);
  const formattedTime = format(date, "h:mma");

  return formattedTime;
};

export const filterAvailableTimeByDate = (
  selectedDate: Date,
  availableTime: AvailableTime[],
): AvailableTime[] => {
  return availableTime.filter((timeStamp) => {
    const dateTime = convertTimestampToDate(timeStamp.start);

    return isSameDay(dateTime, selectedDate) && isBefore(new Date(), dateTime);
  });
};
