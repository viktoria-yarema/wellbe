import { Company } from "@/app/(entities)/company/types";
import Header from "@/app/_components/Header";
import FlexColumn from "@/app/_components/Layout/FlexColumn";
import getStorageDownloadLink from "@/app/_global/getStorageDownloadLink";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { StyledCompanyHeading, StyledHeaderWrapper } from "./styled";
import { StyledIconWrapper } from "@/app/_components/Header/styled";
import FavoriteOutlinedIcon from "@/app/_assets/icons/FavoriteOutlinedIcon";

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
          <Header>
            {/* <StyledIconWrapper> */}
            {/* <FavoriteIcon /> */}
            {/* <FavoriteOutlinedIcon /> */}
            {/* </StyledIconWrapper> */}
          </Header>
        </StyledHeaderWrapper>
        <Image src={img} alt={"company"} width={360} height={180} />
      </StyledCompanyHeading>
      <FlexColumn p={"0 1rem"}>
        <Typography variant="heading4Bold">{company.name}</Typography>
        <Typography variant="bodyMRegular" color={"text.secondary"}>
          {company.shortDescription}
        </Typography>
        <Typography
          variant="bodyMRegular"
          color={"primary.main"}
          sx={{ textDecoration: "underline" }}
        >
          {company.location}
        </Typography>
      </FlexColumn>
    </FlexColumn>
  );
}
