import admin from "firebase-admin";
import { type User as FirebaseUser } from "firebase/auth";

// admin.initializeApp();

type UserFavoriteCompanyId = string;
type UserAppointmentsId = string;

export type ServerUser = FirebaseUser;

export type User = Pick<
  ServerUser,
  "email" | "phoneNumber" | "photoURL" | "emailVerified"
> & {
  id: string;
  name: string;
  lastName: string;
  createdAt: string;
  location?: string;
  favoritesCompanies?: UserFavoriteCompanyId[];
  appointments?: UserAppointmentsId[];
};

export const createUserDocument = (user) => {
  const usersRef = admin.firestore().collection("users");

  return usersRef.doc(user.uid).set({
    name: "",
    lastName: "",
    email: user.email,
    emailVerified: user.emailVerified,
    phoneNumber: user.phoneNumber,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    location: null,
    favoritesCompanies: [],
    appointments: [],
    photoURL: "",
  });
};
