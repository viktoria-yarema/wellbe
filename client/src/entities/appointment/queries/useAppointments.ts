import { useQuery } from "@tanstack/react-query";
import { getAppointments } from "../api/getAppointments";
import { AppointmentStatus } from "../types";
import { queryClient } from "@/shared/global/queryClient";

export const useAppointments = ({
  status,
  userId,
}: {
  status: AppointmentStatus[];
  userId?: string;
}) => {
  return useQuery({
    queryKey: ["appointments", status],
    queryFn: () => {
      if (userId) {
        return getAppointments({ statuses: status, userId });
      }
    },
    enabled: Boolean(userId),
  });
};

export const invalidateAppointmentsQuery = async () => {
  await queryClient.invalidateQueries({ queryKey: ["appointments"] });
};
