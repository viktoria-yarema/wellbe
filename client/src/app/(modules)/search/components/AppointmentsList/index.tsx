import { AppointmentType } from "@/app/(entities)/appointment/types";

type Response = {
  appointments: AppointmentType[];
  totalCount: number;
};

const getAppointments = async (): Promise<Response | undefined> => {
  try {
    const response = await fetch(
      "https://us-central1-wellbe-book-dev.cloudfunctions.net/getAppointments?limit=10&page=1"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching appointments:", error);
  }
};

export default async function AppointmentsList() {
  const appointments = await getAppointments();

  return (
    <div>
      Appointments list
      {appointments?.appointments?.map((item) => (
        <div key={item.id}>{item.companyName}</div>
      ))}
    </div>
  );
}
