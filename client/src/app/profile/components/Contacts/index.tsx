import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import FlexColumn from "@/shared/components/Layout/FlexColumn";
import FlexCenter from "@/shared/components/Layout/FlexCenter";
import EmailIcon from "@/shared/assets/icons/EmailIcon";
import PhoneIcon from "@/shared/assets/icons/PhoneIcon";
import { COLOR_TEXT_SECONDARY } from "@/shared/theme/colors";
import { StyledContactWrapper } from "./styled";

type ContactsProps = {
  name: string;
  email: string;
  phone: string;
};

export default function Contacts({ name, email, phone }: ContactsProps) {
  return (
    <FlexColumn rowGap={"0.5rem"}>
      <Typography variant="bodyXLSemiBold">{name}</Typography>
      <StyledContactWrapper>
        <FlexCenter>
          <EmailIcon color={COLOR_TEXT_SECONDARY} />
        </FlexCenter>
        <Typography variant="bodyMSemiBold" color={COLOR_TEXT_SECONDARY}>
          Email:
        </Typography>
        <Link component={"a"} href={`mail:${email}`}>
          {email}
        </Link>
      </StyledContactWrapper>
      <StyledContactWrapper>
        <FlexCenter>
          <PhoneIcon color={COLOR_TEXT_SECONDARY} />
        </FlexCenter>
        <Typography variant="bodyMSemiBold" color={COLOR_TEXT_SECONDARY}>
          Phone:
        </Typography>
        <Link component={"a"} href={`tel:${phone}`}>
          {phone}
        </Link>
      </StyledContactWrapper>
    </FlexColumn>
  );
}
