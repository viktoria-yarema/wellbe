"use client";
import { AppointmentStatus } from "@/app/(entities)/appointment/types";
import TabPanel from "@/app/_components/TabPanel";
import { Suspense, useState } from "react";
import { appointmentStatusLabels } from "../../(entities)/appointment/constants";
import AppointmentsList from "./components/AppointmentsList";

export default function SearchPage() {
  const [tab, setTab] = useState(AppointmentStatus.Approved);
  console.log("search page");
  return (
    <div>
      <TabPanel<AppointmentStatus>
        tabs={appointmentStatusLabels}
        activeTab={tab}
        setActiveTab={setTab}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <AppointmentsList />
      </Suspense>
    </div>
  );
}
