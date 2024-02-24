"use client";

import ActionBar from "@/app/_components/Buttons/ActionBar";
import PrimaryButton from "@/app/_components/Buttons/PrimaryButton";
import SecondaryButton from "@/app/_components/Buttons/SecondaryButton";
import { useUserStore } from "@/app/(entities)/user/store/useUserStore";
import { useBookingStore } from "../../store/useBookingStore";
import { mutateCreateNewAppointment } from "@/app/(entities)/appointment/queries/mutateCreateNewAppointment";

export default function Actions() {
  const { selectedTime, resetSelectedTime, newAppointment } = useBookingStore();
  const { user } = useUserStore();

  const userId = user?.id ?? "";

  const { mutate: createNewAppointment, isPending } =
    mutateCreateNewAppointment({ userId, newAppointment });

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
