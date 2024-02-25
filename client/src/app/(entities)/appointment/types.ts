import { Timestamp } from "firebase/firestore";

export enum AppointmentStatus {
  Approved = "APPROVED",
  Pending = "PENDING",
  RequestToChangeDate = "REQUEST_TO_CHANGE_DATE",
  Finished = "FINISHED",
  Canceled = "CANCELED",
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
  serviceId: string;
};
