import { AppointmentStatus } from "./getAppointments";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const cors = require("cors")({ origin: true });
const admin = require("firebase-admin");

export const updateAppointment = async (req, res) =>
  cors(req, res, async () => {
    const { appointmentId, userId, updatedAppointment } = req.body;

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

      // Assuming appointments are stored in a collection named "appointments"
      const appointmentRef = db.collection("appointments").doc(appointmentId);

      const appointmentDoc = await appointmentRef.get();

      if (!appointmentDoc.exists) {
        return res.status(404).send("Appointment not found");
      }

      await userRef
        .collection("appointments")
        .doc(appointmentId)
        .set(
          {
            ...updatedAppointment,
            status: AppointmentStatus.Pending,
            updatedAt: new Date(),
          },
          { merge: true },
        );

      return res.status(200).send("Appointment was changed successfully");
    } catch (error) {
      console.error("Error updating appointment status:", error);
      return res.status(500).send("Internal Server Error");
    }
  });
