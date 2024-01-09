"use client";
import Avatar from "@/app/_components/Avatar";
import Typography from "@mui/material/Typography";
import FlexCenter from "@/app/_components/Layout/FlexCenter";
import ArrowUpwardIcon from "@/app/_assets/icons/ArrowUpwardIcon";
import getStorageDownloadLink from "@/app/_global/getStorageDownloadLink";
import { useRouter } from "next/navigation";
import { COLOR_SECONDARY_LIGHTEN } from "@/app/_theme/colors";
import { StyledCompanyButton } from "./styled";
import { COMPANY_DETAILS_PAGE_PATH } from "@/app/_global/routes";

type CompanyButtonProps = {
  companyImage: string;
  companyName: string;
  companyId: string;
};

const CompanyButton = ({
  companyImage,
  companyId,
  companyName,
}: CompanyButtonProps) => {
  const router = useRouter();
  const img = getStorageDownloadLink(companyImage);
  const path = COMPANY_DETAILS_PAGE_PATH.replace("id", companyId);

  const navigateToCompanyDetails = () => {
    return router.push(path);
  };

  return (
    <StyledCompanyButton onClick={navigateToCompanyDetails}>
      <Avatar src={img} alt={"company-img"} size={"s"} />
      <Typography variant="bodyLRegular">{companyName}</Typography>
      <FlexCenter position={"absolute"} top={2} right={2}>
        <ArrowUpwardIcon color={COLOR_SECONDARY_LIGHTEN} />
      </FlexCenter>
    </StyledCompanyButton>
  );
};

export default CompanyButton;
