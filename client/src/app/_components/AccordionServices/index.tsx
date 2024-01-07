"use client";
import { GroupServices } from "@/app/(entities)/services/types";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import FlexColumn from "../Layout/FlexColumn";
import {
  StyledAccordion,
  StyledAccordionContent,
  StyledAccordionHeading,
  StyledArrow,
} from "./styled";
import Divider from "@mui/material/Divider";
import ArrowIcon from "@/app/_assets/icons/ArrowIcon";
import PrimaryButton from "../Buttons/PrimaryButton";

type AccordionServicesProps = {
  servicesGroups: GroupServices[];
};

export default function AccordionServices({
  servicesGroups,
}: AccordionServicesProps) {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => {
    const openedValue = panel === expanded ? false : panel;

    setExpanded(openedValue);
  };

  const handleBook = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
  };

  return (
    <FlexColumn rowGap={"1rem"}>
      {servicesGroups?.map((group) => (
        <StyledAccordion
          expanded={expanded === group.id}
          onClick={() => handleChange(group.id)}
          key={group.id}
          elevation={0}
        >
          <StyledAccordionHeading
            id={group.id}
            aria-controls={`${group.id}-content`}
          >
            <Typography variant="bodyLSemiBold">{group.name}</Typography>
            <StyledArrow opened={expanded === group.id}>
              <ArrowIcon color="text.primary" />
            </StyledArrow>
          </StyledAccordionHeading>
          <AccordionDetails
            data-visible={expanded === group.id}
            sx={{ padding: 0 }}
          >
            {group.services.map((service) => (
              <>
                <Divider />
                <StyledAccordionContent key={service.id}>
                  <Typography variant="bodyMRegular" noWrap>
                    {service.name}
                  </Typography>
                  <Typography
                    variant="bodyXSRegular"
                    color={"text.secondary"}
                    noWrap
                  >
                    {service.timestamp}
                  </Typography>
                  <Typography variant="bodyMSemiBold">
                    ${Number(service.price).toFixed()}
                  </Typography>
                  <PrimaryButton
                    title={"Book"}
                    size="small"
                    onClick={handleBook}
                  />
                </StyledAccordionContent>
              </>
            ))}
          </AccordionDetails>
        </StyledAccordion>
      ))}
    </FlexColumn>
  );
}
