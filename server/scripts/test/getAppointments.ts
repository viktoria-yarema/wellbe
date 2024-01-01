const axios = require("axios");

async function testGetAppointments() {
  try {
    const response = await axios.get(
      "https://europe-west1-wellbe-book-dev.cloudfunctions.net/getAppointments",
      {
        params: {
          limit: 10,
          status: "PENDING",
          // Include other parameters as needed
        },
      }
    );

    console.log("Response:", response.data);
  } catch (error) {
    console.error("Error:", error.response.data);
  }
}

testGetAppointments();
