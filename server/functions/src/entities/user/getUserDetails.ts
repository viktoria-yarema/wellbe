const cors = require("cors")({ origin: true });
const admin = require("firebase-admin");

export const getUserDetails = async (req, res) => {
  cors(req, res, async () => {
    if (req.method !== "GET") {
      res.status(405).send("Method Not Allowed");
      return;
    }

    const userId = req.query.userId;
    if (!userId) {
      res.status(400).send("User ID is required");
      return;
    }

    try {
      const userDoc = await admin
        .firestore()
        .collection("users")
        .doc(userId.toString())
        .get();
      if (!userDoc.exists) {
        res.status(404).send("User not found");
        return;
      }

      res.status(200).json({ ...userDoc.data(), id: userId });
    } catch (error) {
      res.status(500).send(error.message);
    }
  });
};
