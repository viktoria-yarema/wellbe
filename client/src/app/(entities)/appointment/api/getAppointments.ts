"use server";
import { AppointmentStatus, AppointmentType } from "../types";

export const getAppointments = async ({
  statuses,
  userId,
}: {
  statuses?: AppointmentStatus[];
  userId: string;
}): Promise<AppointmentType[]> => {
  const statusQueryParam = statuses?.join(",");
  return await fetch(
    `${process.env.NEXT_PUBLIC_API_MAIN}getAppointments?status=${statusQueryParam}&userId=${userId}`
  ).then((response) => {
    return response.json();
  });
};
