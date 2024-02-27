import Typography from "@mui/material/Typography";
import Header from "@/app/_components/Header";
import { getCompanyService } from "@/app/(entities)/services/api/getCompanyService";
import Timestamps from "./sections/Timestamps";
import YourAppointment from "./sections/YourAppointment";
import { Suspense } from "react";
import BookCalendar from "./sections/BookCalendar";
import Actions from "./sections/Actions";
import FlexColumn from "@/app/_components/Layout/FlexColumn";
import { getAppointment } from "@/app/(entities)/appointment/api/getAppointment";

export default async function ChangeAppointmentPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const [userId, companyId, serviceId, appointmentId] = params.slug;
  const service = await getCompanyService(companyId, serviceId);
  const appointment = await getAppointment(appointmentId, userId);

  return (
    <FlexColumn rowGap={"3rem"} justifyContent={"space-between"} px={"1rem"}>
      <Header>
        <Typography variant="bodyXLMedium">Change your date</Typography>
        <div />
      </Header>
      <BookCalendar bookingDates={service.availableTime} />
      <Suspense fallback={"Loading Timestamps..."}>
        <Timestamps serviceAvailableTime={service.availableTime} />
      </Suspense>
      <Suspense fallback={"Loading Service..."}>
        <YourAppointment appointment={appointment} />
      </Suspense>
      <Actions appointmentId={appointmentId} />
    </FlexColumn>
  );
}
