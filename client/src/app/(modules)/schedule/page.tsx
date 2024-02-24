"use client";

import { AppointmentStatus } from "@/app/(entities)/appointment/types";
import TabPanel from "@/app/_components/TabPanel";
import { appointmentStatusLabels } from "../../(entities)/appointment/constants";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import AppointmentsList from "@/app/_components/AppointmentsList";
import PageContainer from "@/app/_components/PageContainer";

export default function SchedulePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const tab = searchParams.get("status") as AppointmentStatus;

  const onChangeTab = (selectedTab: string) =>
    router.push(pathname + `?status=${selectedTab}`);

  return (
    <PageContainer>
      <TabPanel<AppointmentStatus>
        tabs={appointmentStatusLabels}
        activeTab={tab}
        setActiveTab={(val) => onChangeTab(val)}
      />
      <AppointmentsList status={[tab]} />
    </PageContainer>
  );
}
