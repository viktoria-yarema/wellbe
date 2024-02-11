import { AppointmentType } from "../types";

export const getAppointment = async (
  id: string,
  userId: string
): Promise<AppointmentType> => {
  return await fetch(
    `${process.env.NEXT_PUBLIC_API_MAIN}getAppointment?id=${id}&userId=${userId}`,
    { cache: "force-cache" }
  ).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
};
