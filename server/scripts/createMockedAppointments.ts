const admin = require("firebase-admin");
const serviceAccount = require("./wellbe-book-dev-firebase-adminsdk-s8vgk-8d7d44ee77.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

(async () => {
  try {
    const appointments = [
      {
        companyName: "Artistic Nails",
        status: "PENDING",
        serviceName: "Pedicure and Nails",
        staff: "Staff Name",
        location: "Los Angeles, CA",
        appointmentDate: new Date(),
        companyImg: "luxe_nails_img.jpg",
        createdAt: new Date(),
      },
    ];

    appointments.forEach(async (appointment) => {
      const docRef = await db.collection("appointments").add(appointment);
      console.log(`Document written with ID: ${docRef.id}`);
    });
  } catch (error) {
    console.error("Error adding document: ", error);
  }
})();
