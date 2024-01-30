import { Comment } from "../types";

export const getCompanyComments = async (
  companyId: string
): Promise<Comment[]> => {
  const url = `${process.env.NEXT_PUBLIC_API_MAIN}getCompanyComments?id=${companyId}`;
  const response = await fetch(url);

  if (!response.ok) {
    // Log or return additional error information
    const errorBody = await response.text();
    console.error("Error fetching comments data:", errorBody);
    throw new Error(
      `Error fetching comments: ${response.status} - ${errorBody}`
    );
  }

  return response.json();
};
