import { approveChangeDateAppointment } from "./entities/appointments/approveChangeDateAppointment";
import { cancelAppointment } from "./entities/appointments/cancelAppointment";
import { createAppointment } from "./entities/appointments/createAppointment";
import { getAppointment } from "./entities/appointments/getAppointment";
import { getAppointments } from "./entities/appointments/getAppointments";
import { updateAppointment } from "./entities/appointments/updateAppointment";
import { getCompanyComments } from "./entities/comments/getCompanyComments";
import { getCompanies } from "./entities/company/getCompanies";
import { getCompany } from "./entities/company/getCompany";
import { getCompanyService } from "./entities/services/getCompanyService";
import { getCompanyServices } from "./entities/services/getCompanyServices";
import { getGroupsServices } from "./entities/services/getGroupsServices";
import { getUserDetails } from "./entities/user/getUserDetails";
import { createUserDocument } from "./triggers/createUserDocument";

const admin = require("firebase-admin");
admin.initializeApp();
const functions = require("firebase-functions");
// const express = require("express");
// const cors = require("cors");

// const corsOptions = {
//   origin: function (origin, callback) {
//     const whitelist = [
//       "http://localhost:3000",
//       "https://wellbe-book-dev.web.app",
//     ];

//     if (!origin || whitelist.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
// };

// const app = express();
// app.use(cors(corsOptions));
// app.use(express.json());

// export const mainApp = express();
// mainApp.use("/api", app);

// app.post("/createAppointment", createAppointment);

// exports.api = functions.region("europe-west1").https.onRequest(mainApp);

exports.getAppointments = functions
  .region("europe-west1")
  .https.onRequest(getAppointments);

exports.createUserDocument = functions
  .region("europe-west1")
  .auth.user()
  .onCreate(createUserDocument);

exports.getUserDetails = functions
  .region("europe-west1")
  .https.onRequest(getUserDetails);

exports.getCompany = functions
  .region("europe-west1")
  .https.onRequest(getCompany);

exports.getCompanies = functions
  .region("europe-west1")
  .https.onRequest(getCompanies);

exports.getAppointment = functions
  .region("europe-west1")
  .https.onRequest(getAppointment);

exports.getCompanyComments = functions
  .region("europe-west1")
  .https.onRequest(getCompanyComments);

exports.getCompanyServices = functions
  .region("europe-west1")
  .https.onRequest(getCompanyServices);

exports.getCompanyService = functions
  .region("europe-west1")
  .https.onRequest(getCompanyService);

exports.getGroupsServices = functions
  .region("europe-west1")
  .https.onRequest(getGroupsServices);

exports.createAppointment = functions
  .region("europe-west1")
  .https.onRequest(createAppointment);

exports.updateAppointment = functions
  .region("europe-west1")
  .https.onRequest(updateAppointment);

exports.cancelAppointment = functions
  .region("europe-west1")
  .https.onRequest(cancelAppointment);

exports.approveChangeDateAppointment = functions
  .region("europe-west1")
  .https.onRequest(approveChangeDateAppointment);
