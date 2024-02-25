"use client";

import { AvailableTime } from "@/app/(entities)/appointment/types";
import { format, isBefore, isSameDay } from "date-fns";
import { Timestamp } from "firebase-admin/firestore";

export const convertTimestampToDate = (timeStamp: Timestamp) =>
  new Date(timeStamp?._seconds * 1000);

export const formatAvailableTime = (timeStamp: Timestamp) => {
  const date = convertTimestampToDate(timeStamp);
  const formattedTime = format(date, "h:mma");

  return formattedTime;
};

export const filterAvailableTimeByDate = (
  selectedDate: Date,
  availableTime: AvailableTime[]
): AvailableTime[] => {
  return availableTime.filter((timeStamp) => {
    const dateTime = convertTimestampToDate(timeStamp.start);

    return isSameDay(dateTime, selectedDate) && isBefore(new Date(), dateTime);
  });
};
