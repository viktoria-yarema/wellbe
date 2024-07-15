"use client";

import ActionBar from "@/shared/components/Buttons/ActionBar";
import PrimaryButton from "@/shared/components/Buttons/PrimaryButton";
import SecondaryButton from "@/shared/components/Buttons/SecondaryButton";
import { useUserStore } from "@/entities/user/store/useUserStore";
import { useBookingStore } from "../../store/useBookingStore";
import { mutateCreateNewAppointment } from "@/entities/appointment/queries/mutateCreateNewAppointment";

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
