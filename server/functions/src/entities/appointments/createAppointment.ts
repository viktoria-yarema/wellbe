const admin = require("firebase-admin");
const cors = require("cors")({ origin: true });

export const createAppointment = async (req, res) => {
  cors(req, res, async () => {
    const body = JSON.parse(req.body);
    const userId = body.userId;
    const newAppointment = body.appointment;

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

      const userData = userDoc.data();

      // Check if the "appointments" subcollection exists
      const appointmentsCollectionRef = userRef.collection("appointments");
      const appointmentId = db.collection("appointments").doc().id;

      if (userData.appointments) {
        // If the subcollection exists, add the new appointment
        //  with the auto-generated ID
        await appointmentsCollectionRef.doc(appointmentId).set(newAppointment);
      } else {
        // If the subcollection doesn't exist, create it and add the
        // new appointment with the auto-generated ID
        await userRef.set(
          {
            appointments: [{ ...newAppointment, id: appointmentId }],
          },
          { merge: true }
        );
      }

      return res
        .status(200)
        .send(`Appointment created with ID: ${appointmentId}`);
    } catch (error) {
      console.error("Error creating appointment:", error);
      return res.status(500).send("Internal Server Error");
    }
  });
};
