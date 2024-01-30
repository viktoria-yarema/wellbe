import { CreateService } from "../../services/types";
import { AppointmentType } from "../types";

export const createAppointment = async (
  userId?: string,
  newAppointment?: CreateService | null
): Promise<AppointmentType> => {
  return await fetch(`${process.env.NEXT_PUBLIC_API_MAIN}createAppointment`, {
    method: "POST",
    cache: "force-cache",
    body: JSON.stringify({
      userId,
      appointment: newAppointment,
    }),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
};
