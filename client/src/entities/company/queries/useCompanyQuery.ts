import { useQuery } from "@tanstack/react-query";
import { getCompanyId } from "../api/getCompanyId";

export const useCompanyQuery = (id: string) => {
  return useQuery({
    queryKey: ["company", id],
    queryFn: () => getCompanyId(id),
  });
};
