"use client";
import { useAppointments } from "@/app/(entities)/appointment/queries/useAppointments";
import { AppointmentStatus } from "@/app/(entities)/appointment/types";
import AppointmentCard from "@/app/_components/AppointmentCard";
import FlexColumn from "@/app/_components/Layout/FlexColumn";

type AppointmentsListProps = {
  status: AppointmentStatus;
};

export default function AppointmentsList({ status }: AppointmentsListProps) {
  const { data: appointments } = useAppointments({ status });
  return (
    <FlexColumn rowGap={"1rem"}>
      {appointments?.map((item) => (
        <AppointmentCard key={item.id} card={item} />
      ))}
    </FlexColumn>
  );
}
