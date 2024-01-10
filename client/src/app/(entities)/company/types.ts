import { GroupServices } from "../services/types";

export type Company = {
  id: string;
  email: string;
  phone: string;
  pictureUrl: string;
  extraPhones?: string[];
  name: string;
  shortDescription: string;
  categories: string[]; // todo: rough types category
  about: string;
  rate: number;
  opinion: number;
  location: string;
  staff: string[]; // todo: type for staff
  updateAt: Date;
  createAt: Date;
  socialMedia?: SocialMedia[];
  schedule: CompanySchedule[];
  portfolio?: string[]; // todo: make the model for image
  groupsServices: GroupServices[];
};

export enum CompanyTabs {
  GENERAL = "General",
  SERVICES = "Services",
  PORTFOLIO = "Portfolio",
  REVIEWS = "Reviews",
}

export enum SocialMediaVariant {
  FACEBOOK = "facebook",
  INSTAGRAM = "instagram",
  TIK_TOK = "tiktok",
  WHATS_APP = "whatsApp",
  TELEGRAM = "telegram",
}

export type SocialMedia = {
  type: SocialMediaVariant;
  link: string;
};

export enum CompanyScheduleVariant {
  MONDAY = "monday",
  TUESDAY = "tuesday",
  WEDNESDAY = "wednesday",
  THURSDAY = "thursday",
  FRIDAY = "friday",
  SATURDAY = "saturday",
  SUNDAY = "sunday",
}

export type CompanySchedule = {
  day: CompanyScheduleVariant;
  timestamp: string;
};
