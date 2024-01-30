const cors = require("cors")({ origin: true });
const admin = require("firebase-admin");

export const getGroupsServices = async (req, res) => {
  cors(req, res, async () => {
    const companyId = req.query.companyId;

    if (!companyId) {
      return res.status(400).send("Company ID is required");
    }

    try {
      const db = admin.firestore();
      const companyRef = db.collection("companies").doc(companyId);
      const companyDoc = await companyRef.get();

      if (!companyDoc.exists) {
        return res.status(404).send("Company not found");
      }

      const servicesQuerySnapshot = await companyRef
        .collection("services")
        .where("active", "==", true)
        .get();

      if (servicesQuerySnapshot.empty) {
        return res.status(404).send("No active services found");
      }

      const companyData = companyDoc.data();
      if (!companyData || !companyData.groupsServices) {
        return res.status(404).send("Groups services data not found");
      }

      const updatedGroupsPromises = companyData.groupsServices.map(
        async (group) => {
          const services = await Promise.all(
            group.services.map((id) => {
              const serviceDoc = servicesQuerySnapshot.docs
                .find((doc) => doc.id === id)
                .data();

              return serviceDoc ? { id, ...serviceDoc } : null;
            })
          );

          const validServices = services.filter((service) => service !== null);

          return {
            ...group,
            services: validServices,
          };
        }
      );

      const updatedGroups = await Promise.all(updatedGroupsPromises);

      return res.status(200).json(updatedGroups);
    } catch (error) {
      console.error("Error getting service:", error);
      return res.status(500).send("Internal Server Error: " + error.message);
    }
  });
};
