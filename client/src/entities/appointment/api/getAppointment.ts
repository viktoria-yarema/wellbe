"use server";

import { revalidateTag } from "next/cache";
import { AppointmentType } from "../types";

export const getAppointment = async (
  id: string,
  userId: string
): Promise<AppointmentType> => {
  return await fetch(
    `${process.env.NEXT_PUBLIC_API_MAIN}getAppointment?id=${id}&userId=${userId}`,
    { next: { tags: ["appointment"] } }
  ).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
};

export const revalidateAppointment = async () => {
  await revalidateTag("appointment");
};
