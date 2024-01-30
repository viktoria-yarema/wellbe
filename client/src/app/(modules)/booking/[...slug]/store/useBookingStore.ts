"use client";

import { AvailableTime } from "@/app/(entities)/appointment/types";
import { CreateService } from "@/app/(entities)/services/types";
import { create } from "zustand";

type BookingStore = {
  newAppointment: null | CreateService;
  setNewAppointment: (appointment: null | CreateService) => void;
  selectedTime: AvailableTime | null;
  setSelectedTime: (time: AvailableTime | null) => void;
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
  resetSelectedTime: () => void;
};

export const useBookingStore = create<BookingStore>((set) => ({
  newAppointment: null,
  setNewAppointment: (appointment: null | CreateService) =>
    set({
      newAppointment: appointment,
    }),
  selectedDate: new Date(),
  setSelectedDate: (selectedDate: Date) =>
    set({
      selectedDate,
    }),
  selectedTime: null,
  setSelectedTime: (time: AvailableTime | null) =>
    set({
      selectedTime: time,
    }),
  resetSelectedTime: () =>
    set({
      selectedTime: null,
    }),
}));
