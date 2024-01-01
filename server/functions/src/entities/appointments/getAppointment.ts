const cors = require("cors")({ origin: true });
const admin = require("firebase-admin");

export const getAppointment = async (request, response) => {
  cors(request, response, async () => {
    try {
      const appointmentId = request.query.id;

      if (!appointmentId) {
        return request.status(400).send("Appointment ID is required");
      }

      const query = admin
        .firestore()
        .collection("appointments")
        .doc(appointmentId);
      const doc = await query.get();

      if (!doc.exists) {
        return response.status(404).send("Appointment not found");
      }

      const appointment = { id: doc.id, ...doc.data() };
      response.status(200).json(appointment);
    } catch (error) {
      console.error("Error getting appointment:", error);
      response.status(500).send("Error getting appointment");
    }
  });
};
