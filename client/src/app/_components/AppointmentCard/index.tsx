"use client";
import React from "react";
import Flex from "../Layout/Flex";
import { AppointmentType } from "@/app/(entities)/appointment/types";
import StatusChip from "../StatusChip";
import Typography from "@mui/material/Typography";
import FlexColumn from "../Layout/FlexColumn";
import {
  StyledAppointmentCard,
  StyledArrowWrapper,
  StyledTimeBlock,
} from "./styled";
import { extractDateInfo } from "@/app/(entities)/appointment/utilities";
import ArrowUpwardIcon from "@/app/_assets/icons/ArrowUpwardIcon";
import { COLOR_TEXT_SECONDARY } from "@/app/_theme/colors";
import Avatar from "../Avatar";
import { useRouter } from "next/navigation";
import getStorageDownloadLink from "@/app/_global/getStorageDownloadLink";
import { useCompanyQuery } from "@/app/(entities)/company/queries/useCompanyQuery";

type AppointmentCardProps = {
  card: AppointmentType;
};

export default function AppointmentCard({ card }: AppointmentCardProps) {
  const { serviceName, status, staff, appointmentDate, id, companyId } = card;
  const { monthAndWeek, day, time } = extractDateInfo(appointmentDate);
  const router = useRouter();

  const { data: company } = useCompanyQuery(companyId);

  return (
    <StyledAppointmentCard
      bgcolor={"card.main"}
      onClick={() => router.push(`/appointment/${id}`)}
    >
      <FlexColumn rowGap={"0.5rem"} p="0.75rem 1rem">
        <Flex>
          <StatusChip status={status} />
        </Flex>
        <FlexColumn>
          <Typography variant="bodyLMedium">{serviceName}</Typography>
          <Typography variant="bodyMRegular" color="secondary.light">
            Staff: {staff}
          </Typography>
        </FlexColumn>
        <Flex columnGap={"0.5rem"} alignContent={"center"}>
          {company?.pictureUrl && (
            <Avatar
              src={company?.pictureUrl}
              alt={company?.name ?? "avatar"}
              size={"xs"}
            />
          )}
          <Typography variant="bodyMMedium" color="secondary.main">
            {company?.name}
          </Typography>
        </Flex>
      </FlexColumn>
      <StyledTimeBlock>
        <StyledArrowWrapper>
          <ArrowUpwardIcon color={COLOR_TEXT_SECONDARY} />
        </StyledArrowWrapper>
        <Typography variant="bodyMRegular" color="text.primary">
          {monthAndWeek}
        </Typography>
        <Typography variant="bodyMSemiBold" color="text.primary">
          {day}
        </Typography>
        <Typography variant="bodyMRegular" color="text.secondary">
          {time}
        </Typography>
      </StyledTimeBlock>
    </StyledAppointmentCard>
  );
}
