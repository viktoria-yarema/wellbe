const cors = require("cors")({ origin: true });
const admin = require("firebase-admin");

export enum AppointmentStatus {
  Approved = "APPROVED",
  Canceled = "CANCELED",
  Pending = "PENDING",
  RequestToChangeDate = "REQUEST_TO_CHANGE_DATE",
  FINISHED = "FINISHED",
}

export const getAppointments = async (request, response) => {
  cors(request, response, async () => {
    try {
      const statusQuery = request.query.status; // This could be a comma-separated string of statuses
      const userId = request.query.userId;

      if (!userId) {
        return response.status(400).send("User ID is required");
      }

      const db = admin.firestore();
      let query = db.collection("users").doc(userId).collection("appointments");

      if (statusQuery) {
        const statuses = statusQuery.split(",").map((status) => status.trim());
        query = query.where("status", "in", statuses);
      }

      const snapshot = await query.get();

      if (snapshot.empty) {
        return response.status(200).json([]);
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
