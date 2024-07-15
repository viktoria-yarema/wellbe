"use client";
import { useMutation } from "@tanstack/react-query";
import { SCHEDULE_PAGE_PATH } from "@/shared/global/routes";
import { revalidateGetCompanyService } from "../../services/api/getCompanyService";
import { useRouter } from "next/navigation";
import { AppointmentStatus } from "../types";
import { revalidateAppointment } from "../api/getAppointment";
import { invalidateAppointmentsQuery } from "./useAppointments";
import { approveChangeDateAppointment } from "../api/approveChangeDateAppointment";

export const mutateChangeDateAppointment = ({
  appointmentId,
  userId,
}: {
  appointmentId: string;
  userId: string;
}) => {
  const router = useRouter();

  return useMutation({
    mutationKey: ["changeDateAppointment"],
    mutationFn: async () => {
      return await approveChangeDateAppointment({ userId, appointmentId });
    },
    onSuccess: () => {
      revalidateAppointment();
      revalidateGetCompanyService();
      invalidateAppointmentsQuery();
      router.push(`${SCHEDULE_PAGE_PATH}?status=${AppointmentStatus.Approved}`);
    },
    onError: (error) => console.error(error),
  });
};
