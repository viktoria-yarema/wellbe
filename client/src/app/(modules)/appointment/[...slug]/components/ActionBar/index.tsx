"use client";

import PrimaryButton from "@/app/_components/Buttons/PrimaryButton";
import SecondaryButton from "@/app/_components/Buttons/SecondaryButton";
import { AppointmentStatus } from "@/app/(entities)/appointment/types";
import { actionTitlesByStatus } from "./utils";
import ActionBar from "@/app/_components/Buttons/ActionBar";
import dynamic from "next/dynamic";
import { useState } from "react";
import { mutateCancelAppointment } from "@/app/(entities)/appointment/queries/mutateCancelAppointment";

const ConfirmationPopupDynamic = dynamic(
  () => import("@/app/_components/ConfirmationPopup")
);

type ActionBar = {
  status: AppointmentStatus;
  userId: string;
  appointmentId: string;
};

export default function ActionBarAppointment({
  status,
  appointmentId,
  userId,
}: ActionBar) {
  const [open, setOpen] = useState(false);
  const title = actionTitlesByStatus[status];

  if (status === AppointmentStatus.Canceled) {
    return null;
  }

  const { mutate: onCancelAppointment, isPending } = mutateCancelAppointment({
    userId,
    appointmentId,
  });

  return (
    <ActionBar>
      <SecondaryButton title="Cancel" onClick={() => setOpen(true)} />
      <PrimaryButton title={title} />
      <ConfirmationPopupDynamic
        title="Are you sure to cancel current appointment?"
        open={open}
        onClose={() => setOpen(false)}
        onApply={onCancelAppointment}
        isLoading={isPending}
      />
    </ActionBar>
  );
}
