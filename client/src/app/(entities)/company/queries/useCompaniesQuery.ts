import { useQuery } from "@tanstack/react-query";
import { getCompanies } from "../api/getCompanies";

export const useCompaniesQuery = () => {
  return useQuery({
    queryKey: ["companies"],
    queryFn: () => getCompanies(),
  });
};
