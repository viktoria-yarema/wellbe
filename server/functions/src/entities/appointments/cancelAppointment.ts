import { AppointmentStatus } from "./getAppointments";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const cors = require("cors")({ origin: true });
const admin = require("firebase-admin");

export const cancelAppointment = async (req, res) =>
  cors(req, res, async () => {
    const { appointmentId, userId } = req.body;

    // Validating request
    if (!appointmentId) {
      return res.status(400).send("Appointment ID is required");
    }

    if (!userId) {
      return res.status(400).send("User ID is required");
    }

    try {
      const db = admin.firestore();
      const userRef = db.collection("users").doc(userId);

      await userRef
        .collection("appointments")
        .doc(appointmentId)
        .set({ status: AppointmentStatus.Canceled }, { merge: true });

      return res.status(200).send("Appointment was canceled successfully");
    } catch (error) {
      console.error("Error updating appointment status:", error);
      return res.status(500).send("Internal Server Error");
    }
  });
