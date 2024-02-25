import { Suspense } from "react";
import { getAppointment } from "@/app/(entities)/appointment/api/getAppointment";
import { extractDateInfo } from "@/app/(entities)/appointment/utilities";
import Header from "@/app/_components/Header";
import FlexColumn from "@/app/_components/Layout/FlexColumn";
import Typography from "@mui/material/Typography";
import ActionBar from "./components/ActionBar";
import StatusChip from "@/app/_components/StatusChip";
import CompanyButton from "./components/CompanyButton";
import { getCompanyId } from "@/app/(entities)/company/api/getCompanyId";

export default async function AppointmentId({
  params,
}: {
  params: { slug: string[] };
}) {
  const [id, userId] = params.slug;
  const appointment = await getAppointment(id, userId);
  const company = await getCompanyId(appointment.companyId);

  const date = extractDateInfo(appointment.availableTime);

  return (
    <FlexColumn>
      <Header>
        <StatusChip status={appointment.status} size={"large"} />
        <div />
      </Header>
      <FlexColumn alignItems={"center"} rowGap={"1rem"} m="60px 0 82px">
        <Typography variant="heading3Bold" color={"text.primary"}>
          {date?.monthAndWeek} {date?.day}
        </Typography>
        <Typography variant="bodyXLRegular" color={"text.secondary"}>
          {appointment.name}
        </Typography>
        <FlexColumn alignItems={"center"}>
          <Typography variant="heading4Bold" color={"text.primary"}>
            Price - {Number(appointment.price).toFixed(2)}$
          </Typography>
          <Typography variant="bodyLRegular" color={"text.secondary"}>
            Time - {date?.time}
          </Typography>
        </FlexColumn>
      </FlexColumn>
      <Suspense fallback="Loading company">
        <CompanyButton
          companyImage={company.pictureUrl}
          companyName={company.name}
          companyId={appointment.companyId}
        />
      </Suspense>
      <ActionBar
        status={appointment.status}
        userId={userId}
        appointmentId={id}
        serviceId={appointment.serviceId}
        companyId={appointment.companyId}
      />
    </FlexColumn>
  );
}
