import { UserDetails } from "../types";

export const getUserDetails = async (userId: string): Promise<UserDetails> => {
  return await fetch(
    `${process.env.NEXT_PUBLIC_API_MAIN}getUserDetails?userId=${userId}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
};
