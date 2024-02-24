import { useQuery } from "@tanstack/react-query";
import { getCompanyComments } from "../api/getCompanyComments";

export const useCompanyComments = (companyId: string) => {
  return useQuery({
    queryKey: ["comments", { companyId }],
    queryFn: async () => await getCompanyComments(companyId),
  });
};
