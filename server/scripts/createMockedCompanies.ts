const admin = require("firebase-admin");
const serviceAccount = require("./wellbe-book-dev-firebase-adminsdk-s8vgk-8d7d44ee77.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

(async () => {
  try {
    const companies = [
      {
        email: "luxe.nails@example.com",
        phone: "+1-555-481-0697",
        extraPhones: [],
        name: "Luxe Nails",
        shortDescription: "Luxury nail salon offering high-end nail care.",
        categories: ["Nails"],
        about:
          "Luxe Nails is dedicated to providing a luxurious experience with top-quality products and skilled professionals.",
        rate: 3.7125234412108465,
        opinion: 38,
        location: "New York, NY",
        staff: [],
        updateAt: new Date(),
        createAt: new Date(),
        socialMedia: [],
        schedule: [],
        portfolio: [],
      },
      {
        email: "eco.nails@example.com",
        phone: "+1-555-241-0697",
        extraPhones: [],
        name: "Eco Nails",
        shortDescription: "Eco-friendly nail salon focused on sustainability.",
        categories: ["Nails"],
        about:
          "Eco Nails offers a unique, eco-friendly approach to nail care, using organic products and sustainable practices.",
        rate: 4.212042798124658,
        opinion: 82,
        location: "San Francisco, CA",
        staff: [],
        updateAt: new Date(),
        createAt: new Date(),
        socialMedia: [],
        schedule: [],
        portfolio: [],
      },
      {
        email: "artistic.nails@example.com",
        phone: "+1-555-091-2683",
        extraPhones: [],
        name: "Artistic Nails",
        shortDescription: "Creative nail salon for artistic designs.",
        categories: ["Nails"],
        about:
          "Artistic Nails is the go-to destination for those who want unique and creative nail art, crafted by experienced artists.",
        rate: 4.024110113845797,
        opinion: 41,
        location: "Los Angeles, CA",
        staff: [],
        updateAt: new Date(),
        createAt: new Date(),
        socialMedia: [],
        schedule: [],
        portfolio: [],
      },
      {
        email: "family.nails@example.com",
        phone: "+1-555-438-2715",
        extraPhones: [],
        name: "Family Nails",
        shortDescription:
          "Family-friendly nail salon with services for all ages.",
        categories: ["Nails"],
        about:
          "Family Nails provides a comfortable and welcoming environment for families, offering services for adults and children alike.",
        rate: 3.3470178284370053,
        opinion: 16,
        location: "Orlando, FL",
        staff: [],
        updateAt: new Date(),
        createAt: new Date(),
        socialMedia: [],
        schedule: [],
        portfolio: [],
      },
    ];

    companies.forEach(async (appointment) => {
      const docRef = await db.collection("companies").add(appointment);
      console.log(`Document written with ID: ${docRef.id}`);
    });
  } catch (error) {
    console.error("Error adding document: ", error);
  }
})();
