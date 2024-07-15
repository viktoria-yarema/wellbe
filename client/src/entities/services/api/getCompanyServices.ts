import { Service } from "../types";

export const getCompanyServices = async (id: string): Promise<Service[]> => {
  const url = `${process.env.NEXT_PUBLIC_API_MAIN}getCompany?id=${id}`;
  const response = await fetch(url, { cache: "force-cache" });

  if (!response.ok) {
    // Log or return additional error information
    const errorBody = await response.text();
    console.error("Error fetching company data:", errorBody);
    throw new Error(
      `Error fetching company: ${response.status} - ${errorBody}`
    );
  }

  return response.json();
};
