"use client";

import {
  AppointmentType,
  AvailableTime,
} from "@/app/(entities)/appointment/types";
import { create } from "zustand";

type ChangeAppointmentStore = {
  updateAppointment: null | AppointmentType;
  setUpdateAppointment: (appointment: null | AppointmentType) => void;
  selectedTime: AvailableTime | null;
  setSelectedTime: (time: AvailableTime | null) => void;
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
  resetSelectedTime: () => void;
};

export const useChangeAppointmentStore = create<ChangeAppointmentStore>(
  (set) => ({
    updateAppointment: null,
    setUpdateAppointment: (updateAppointment: null | AppointmentType) =>
      set({
        updateAppointment,
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
  })
);
