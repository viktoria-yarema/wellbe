import FlexColumn from "@/app/_components/Layout/FlexColumn";
import Typography from "@mui/material/Typography";
import Header from "@/app/_components/Header";
import { getCompanyService } from "@/app/(entities)/services/api/getCompanyService";
import Timestamps from "./sections/Timestamps";
import YourAppointment from "./sections/YourAppointment";
import { Suspense } from "react";
import BookCalendar from "./sections/BookCalendar";
import Actions from "./sections/Actions";

export default async function BookingPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const [companyId, serviceId] = params.slug;

  const service = await getCompanyService(companyId, serviceId);

  return (
    <FlexColumn rowGap={"3rem"} justifyContent={"space-between"}>
      <Header>
        <Typography variant="bodyXLMedium">Pick your date</Typography>
        <div />
      </Header>
      <BookCalendar bookingDates={service.availableTime} />
      <Suspense fallback={"Loading Timestamps..."}>
        <Timestamps serviceAvailableTime={service.availableTime} />
      </Suspense>
      <Suspense fallback={"Loading Service..."}>
        <YourAppointment
          companyId={companyId}
          serviceName={service.name}
          price={service.price}
          staff={service.staff[0]}
        />
      </Suspense>
      <Actions />
    </FlexColumn>
  );
}
