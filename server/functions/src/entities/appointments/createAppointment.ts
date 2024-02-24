// eslint-disable-next-line @typescript-eslint/no-var-requires
const cors = require("cors")({ origin: true });
const admin = require("firebase-admin");

export const createAppointment = async (req, res) =>
  cors(req, res, async () => {
    const { userId, appointment: newAppointment } = req.body;

    // Validating request
    if (!userId) {
      return res.status(400).send("User ID is required");
    }
    if (!newAppointment) {
      return res.status(400).send("Appointment data is required");
    }

    try {
      const db = admin.firestore();
      const userRef = db.collection("users").doc(userId);
      const userDoc = await userRef.get();

      if (!userDoc.exists) {
        return res.status(404).send("User not found");
      }

      // Create a new appointment with an auto-generated ID
      const appointmentId = db.collection("appointments").doc().id;
      const appointment = {
        ...newAppointment,
        status: "PENDING",
        createdAt: new Date(),
      };

      await userRef
        .collection("appointments")
        .doc(appointmentId)
        .set(appointment, { merge: true });

      const companyId = newAppointment.companyId;
      if (!companyId) {
        return res
          .status(400)
          .send("Company ID is required in appointment data");
      }
      const companyRef = db.collection("companies").doc(companyId);

      const bookedAppointment = { ...appointment, userId };
      await companyRef
        .collection("bookedAppointments")
        .doc(appointmentId)
        .set(bookedAppointment, { merge: true });

      return res
        .status(200)
        .send("Appointment created and reserved in company");
    } catch (error) {
      console.error("Error creating appointment:", error);
      return res.status(500).send("Internal Server Error");
    }
  });
