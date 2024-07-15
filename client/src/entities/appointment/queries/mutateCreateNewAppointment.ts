import { useMutation } from "@tanstack/react-query";
import { SCHEDULE_PAGE_PATH } from "@/shared/global/routes";
import { createAppointment } from "../api/createAppointment";
import { revalidateGetCompanyService } from "../../services/api/getCompanyService";
import { CreateService } from "../../services/types";
import { useRouter } from "next/navigation";
import { AppointmentStatus } from "../types";

export const mutateCreateNewAppointment = ({
  newAppointment,
  userId,
}: {
  newAppointment: CreateService | null;
  userId: string;
}) => {
  const router = useRouter();

  return useMutation({
    mutationKey: ["createNewAppointment"],
    mutationFn: async () => {
      return await createAppointment(userId, newAppointment);
    },
    onSuccess: () => {
      revalidateGetCompanyService();
      router.push(`${SCHEDULE_PAGE_PATH}?status=${AppointmentStatus.Pending}`);
    },
    onError: (error) => console.error(error),
  });
};
