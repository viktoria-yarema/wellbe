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
      const limitParam = parseInt(request.query.limit) || 10;
      const lastSeenId = request.query.lastSeenId; // ID of the last item seen
      const status = request.query.status;

      if (!status) {
        return response.status(400).send("Status parameter is required");
      }

      let query = admin
        .firestore()
        .collection("appointments")
        .where("status", "in", [status])
        // .orderBy("appointmentDate")
        .limit(limitParam);

      if (lastSeenId) {
        const lastSeenDoc = await admin
          .firestore()
          .collection("appointments")
          .doc(lastSeenId)
          .get();
        query = query.startAfter(lastSeenDoc);
      }

      const snapshot = await query.get();
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
