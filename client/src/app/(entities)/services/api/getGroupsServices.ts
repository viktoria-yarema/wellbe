import { ModifiedGroupServices } from "../types";

export const getGroupsServices = async (
  companyId: string
): Promise<ModifiedGroupServices[]> => {
  const url = `${process.env.NEXT_PUBLIC_API_MAIN}getGroupsServices?companyId=${companyId}`;
  const response = await fetch(url, { cache: "force-cache" });

  if (!response.ok) {
    // Log or return additional error information
    const errorBody = await response.text();
    console.error("Error fetching company group services data:", errorBody);
    throw new Error(
      `Error fetching company group services: ${response.status} - ${errorBody}`
    );
  }

  return response.json();
};
