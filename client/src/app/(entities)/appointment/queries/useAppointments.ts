import { useQuery } from "@tanstack/react-query";
import { getAppointments } from "../api/getAppointments";
import { AppointmentStatus } from "../types";

export const useAppointments = ({ status }: { status: AppointmentStatus }) => {
  return useQuery({
    queryKey: ["appointments", status],
    queryFn: () => getAppointments({ status }),
  });
};
