import React from "react";
import { AppointmentStatus } from "@/app/(entities)/appointment/types";
import Flex from "@/app/_components/Layout/Flex";
import { Typography } from "@mui/material";
import { statusColors } from "./constants";
import { appointmentStatusLabels } from "@/app/(entities)/appointment/constants";

type AppointmentCardProps = {
  status: AppointmentStatus;
};

export default function StatusChip({ status }: AppointmentCardProps) {
  const color = statusColors[status];
  const title =
    appointmentStatusLabels.find((item) => item.value === status)?.label ?? "";

  return (
    <Flex bgcolor={color} p={"4px 16px"} borderRadius={"18px"}>
      <Typography
        variant="bodySRegular"
        color={
          status === AppointmentStatus.Canceled ||  status === AppointmentStatus.RequestToChangeDate 
            ? "background.default"
            : "text.primary"
        }
      >
        {title}
      </Typography>
    </Flex>
  );
}
