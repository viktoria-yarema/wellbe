import { AvailableTime } from "./types";

export const extractDateInfo = (date?: AvailableTime) => {
  if (!date?.start || !date?.end) {
    return;
  }
  // @ts-ignore
  const firebaseTimestampToDate = new Date(date.start._seconds * 1000);
  // @ts-ignore
  const firebaseTimestampEndToDate = new Date(date.end._seconds * 1000);

  const options: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  // Format the time as "HH:MM - HH:MM" assuming the event lasts for 1 hour
  const startTime = firebaseTimestampToDate.toLocaleTimeString(
    "en-US",
    options
  );

  const endTime = firebaseTimestampEndToDate.toLocaleTimeString(
    "en-US",
    options
  );

  const time = `${startTime} - ${endTime}`;

  // Format the day as "DD"
  const day = firebaseTimestampToDate.getDate().toString().padStart(2, "0");

  // Format the monthAndWeek as "Month, Day of the week"
  const month = firebaseTimestampToDate.toLocaleString("en-US", {
    month: "long",
  });
  const weekDay = firebaseTimestampToDate.toLocaleString("en-US", {
    weekday: "short",
  });
  const monthAndWeek = `${month}, ${weekDay}`;

  return { time, day, monthAndWeek };
};
