"use server";

import { revalidateTag } from "next/cache";
import { Service } from "../types";

export const getCompanyService = async (
  companyId: string,
  serviceId: string
): Promise<Service> => {
  const url = `${process.env.NEXT_PUBLIC_API_MAIN}getCompanyService?companyId=${companyId}&serviceId=${serviceId}`;
  const response = await fetch(url, {
    cache: "force-cache",
    next: { tags: ["companyService"] },
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

export async function revalidateGetCompanyService() {
  revalidateTag("companyService");
}
