"use client";
import Avatar from "@/shared/components/Avatar";
import Typography from "@mui/material/Typography";
import FlexCenter from "@/shared/components/Layout/FlexCenter";
import ArrowUpwardIcon from "@/shared/assets/icons/ArrowUpwardIcon";
import { useRouter } from "next/navigation";
import { COLOR_SECONDARY_LIGHTEN } from "@/shared/theme/colors";
import { StyledCompanyButton } from "./styled";
import { COMPANY_DETAILS_PAGE_PATH } from "@/shared/global/routes";

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
  const path = COMPANY_DETAILS_PAGE_PATH.replace("id", companyId);

  const navigateToCompanyDetails = () => {
    return router.push(path);
  };

  return (
    <StyledCompanyButton onClick={navigateToCompanyDetails}>
      <Avatar src={companyImage} alt={"company-img"} size={"s"} />
      <Typography variant="bodyLRegular">{companyName}</Typography>
      <FlexCenter position={"absolute"} top={2} right={2}>
        <ArrowUpwardIcon color={COLOR_SECONDARY_LIGHTEN} />
      </FlexCenter>
    </StyledCompanyButton>
  );
};

export default CompanyButton;
