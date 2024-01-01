const cors = require("cors")({ origin: true });
const admin = require("firebase-admin");

export const getCompany = async (req, res) => {
  cors(req, res, async () => {
    const companyId = req.query.id;
    if (!companyId) {
      return res.status(400).send("Company ID is required");
    }

    try {
      const db = admin.firestore();
      const companyRef = db.collection("companies").doc(companyId);
      const doc = await companyRef.get();

      if (!doc.exists) {
        return res.status(404).send("Company not found");
      }

      const companyData = doc.data();
      return res.status(200).json(companyData);
    } catch (error) {
      console.error("Error getting company details:", error);
      return res.status(500).send("Internal Server Error");
    }
  });
};
