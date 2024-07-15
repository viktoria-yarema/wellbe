"use server";

import { revalidateTag } from "next/cache";
import { Service } from "../types";

export const getBookedService = async (
  companyId: string,
  serviceId: string,
  appointmentId: string
): Promise<Service> => {
  const url = `${process.env.NEXT_PUBLIC_API_MAIN}getBookedService?companyId=${companyId}&serviceId=${serviceId}&appointmentId=${appointmentId}`;
  const response = await fetch(url, {
    cache: "force-cache",
    next: { tags: ["bookedService"] },
  });

  if (!response.ok) {
    // Log or return additional error information
    const errorBody = await response.text();
    console.error("Error fetching company service data:", errorBody);
    throw new Error(
      `Error fetching company service: ${response.status} - ${errorBody}`
    );
  }

  return response.json();
};

export async function revalidateGetBookedService() {
  revalidateTag("bookedService");
}
