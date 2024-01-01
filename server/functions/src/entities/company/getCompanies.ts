const cors = require("cors")({ origin: true });
const admin = require("firebase-admin");

export const getCompanies = async (req, res) => {
  cors(req, res, async () => {
    try {
      const db = admin.firestore();
      const companyRef = db.collection("companies");
      const snapshot = await companyRef.get();

      const companies = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return res.status(200).json(companies);
    } catch (error) {
      console.error("Error getting company details:", error);
      return res.status(500).send("Internal Server Error");
    }
  });
};
