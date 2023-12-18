export const extractDateInfo = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  // Format the time as "HH:MM - HH:MM" assuming the event lasts for 1 hour
  const startTime = date.toLocaleTimeString("en-US", options);
  const endTime = new Date(date.getTime() + 60 * 60000).toLocaleTimeString(
    "en-US",
    options
  );
  const time = `${startTime} - ${endTime}`;

  // Format the day as "DD"
  const day = date.getDate().toString().padStart(2, "0");

  // Format the monthAndWeek as "Month, Day of the week"
  const month = date.toLocaleString("en-US", { month: "long" });
  const weekDay = date.toLocaleString("en-US", { weekday: "short" });
  const monthAndWeek = `${month}, ${weekDay}`;

  return { time, day, monthAndWeek };
};
