import { AppointmentStatus } from "@/app/(entities)/appointment/types";

export const appointmentStatusLabels = [
  { value: AppointmentStatus.Approved, label: "Approved" },
  { value: AppointmentStatus.Canceled, label: "Canceled" },
  { value: AppointmentStatus.Pending, label: "Pending" },
  {
    value: AppointmentStatus.RequestToChangeDate,
    label: "Change Date",
  },
  {
    value: AppointmentStatus.Finished,
    label: "Finished",
  },
];
