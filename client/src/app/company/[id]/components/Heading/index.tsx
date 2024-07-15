import { Company } from "@/entities/company/types";
import Header from "@/shared/components/Header";
import FlexColumn from "@/shared/components/Layout/FlexColumn";
import getStorageDownloadLink from "@/shared/global/getStorageDownloadLink";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { StyledCompanyHeading, StyledHeaderWrapper } from "./styled";

type HeadingProps = {
  company: Pick<
    Company,
    "name" | "shortDescription" | "pictureUrl" | "location"
  >;
};

export default function Heading({ company }: HeadingProps) {
  const img = getStorageDownloadLink(company.pictureUrl);

  return (
    <FlexColumn rowGap={"1rem"}>
      <StyledCompanyHeading>
        <StyledHeaderWrapper>
          <Header />
        </StyledHeaderWrapper>
        <Image
          src={img}
          alt={"company"}
          loading="eager"
          width={360}
          height={180}
        />
      </StyledCompanyHeading>
      <FlexColumn p={"0 1rem"}>
        <Typography variant="heading4Bold">{company.name}</Typography>
        <Typography variant="bodyMRegular" color={"text.secondary"}>
          {company.shortDescription}
        </Typography>
        {/* <Typography
          variant="bodyMRegular"
          color={"primary.main"}
          sx={{ textDecoration: "underline" }}
        >
          {company.location}
        </Typography> */}
      </FlexColumn>
    </FlexColumn>
  );
}
