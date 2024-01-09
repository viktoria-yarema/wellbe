"use client";
import { AppointmentStatus } from "@/app/(entities)/appointment/types";
import TabPanel from "@/app/_components/TabPanel";
import { Suspense, useEffect } from "react";
import { appointmentStatusLabels } from "../../(entities)/appointment/constants";
import AppointmentsList from "./components/AppointmentsList";
import FlexColumn from "@/app/_components/Layout/FlexColumn";
import { useRouter, usePathname } from "next/navigation";
import { useStore } from "zustand";
import { useSearchStore } from "./store/useSearchStore";

export default function SearchPage() {
  const { tab, setTab } = useStore(useSearchStore);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    router.push(pathname + `?status=${tab}`);
  }, [tab]);

  return (
    <FlexColumn rowGap={"1rem"}>
      <TabPanel<AppointmentStatus>
        tabs={appointmentStatusLabels}
        activeTab={tab}
        setActiveTab={setTab}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <AppointmentsList status={tab} />
      </Suspense>
    </FlexColumn>
  );
}
