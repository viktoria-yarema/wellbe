import { Timestamp } from "firebase/firestore";

export enum AppointmentStatus {
  Approved = "APPROVED",
  Canceled = "CANCELED",
  Pending = "PENDING",
  RequestToChangeDate = "REQUEST_TO_CHANGE_DATE",
  Finished = "FINISHED",
}

export type AvailableTime = {
  start: Timestamp;
  end: Timestamp;
};

export type AppointmentType = {
  id: string;
  status: AppointmentStatus;
  name: string;
  staff: string;
  availableTime: AvailableTime;
  createdAt: Timestamp;
  price: string;
  companyId: string;
};
