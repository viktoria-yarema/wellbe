"use client";
import {
  AppointmentStatus,
  AppointmentType,
} from "@/app/(entities)/appointment/types";
import TabPanel from "@/app/_components/TabPanel";
import { useState } from "react";
import { appointmentStatusLabels } from "../../(entities)/appointment/constants";
import AppointmentCard from "@/app/_components/AppointmentCard";

export default function SearchPage() {
  const [tab, setTab] = useState(AppointmentStatus.Approved);
  const appointmentExample: AppointmentType = {
    id: "test-id",
    companyName: "Emily beauty",
    status: AppointmentStatus.Pending, // This can be one of the statuses defined in the type
    serviceName: "Nails with cover and cleaning", // The service name
    staff: "Sophy Remkie", // The worker's name
    location: "Emily Nails studio", // The location or studio name
    date: new Date(
      "Sun Dec 17 2023 18:17:07 GMT+0100 (Central European Standard Time)"
    ), // The date of the appointment
    companyImg: "/mock.webp",
  };

  return (
    <div>
      <TabPanel<AppointmentStatus>
        tabs={appointmentStatusLabels}
        activeTab={tab}
        setActiveTab={setTab}
      />
      <AppointmentCard card={appointmentExample} />
    </div>
  );
}
