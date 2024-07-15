"use client";
import { useAppointments } from "@/entities/appointment/queries/useAppointments";
import { AppointmentStatus } from "@/entities/appointment/types";
import { useUserStore } from "@/entities/user/store/useUserStore";
import AppointmentCard from "@/shared/components/AppointmentCard";
import FlexColumn from "@/shared/components/Layout/FlexColumn";
import { useRouter } from "next/navigation";
import { EmptyBookedList } from "./empty";
import { LoadingBookedList } from "./loading";

type AppointmentsListProps = {
  status: AppointmentStatus[];
};

export default function AppointmentsList({ status }: AppointmentsListProps) {
  const router = useRouter();
  const { user } = useUserStore();
  const { data: appointments, isLoading } = useAppointments({
    status,
    userId: user?.id,
  });

  const handleAppointmentClick = (id: string) =>
    router.push(`/appointment/${id}/${user?.id}`);

  return (
    <FlexColumn rowGap={"1rem"}>
      {isLoading && <LoadingBookedList />}

      {appointments?.map((item) => (
        <AppointmentCard
          key={item.id}
          {...item}
          handleClick={() => handleAppointmentClick(item.id)}
        />
      ))}
      {!appointments?.length && !isLoading && <EmptyBookedList />}
    </FlexColumn>
  );
}
