"use client";

import { AppointmentStatus } from "@/entities/appointment/types";
import TabPanel from "@/shared/components/TabPanel";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import AppointmentsList from "@/shared/components/AppointmentsList";
import PageContainer from "@/shared/components/PageContainer";
import { appointmentStatusLabels } from "@/entities/appointment/constants";

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
