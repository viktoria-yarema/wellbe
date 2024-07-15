"use client";

import AppointmentCard from "@/shared/components/AppointmentCard";
import FlexColumn from "@/shared/components/Layout/FlexColumn";
import Title from "../../components/Title";
import { useBookingStore } from "../../store/useBookingStore";
import { useEffect } from "react";

type YourAppointment = {
  companyId: string;
  serviceName: string;
  price: string;
  staff: string;
  serviceId: string;
};

export default function YourAppointment({
  companyId,
  serviceName,
  staff,
  price,
  serviceId,
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
        serviceId,
      });
    }
  }, [selectedTime]);

  return (
    <FlexColumn rowGap={"0.5rem"}>
      <Title title={"Your appointment"} />
      <AppointmentCard
        isVisiblePrice
        availableTime={selectedTime}
        companyId={companyId}
        name={serviceName}
        price={price}
        staff={staff}
      />
    </FlexColumn>
  );
}
