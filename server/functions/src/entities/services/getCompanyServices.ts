const cors = require("cors")({ origin: true });
const admin = require("firebase-admin");

export const getCompanyServices = async (req, res) => {
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

      const servicesRef = companyRef
        .collection("services")
        .where("active", "==", true);

      const servicesSnapshot = await servicesRef.get();
      const services = servicesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return res.status(200).json(services);
    } catch (error) {
      console.error("Error getting company services:", error);
      return res.status(500).send("Internal Server Error");
    }
  });
};
