import { AppointmentStatus } from "@/entities/appointment/types";

export const actionTitlesByStatus: Record<AppointmentStatus, string> = {
  [AppointmentStatus.Approved]: "Change",
  [AppointmentStatus.Pending]: "Change",
  [AppointmentStatus.RequestToChangeDate]: "Approve",
  [AppointmentStatus.Canceled]: "",
  [AppointmentStatus.Finished]: "",
};
