"use client";

import ActionBar from "@/shared/components/Buttons/ActionBar";
import PrimaryButton from "@/shared/components/Buttons/PrimaryButton";
import SecondaryButton from "@/shared/components/Buttons/SecondaryButton";
import { useUserStore } from "@/entities/user/store/useUserStore";
import { useChangeAppointmentStore } from "../../store/useChangeAppointmentStore";
import { mutateUpdateAppointment } from "@/entities/appointment/queries/mutateUpdateAppointment";
import dynamic from "next/dynamic";
import { useState } from "react";
import { extractDateInfo } from "@/entities/appointment/utilities";
import { AvailableTime } from "@/entities/appointment/types";

const ConfirmationPopupDynamic = dynamic(
  () => import("@/shared/components/ConfirmationPopup"),
);

type ActionsProps = {
  appointmentId: string;
};

export default function Actions({ appointmentId }: ActionsProps) {
  const [open, setOpen] = useState(false);
  const { selectedTime, resetSelectedTime, updateAppointment } =
    useChangeAppointmentStore();
  const { user } = useUserStore();

  const userId = user?.id ?? "";

  const changedAppointment =
    selectedTime && updateAppointment
      ? { ...updateAppointment, availableTime: selectedTime }
      : updateAppointment;

  const { mutate: onUpdateAppointment, isPending } = mutateUpdateAppointment({
    userId,
    updatedAppointment: changedAppointment,
    appointmentId,
  });

  const isDisabledSubmitting = !selectedTime || !user?.id || !updateAppointment;

  const getTime = (timestamp?: AvailableTime) => {
    const time = extractDateInfo(timestamp);
    return `${time?.day} ${time?.monthAndWeek}, ${time?.time}`;
  };

  const newTime = getTime(selectedTime || undefined);

  return (
    <ActionBar>
      <SecondaryButton title="Reset" onClick={resetSelectedTime} fullWidth />
      <PrimaryButton
        title="Apply"
        onClick={() => setOpen(true)}
        fullWidth
        disabled={isDisabledSubmitting}
      />
      <ConfirmationPopupDynamic
        title={`Are you sure to change date of appointment on ${newTime}?`}
        open={open}
        onClose={() => setOpen(false)}
        onApply={onUpdateAppointment}
        isLoading={isPending}
        secondaryButtonTitle="No"
      />
    </ActionBar>
  );
}
