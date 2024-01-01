import { Company } from "../types";

export const getCompanyId = async (id: string): Promise<Company> => {
  const url = `${process.env.NEXT_PUBLIC_API_MAIN}getCompany?id=${id}`;
  const response = await fetch(url);

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
