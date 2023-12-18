"use client";
import React from "react";
import Flex from "../Layout/Flex";
import { AppointmentType } from "@/app/(entities)/appointment/types";
import StatusChip from "./components/StatusChip";
import { Typography } from "@mui/material";
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

type AppointmentCardProps = {
  card: AppointmentType;
};

export default function AppointmentCard({ card }: AppointmentCardProps) {
  const { companyName, serviceName, status, staff, date, companyImg, id } =
    card;
  const { monthAndWeek, day, time } = extractDateInfo(date);

  const router = useRouter();

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
          <Typography variant="bodyMMedium">{serviceName}</Typography>
          <Typography variant="bodySRegular" color="secondary.light">
            Staff: {staff}
          </Typography>
        </FlexColumn>
        <Flex columnGap={"0.5rem"} alignContent={"center"}>
          <Avatar src={companyImg} alt={companyName} size={"xs"} />
          <Typography variant="bodyMMedium" color="secondary.main">
            {companyName}
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
