import { AvailableTime } from "../appointment/types";

type StaffId = string;

export type Service = {
  id: string;
  duration: string;
  name: string;
  price: string;
  active: boolean;
  currency: string;
  availableTime: AvailableTime[];
  staff: StaffId[];
};

export type CreateService = {
  // userId: string;
  companyId: string;
  name: string;
  price: string;
  currency: string;
  availableTime: AvailableTime;
  staff: StaffId;
};

type ServiceId = string;

export type GroupServices = {
  id: string;
  name: string;
  services: ServiceId[];
};

export type ModifiedGroupServices = {
  id: string;
  name: string;
  services: Service[];
};
