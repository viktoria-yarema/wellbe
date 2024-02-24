"use client";
import { Company } from "@/app/(entities)/company/types";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { COMPANY_CARD_HEIGH, COMPANY_CARD_WIDTH } from "./constants";
import FavoriteButton from "../Buttons/FavoriteButton";
import {
  StyledCompanyBottom,
  StyledCompanyCard,
  StyledFavorite,
  StyledRate,
} from "./styled";
import getStorageDownloadLink from "@/app/_global/getStorageDownloadLink";
import { useRouter } from "next/navigation";
import { COMPANY_DETAILS_PAGE_PATH } from "@/app/_global/routes";

type CompanyCardProps = {
  company: Company;
};

export default function CompanyCard({ company }: CompanyCardProps) {
  const router = useRouter();
  const { name, rate, opinion, pictureUrl, id } = company;
  const img = getStorageDownloadLink(pictureUrl);

  return (
    <StyledCompanyCard
      onClick={() => router.push(COMPANY_DETAILS_PAGE_PATH.replace("id", id))}
    >
      <Image
        src={img}
        alt={name}
        width={COMPANY_CARD_WIDTH}
        height={COMPANY_CARD_HEIGH}
      />
      <StyledCompanyBottom>
        <Typography variant="bodyMMedium">{name}</Typography>
      </StyledCompanyBottom>
      <StyledRate>
        <Typography variant="bodyMSemiBold">{rate.toFixed(2)}</Typography>
        <Typography variant="bodyXSRegular" color={"text.secondary"}>
          {opinion} reviews
        </Typography>
      </StyledRate>
      {/* <StyledFavorite>
        <FavoriteButton />
      </StyledFavorite> */}
    </StyledCompanyCard>
  );
}
