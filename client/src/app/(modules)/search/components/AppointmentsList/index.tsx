import { AppointmentType } from "@/app/(entities)/appointment/types";

type Response = {
  appointments: AppointmentType[];
  totalCount: number;
};

export default function AppointmentsList() {
  return (
    <div>
      Appointments list
      {/* {appointments?.appointments?.map((item) => (
        <div key={item.id}>{item.companyName}</div>
      ))} */}
    </div>
  );
}
