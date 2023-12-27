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

type CompanyCardProps = {
  company: Company;
};

export default function CompanyCard({ company }: CompanyCardProps) {
  const { name, rate, opinion } = company;

  return (
    <StyledCompanyCard>
      <Image
        src={"/mock.webp"}
        alt={name}
        width={COMPANY_CARD_WIDTH}
        height={COMPANY_CARD_HEIGH}
      />
      <StyledCompanyBottom>
        <Typography variant="bodyMRegular">{name}</Typography>
      </StyledCompanyBottom>
      <StyledRate>
        <Typography variant="bodyMSemiBold">{rate}</Typography>
        <Typography variant="bodyXSRegular" color={"text.secondary"}>
          {opinion} reviews
        </Typography>
      </StyledRate>
      <StyledFavorite>
        <FavoriteButton />
      </StyledFavorite>
    </StyledCompanyCard>
  );
}
