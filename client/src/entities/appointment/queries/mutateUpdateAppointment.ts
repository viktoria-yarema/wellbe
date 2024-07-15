import { useMutation } from "@tanstack/react-query";
import { SCHEDULE_PAGE_PATH } from "@/shared/global/routes";
import { revalidateGetCompanyService } from "../../services/api/getCompanyService";
import { useRouter } from "next/navigation";
import { AppointmentStatus, AppointmentType } from "../types";
import { updateAppointment } from "../api/updateAppointment";

export const mutateUpdateAppointment = ({
  appointmentId,
  userId,
  updatedAppointment,
}: {
  appointmentId: string;
  userId: string;
  updatedAppointment: AppointmentType | null;
}) => {
  const router = useRouter();

  return useMutation({
    mutationKey: ["updateAppointment"],
    mutationFn: async () => {
      return await updateAppointment({
        userId,
        updatedAppointment,
        appointmentId,
      });
    },
    onSuccess: () => {
      revalidateGetCompanyService();
      router.push(`${SCHEDULE_PAGE_PATH}?status=${AppointmentStatus.Pending}`);
    },
    onError: (error) => console.error(error),
  });
};
