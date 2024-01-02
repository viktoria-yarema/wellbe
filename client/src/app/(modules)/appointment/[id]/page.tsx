import { getAppointment } from "@/app/(entities)/appointment/api/getAppointment";
import { extractDateInfo } from "@/app/(entities)/appointment/utilities";
import { Header } from "@/app/_components/Header";
import FlexColumn from "@/app/_components/Layout/FlexColumn";
import { Box, Typography } from "@mui/material";
import { ActionBar } from "../components/ActionBar";
import StatusChip from "@/app/_components/StatusChip";

export default async function AppointmentId({
  params,
}: {
  params: { id: string };
}) {
  const appointment = await getAppointment(params.id);
  const { monthAndWeek, day, time } = extractDateInfo(
    appointment.appointmentDate
  );

  return (
    <FlexColumn p={0}>
      <Header>
        <StatusChip status={appointment.status} size={"large"} />
        <Box />
      </Header>
      <FlexColumn alignItems={"center"} rowGap={"1rem"} mt="60px">
        <Typography variant="heading3Bold" color={"text.primary"}>
          {monthAndWeek} {day}
        </Typography>
        <Typography variant="bodyXLRegular" color={"text.secondary"}>
          {appointment.serviceName}
        </Typography>
        <FlexColumn alignItems={"center"}>
          <Typography variant="heading4Bold" color={"text.primary"}>
            Price - {appointment.price}$
          </Typography>
          <Typography variant="bodyLRegular" color={"text.secondary"}>
            Time - {time}
          </Typography>
        </FlexColumn>
      </FlexColumn>
      <ActionBar />
    </FlexColumn>
  );
}
