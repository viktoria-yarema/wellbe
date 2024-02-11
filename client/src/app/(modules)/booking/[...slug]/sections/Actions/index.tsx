"use client";

import ActionBar from "@/app/_components/Buttons/ActionBar";
import PrimaryButton from "@/app/_components/Buttons/PrimaryButton";
import SecondaryButton from "@/app/_components/Buttons/SecondaryButton";
import { useMutation } from "@tanstack/react-query";
import { createAppointment } from "@/app/(entities)/appointment/api/createAppointment";
import { useUserStore } from "@/app/(entities)/user/store/useUserStore";
import { useRouter } from "next/navigation";
import { SCHEDULE_PAGE_PATH } from "@/app/_global/routes";
import revalidateGetCompanyService from "@/app/(entities)/services/api/getCompanyService";
import { useBookingStore } from "../../store/useBookingStore";

export default function Actions() {
  const router = useRouter();
  const { selectedTime, resetSelectedTime, newAppointment } = useBookingStore();
  const { user } = useUserStore();

  const { mutate: createNewAppointment, isPending } = useMutation({
    mutationKey: ["createNewAppointment"],
    mutationFn: async () => {
      return await createAppointment(user?.id, newAppointment);
    },
    onSuccess: () => {
      revalidateGetCompanyService();
      router.push(SCHEDULE_PAGE_PATH);
    },
    onError: (error) => console.error(error),
  });

  const isDisabledSubmitting = !selectedTime || !user?.id || !newAppointment;

  return (
    <ActionBar>
      <SecondaryButton title="Reset" onClick={resetSelectedTime} fullWidth />
      <PrimaryButton
        title="Apply"
        onClick={() => createNewAppointment()}
        fullWidth
        disabled={isDisabledSubmitting}
        loading={isPending}
      />
    </ActionBar>
  );
}
