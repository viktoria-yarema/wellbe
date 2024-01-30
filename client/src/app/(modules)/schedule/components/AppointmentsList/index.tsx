"use client";
import { useAppointments } from "@/app/(entities)/appointment/queries/useAppointments";
import { AppointmentStatus } from "@/app/(entities)/appointment/types";
import AppointmentCard from "@/app/_components/AppointmentCard";
import FlexColumn from "@/app/_components/Layout/FlexColumn";
import { useRouter } from "next/navigation";

type AppointmentsListProps = {
  status: AppointmentStatus;
};

export default function AppointmentsList({ status }: AppointmentsListProps) {
  const router = useRouter();
  const { data: appointments } = useAppointments({ status });
  const handleAppointmentClick = (id: string) =>
    router.push(`/appointment/${id}`);

  return (
    <FlexColumn rowGap={"1rem"}>
      {appointments?.map((item) => (
        <AppointmentCard
          key={item.id}
          {...item}
          handleClick={() => handleAppointmentClick(item.id)}
        />
      ))}
    </FlexColumn>
  );
}
