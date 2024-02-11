import { useQuery } from "@tanstack/react-query";
import { getAppointments } from "../api/getAppointments";
import { AppointmentStatus } from "../types";

export const useAppointments = ({
  status,
  userId,
}: {
  status: AppointmentStatus;
  userId?: string;
}) => {
  return useQuery({
    queryKey: ["appointments", status],
    queryFn: () => {
      if (userId) {
        return getAppointments({ status, userId });
      }
    },
    enabled: Boolean(userId),
  });
};
