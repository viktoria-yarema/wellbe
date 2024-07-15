import { UserInfo } from "firebase/auth";

type UserFavoriteCompanyId = string;
type UserAppointmentsId = string;

export type ServerUser = UserInfo;

export type UserDetails = {
  id: string;
  name: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  photoURL: string;
  emailVerified: boolean;
  createdAt: string;
  location?: string;
  favoritesCompanies?: UserFavoriteCompanyId[];
  appointments?: UserAppointmentsId[];
};
