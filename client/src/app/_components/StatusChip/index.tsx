import React from "react";
import { AppointmentStatus } from "@/app/(entities)/appointment/types";
import Typography from "@mui/material/Typography";
import { statusColors } from "./constants";
import { appointmentStatusLabels } from "@/app/(entities)/appointment/constants";
import FlexCenter from "../Layout/FlexCenter";

type AppointmentCardProps = {
  status: AppointmentStatus;
  size?: "large" | "medium" | "small";
};

export default function StatusChip({ status, size }: AppointmentCardProps) {
  const color = statusColors[status];
  const title =
    appointmentStatusLabels.find((item) => item.value === status)?.label ?? "";
  const chipWidth = size === "large" ? "130px" : "auto";
  const fontSize = size === "large" ? "bodyMRegular" : "bodySRegular";

  return (
    <FlexCenter
      bgcolor={color}
      p={"4px 16px"}
      borderRadius={"18px"}
      width={chipWidth}
    >
      <Typography
        variant={fontSize}
        color={
          status === AppointmentStatus.Canceled ||
          status === AppointmentStatus.RequestToChangeDate
            ? "background.default"
            : "text.primary"
        }
      >
        {title}
      </Typography>
    </FlexCenter>
  );
}
