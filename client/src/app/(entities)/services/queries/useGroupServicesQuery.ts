import { useQuery } from "@tanstack/react-query";
import { getGroupsServices } from "../api/getGroupsServices";

export const useGroupServicesQuery = (companyId: string) => {
  return useQuery({
    queryKey: ["servicesGroup", { companyId }],
    queryFn: async () => await getGroupsServices(companyId),
  });
};
