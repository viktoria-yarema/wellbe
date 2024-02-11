import { CreateService } from "../../services/types";
import { AppointmentType } from "../types";

export const createAppointment = async (
  userId?: string,
  newAppointment?: CreateService | null
): Promise<any> => {
  return await fetch(`${process.env.NEXT_PUBLIC_API_MAIN}createAppointment`, {
    method: "POST",
    cache: "force-cache",
    headers: {
      "Content-Type": "application/json", // Add this line
    },
    body: JSON.stringify({
      userId: userId,
      appointment: newAppointment,
    }),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
  });
};
