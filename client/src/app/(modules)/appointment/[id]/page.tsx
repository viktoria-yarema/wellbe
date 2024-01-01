import { getAppointment } from "@/app/(entities)/appointment/api/getAppointment";
import { extractDateInfo } from "@/app/(entities)/appointment/utilities";
import FlexColumn from "@/app/_components/Layout/FlexColumn";
import { Typography } from "@mui/material";

export default async function AppointmentID({
  params,
}: {
  params: { id: string };
}) {
  const appointment = await getAppointment(params.id);
  const { monthAndWeek, day, time } = extractDateInfo(
    appointment.appointmentDate
  );
  console.log(appointment, "appointment");
  return (
    <FlexColumn alignItems={"center"} rowGap={"1rem"}>
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
  );
}
