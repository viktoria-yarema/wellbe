import { AppointmentType } from "../types";

export const getAppointments = async (): Promise<
  AppointmentType[] | undefined
> => {
  try {
    const response = await fetch(
      "https://us-central1-wellbe-book-dev.cloudfunctions.net/getAppointments"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data as AppointmentType[]; // or process data as needed
  } catch (error) {
    console.error("Error fetching appointments:", error);
  }
};
