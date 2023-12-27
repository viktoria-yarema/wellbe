const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors")({ origin: true });

admin.initializeApp();

exports.getAppointments = functions
  .region("europe-west1")
  .https.onRequest((request, response) => {
    cors(request, response, async () => {
      try {
        const limit = parseInt(request.query.limit) || 10;
        const lastSeenId = request.query.lastSeenId; // ID of the last item seen

        let query = admin
          .firestore()
          .collection("appointments")
          .orderBy("date")
          .limit(limit);

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

        response.status(200).json({ appointments });
      } catch (error) {
        console.error("Error getting appointments:", error);
        response.status(500).send("Error getting appointments");
      }
    });
  });
