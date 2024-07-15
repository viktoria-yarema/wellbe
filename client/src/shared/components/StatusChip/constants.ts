import { AppointmentStatus } from "@/entities/appointment/types";

export const statusColors = {
  [AppointmentStatus.Approved]: "success.main",
  [AppointmentStatus.Pending]: "warning.main",
  [AppointmentStatus.Canceled]: "error.main",
  [AppointmentStatus.RequestToChangeDate]: "info.main",
  [AppointmentStatus.Finished]: "secondary.main",
};
