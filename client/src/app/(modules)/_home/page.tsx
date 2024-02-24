import { AppointmentStatus } from "@/app/(entities)/appointment/types";
import AppointmentsList from "@/app/_components/AppointmentsList";
import PageContainer from "@/app/_components/PageContainer";
import Typography from "@mui/material/Typography";

export default function HomePage() {
  return (
    <PageContainer>
      <Typography variant="heading4Bold">Recently booked</Typography>
      <AppointmentsList
        status={[AppointmentStatus.Approved, AppointmentStatus.Pending]}
      />
    </PageContainer>
  );
}
