import { AppointmentStatus } from "@/entities/appointment/types";
import AppointmentsList from "@/shared/components/AppointmentsList";
import PageContainer from "@/shared/components/PageContainer";
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
