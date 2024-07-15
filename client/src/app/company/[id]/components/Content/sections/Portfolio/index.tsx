import { type Portfolio } from "@/entities/company/types";
import FlexColumn from "@/shared/components/Layout/FlexColumn";
import getStorageDownloadLink from "@/shared/global/getStorageDownloadLink";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { StyledImgCard, StyledTitle } from "./styled";

type PortfolioProps = {
  portfolioImages: Portfolio[];
};

export default function Portfolio({ portfolioImages }: PortfolioProps) {
  return (
    <StyledImgCard flexWrap={"wrap"}>
      {portfolioImages.map(({ url, title }) => (
        <FlexColumn position={"relative"}>
          <Image
            src={getStorageDownloadLink(url)}
            alt={title ?? "portfolio"}
            width={180}
            height={210}
          />
          {title && (
            <StyledTitle>
              <Typography variant="bodySMedium">{title}</Typography>
            </StyledTitle>
          )}
        </FlexColumn>
      ))}
    </StyledImgCard>
  );
}
