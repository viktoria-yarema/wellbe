import { Company } from "@/app/(entities)/company/types";
import Header from "@/app/_components/Header";
import FlexColumn from "@/app/_components/Layout/FlexColumn";
import getStorageDownloadLink from "@/app/_global/getStorageDownloadLink";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { StyledCompanyHeading } from "./styled";
import FavoriteIcon from "@/app/_assets/icons/FavoriteIcon";
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
    <FlexColumn width={"100%"} position={"relative"}>
      <StyledCompanyHeading>
        <Header>
          <StyledIconWrapper>
            {/* <FavoriteIcon /> */}
            <FavoriteOutlinedIcon />
          </StyledIconWrapper>
        </Header>
        <Image src={img} alt={"company"} width={500} height={180} />
      </StyledCompanyHeading>
      <FlexColumn mt={"180px"}>
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
