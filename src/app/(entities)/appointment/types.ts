export enum AppointmentStatus {
  Approved = "APPROVED",
  Canceled = "CANCELED",
  Pending = "PENDING",
  RequestToChangeDate = "REQUEST_TO_CHANGE_DATE",
}

export type AppointmentType = {
  id: string;
  companyName: string;
  status: AppointmentStatus;
  serviceName: string;
  staff: string;
  location: string;
  date: Date;
  companyImg: string;
};
