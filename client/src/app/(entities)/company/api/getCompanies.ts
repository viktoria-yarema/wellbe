import { Company } from "../types";

export const getCompanies = async (): Promise<Company[]> => {
  return await fetch(`${process.env.NEXT_PUBLIC_API_MAIN}getCompanies`).then(
    (response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    }
  );
};
