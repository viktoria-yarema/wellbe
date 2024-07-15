"use client";

import AppointmentCard from "@/shared/components/AppointmentCard";
import FlexColumn from "@/shared/components/Layout/FlexColumn";
import Title from "../../components/Title";
import { useChangeAppointmentStore } from "../../store/useChangeAppointmentStore";
import { AppointmentType } from "@/entities/appointment/types";
import { useEffect } from "react";

type YourAppointment = {
  appointment: AppointmentType;
};

export default function YourAppointment({ appointment }: YourAppointment) {
  const { selectedTime, setUpdateAppointment, setSelectedTime } =
    useChangeAppointmentStore();

  useEffect(() => {
    if (appointment.availableTime) {
      setUpdateAppointment(appointment);
    }
  }, []);

  return (
    <FlexColumn rowGap={"0.5rem"}>
      <Title title={"Your appointment"} />
      <AppointmentCard
        isVisiblePrice
        {...appointment}
        availableTime={selectedTime}
      />
    </FlexColumn>
  );
}
