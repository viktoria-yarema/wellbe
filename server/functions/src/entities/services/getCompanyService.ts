const cors = require("cors")({ origin: true });
const admin = require("firebase-admin");

export const getCompanyService = async (req, res) => {
  cors(req, res, async () => {
    const companyId = req.query.companyId;
    const serviceId = req.query.serviceId;

    if (!companyId) {
      return res.status(400).send("Company ID is required");
    }

    if (!serviceId) {
      return res.status(400).send("Service ID is required");
    }

    try {
      const db = admin.firestore();
      const companyRef = db.collection("companies").doc(companyId);
      const doc = await companyRef.get();

      if (!doc.exists) {
        return res.status(404).send("Company not found");
      }

      // Query for active service by ID
      const servicesQuerySnapshot = await companyRef
        .collection("services")
        .where(admin.firestore.FieldPath.documentId(), "==", serviceId)
        .where("active", "==", true)
        .get();

      if (servicesQuerySnapshot.empty) {
        return res.status(404).send("Active service not found");
      }

      const serviceSnapshot = servicesQuerySnapshot.docs[0];
      const serviceData = {
        id: serviceSnapshot.id,
        ...serviceSnapshot.data(),
      };

      return res.status(200).json(serviceData);
    } catch (error) {
      console.error("Error getting service:", error);
      return res.status(500).send("Internal Server Error");
    }
  });
};
