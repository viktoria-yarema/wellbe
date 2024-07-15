"use client";
import React from "react";
import Flex from "../Layout/Flex";
import { AppointmentStatus, AvailableTime } from "@/entities/appointment/types";
import StatusChip from "../StatusChip";
import Typography from "@mui/material/Typography";
import FlexColumn from "../Layout/FlexColumn";
import {
  StyledAppointmentCard,
  StyledArrowWrapper,
  StyledContent,
  StyledTimeBlock,
} from "./styled";
import { extractDateInfo } from "@/entities/appointment/utilities";
import ArrowUpwardIcon from "@/shared/assets/icons/ArrowUpwardIcon";
import { COLOR_TEXT_SECONDARY } from "@/shared/theme/colors";
import Avatar from "../Avatar";
import { useCompanyQuery } from "@/entities/company/queries/useCompanyQuery";
import PriceChip from "./components/PriceChip";

type AppointmentCardProps = {
  price: string;
  companyId: string;
  name: string;
  status?: AppointmentStatus;
  staff: string;
  availableTime?: AvailableTime | null;
  isVisiblePrice?: boolean;
  handleClick?: () => void;
};

export default function AppointmentCard({
  price,
  staff,
  status,
  availableTime,
  name,
  companyId,
  isVisiblePrice,
  handleClick,
}: AppointmentCardProps) {
  const date = availableTime && extractDateInfo(availableTime);
  const { data: company } = useCompanyQuery(companyId);

  return (
    <StyledAppointmentCard bgcolor={"card.main"} onClick={handleClick}>
      <StyledContent>
        {status && (
          <Flex>
            <StatusChip status={status} />
          </Flex>
        )}
        <FlexColumn>
          <Typography variant="bodyLMedium">{name}</Typography>
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
      </StyledContent>
      <StyledTimeBlock
        p={isVisiblePrice ? "1rem 1rem 0.75rem" : "1.5rem 1rem 0.75rem"}
      >
        {!isVisiblePrice && (
          <StyledArrowWrapper>
            <ArrowUpwardIcon color={COLOR_TEXT_SECONDARY} />
          </StyledArrowWrapper>
        )}
        {date ? (
          <>
            <Typography variant="bodyMSemiBold" color="text.primary">
              {date.monthAndWeek}
            </Typography>
            <Typography variant="bodyLSemiBold" color="text.primary">
              {date.day}
            </Typography>
            <Typography variant="bodyMRegular" color="text.secondary">
              {date.time}
            </Typography>
          </>
        ) : (
          <Typography variant="bodyMRegular" color="text.secondary">
            Not selected appointment time yet
          </Typography>
        )}
        {isVisiblePrice && <PriceChip price={price} />}
      </StyledTimeBlock>
    </StyledAppointmentCard>
  );
}
