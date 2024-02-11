const cors = require("cors")({ origin: true });
const admin = require("firebase-admin");

export enum AppointmentStatus {
  Approved = "APPROVED",
  Canceled = "CANCELED",
  Pending = "PENDING",
  RequestToChangeDate = "REQUEST_TO_CHANGE_DATE",
}

export const getAppointments = async (request, response) => {
  cors(request, response, async () => {
    try {
      // const limitParam = parseInt(request.query.limit) || 10;
      const status = request.query.status;
      const userId = request.query.userId;

      if (!status) {
        return response.status(400).send("Status parameter is required");
      }

      if (!userId) {
        return response.status(400).send("User ID is required");
      }

      const db = admin.firestore();

      const query = db
        .collection("users")
        .doc(userId)
        .collection("appointments")
        .where("status", "==", status);
      // .orderBy("appointmentDate") // Assuming 'appointmentDate' is a sortable field you have.
      // .limit(limitParam);

      const snapshot = await query.get();

      if (snapshot.empty) {
        return response.status(404).send("No matching appointments found");
      }

      const appointments = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      response.status(200).json(appointments);
    } catch (error) {
      console.error("Error getting appointments:", error);
      response.status(500).send("Error getting appointments");
    }
  });
};
