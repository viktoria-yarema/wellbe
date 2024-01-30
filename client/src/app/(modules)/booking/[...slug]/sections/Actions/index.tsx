"use client";

import ActionBar from "@/app/_components/Buttons/ActionBar";
import PrimaryButton from "@/app/_components/Buttons/PrimaryButton";
import SecondaryButton from "@/app/_components/Buttons/SecondaryButton";
import { useBookingStore } from "../../store/useBookingStore";
import { useMutation } from "@tanstack/react-query";
import { createAppointment } from "@/app/(entities)/appointment/api/createAppointment";
import { useUserStore } from "@/app/(entities)/user/store/useUserStore";

export default function Actions() {
  const { selectedTime, resetSelectedTime, newAppointment } = useBookingStore();
  const { user, firebaseUser } = useUserStore();
  const { mutate: createNewAppointment, isPending } = useMutation({
    mutationFn: () => createAppointment(user?.id, newAppointment),
  });

  const isDisabledSubmitting = !selectedTime && !user?.id && !newAppointment;

  return (
    <ActionBar>
      <SecondaryButton title={"Reset"} onClick={resetSelectedTime} fullWidth />
      <PrimaryButton
        title={"Apply"}
        onClick={() => createNewAppointment()}
        fullWidth
        disabled={isDisabledSubmitting}
        loading={isPending}
      />
    </ActionBar>
  );
}
