"use client";

import PrimaryButton from "@/shared/components/Buttons/PrimaryButton";
import SecondaryButton from "@/shared/components/Buttons/SecondaryButton";
import { AppointmentStatus } from "@/entities/appointment/types";
import { actionTitlesByStatus } from "./utils";
import ActionBar from "@/shared/components/Buttons/ActionBar";
import dynamic from "next/dynamic";
import { useState } from "react";
import { mutateCancelAppointment } from "@/entities/appointment/queries/mutateCancelAppointment";
import { mutateChangeDateAppointment } from "@/entities/appointment/queries/mutateChangeDateAppointment";
import { useRouter } from "next/navigation";
import { CHANGE_APPOINTMENT_PATH } from "@/shared/global/routes";

const ConfirmationPopupDynamic = dynamic(
  () => import("@/shared/components/ConfirmationPopup"),
);

type ActionBarType = {
  status: AppointmentStatus;
  userId: string;
  appointmentId: string;
  companyId: string;
  serviceId: string;
};

export default function ActionBarAppointment({
  status,
  appointmentId,
  userId,
  companyId,
  serviceId,
}: ActionBarType) {
  const [open, setOpen] = useState(false);
  const title = actionTitlesByStatus[status];

  const router = useRouter();

  if (status === AppointmentStatus.Canceled) {
    return null;
  }

  const { mutate: onCancelAppointment, isPending } = mutateCancelAppointment({
    userId,
    appointmentId,
  });

  const { mutate: onChangeDateAppointment, isPending: isLoadingChangeDate } =
    mutateChangeDateAppointment({ userId, appointmentId });

  const onRequestChangeAppointment = () =>
    router.push(
      `${CHANGE_APPOINTMENT_PATH}/${userId}/${companyId}/${serviceId}/${appointmentId}`,
    );

  const primaryButtonCallback: Record<string, () => void> = {
    [AppointmentStatus.RequestToChangeDate]: onChangeDateAppointment,
    [AppointmentStatus.Pending]: onRequestChangeAppointment,
    [AppointmentStatus.Approved]: onRequestChangeAppointment,
  };

  const isLoadingPrimaryButton = isLoadingChangeDate;

  return (
    <ActionBar>
      <SecondaryButton title="Cancel" onClick={() => setOpen(true)} />
      <PrimaryButton
        title={title}
        onClick={
          primaryButtonCallback[status as AppointmentStatus.RequestToChangeDate]
        }
        loading={isLoadingPrimaryButton}
      />
      <ConfirmationPopupDynamic
        title="Are you sure to cancel current appointment?"
        open={open}
        onClose={() => setOpen(false)}
        onApply={onCancelAppointment}
        isLoading={isPending}
        secondaryButtonTitle="No"
      />
    </ActionBar>
  );
}
