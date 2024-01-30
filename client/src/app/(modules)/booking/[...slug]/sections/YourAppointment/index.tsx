"use client";

import AppointmentCard from "@/app/_components/AppointmentCard";
import FlexColumn from "@/app/_components/Layout/FlexColumn";
import Title from "../../components/Title";
import { useBookingStore } from "../../store/useBookingStore";
import { useEffect } from "react";

type YourAppointment = {
  companyId: string;
  serviceName: string;
  price: string;
  staff: string;
};

export default function YourAppointment({
  companyId,
  serviceName,
  staff,
  price,
}: YourAppointment) {
  const { selectedTime, setNewAppointment } = useBookingStore();

  useEffect(() => {
    if (selectedTime) {
      setNewAppointment({
        availableTime: selectedTime,
        companyId,
        price,
        staff,
        name: serviceName,
        currency: "USD",
      });
    }
  }, [selectedTime]);

  return (
    <FlexColumn rowGap={"0.5rem"}>
      <Title title={"Your appointment"} />
      <AppointmentCard
        isVisiblePrice
        appointmentDate={selectedTime}
        companyId={companyId}
        serviceName={serviceName}
        price={price}
        staff={staff}
      />
    </FlexColumn>
  );
}
