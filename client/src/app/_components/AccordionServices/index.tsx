"use client";
import { ModifiedGroupServices } from "@/app/(entities)/services/types";
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
import ArrowIcon from "@/app/_assets/icons/ArrowIcon";
import { Divider } from "@mui/material";
import PrimaryButton from "../Buttons/PrimaryButton";

type AccordionServicesProps = {
  servicesGroups: ModifiedGroupServices[];
  handleAction: (serviceId: string) => void;
};

export default function AccordionServices({
  servicesGroups,
  handleAction,
}: AccordionServicesProps) {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => {
    const openedValue = panel === expanded ? false : panel;

    setExpanded(openedValue);
  };

  const handleBook = (
    event: React.MouseEvent<HTMLElement>,
    serviceId: string
  ) => {
    event.stopPropagation();
    handleAction(serviceId);
  };

  return (
    <FlexColumn rowGap={"1rem"}>
      {servicesGroups?.map((group, index) => (
        <StyledAccordion
          expanded={expanded === group.id || index === 0}
          onClick={() => handleChange(group.id)}
          key={group.id}
          elevation={0}
          defaultExpanded={index === 0}
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
              <div key={service.id}>
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
                    {service.duration}
                  </Typography>
                  <Typography variant="bodyMSemiBold">
                    ${Number(service.price).toFixed(2)}
                  </Typography>
                  <PrimaryButton
                    title={"Book"}
                    size="small"
                    onClick={(e) => handleBook(e, service.id)}
                  />
                </StyledAccordionContent>
              </div>
            ))}
          </AccordionDetails>
        </StyledAccordion>
      ))}
    </FlexColumn>
  );
}
