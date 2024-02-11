"use client";
import { useAppointments } from "@/app/(entities)/appointment/queries/useAppointments";
import { AppointmentStatus } from "@/app/(entities)/appointment/types";
import { useUserStore } from "@/app/(entities)/user/store/useUserStore";
import AppointmentCard from "@/app/_components/AppointmentCard";
import FlexColumn from "@/app/_components/Layout/FlexColumn";
import { useRouter } from "next/navigation";

type AppointmentsListProps = {
  status: AppointmentStatus;
};

export default function AppointmentsList({ status }: AppointmentsListProps) {
  const router = useRouter();
  const { user } = useUserStore();
  const { data: appointments } = useAppointments({ status, userId: user?.id });
  const handleAppointmentClick = (id: string) =>
    router.push(`/appointment/${id}/${user?.id}`);

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
