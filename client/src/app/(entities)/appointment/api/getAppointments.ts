"use server";
import { AppointmentStatus, AppointmentType } from "../types";

export const getAppointments = async ({
  status,
  userId,
}: // pageParam = null,
{
  status: AppointmentStatus;
  userId: string;
}): Promise<AppointmentType[]> => {
  // const queryParams = new URLSearchParams({
  //   limit: "10",
  // });

  // if (pageParam) {
  //   queryParams.append("lastSeenId", pageParam);
  // }

  return await fetch(
    `${process.env.NEXT_PUBLIC_API_MAIN}getAppointments?status=${status}&userId=${userId}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
};
