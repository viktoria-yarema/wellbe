"use client";
import { useMutation } from "@tanstack/react-query";
import { SCHEDULE_PAGE_PATH } from "@/shared/global/routes";
import { revalidateGetCompanyService } from "../../services/api/getCompanyService";
import { useRouter } from "next/navigation";
import { AppointmentStatus } from "../types";
import { cancelAppointment } from "../api/cancelAppointment";
import { revalidateAppointment } from "../api/getAppointment";
import { invalidateAppointmentsQuery } from "./useAppointments";

export const mutateCancelAppointment = ({
  appointmentId,
  userId,
}: {
  appointmentId: string;
  userId: string;
}) => {
  const router = useRouter();

  return useMutation({
    mutationKey: ["cancelAppointment"],
    mutationFn: async () => {
      return await cancelAppointment({ userId, appointmentId });
    },
    onSuccess: () => {
      revalidateAppointment();
      revalidateGetCompanyService();
      invalidateAppointmentsQuery();
      router.push(`${SCHEDULE_PAGE_PATH}?status=${AppointmentStatus.Canceled}`);
    },
    onError: (error) => console.error(error),
  });
};
