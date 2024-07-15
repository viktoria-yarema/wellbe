import { useQueries } from "@tanstack/react-query";
import { getCompanyId } from "../api/getCompanyId";

export const useCompaniesListById = (ids: string[]) => {
  const companyQueries = ids.map((id) => {
    return {
      queryKey: ["company", id],
      queryFn: async () => await getCompanyId(id),
    };
  });

  return useQueries({ queries: companyQueries });
};
