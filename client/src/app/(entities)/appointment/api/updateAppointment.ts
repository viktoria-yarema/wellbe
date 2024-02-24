import { AppointmentStatus, AppointmentType } from "../types";

export const updateAppointment = async ({
  appointmentId,
  updatedAppointment,
  userId,
}: {
  appointmentId: string;
  updatedAppointment: AppointmentType;
  userId?: string;
}): Promise<AppointmentType> => {
  return await fetch(`${process.env.NEXT_PUBLIC_API_MAIN}updateAppointment`, {
    method: "PUT",
    cache: "force-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: userId,
      appointmentId,
      updatedAppointment,
    }),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return response.json();
  });
};
