import Typography from "@mui/material/Typography";
import Header from "@/shared/components/Header";
import { getCompanyService } from "@/entities/services/api/getCompanyService";
import Timestamps from "./sections/Timestamps";
import YourAppointment from "./sections/YourAppointment";
import { Suspense } from "react";
import BookCalendar from "./sections/BookCalendar";
import Actions from "./sections/Actions";
import FlexColumn from "@/shared/components/Layout/FlexColumn";

export default async function BookingPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const [companyId, serviceId] = params.slug;
  const service = await getCompanyService(companyId, serviceId);

  return (
    <FlexColumn rowGap={"3rem"} justifyContent={"space-between"} px={"1rem"}>
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
          serviceId={serviceId}
        />
      </Suspense>
      <Actions />
    </FlexColumn>
  );
}
