import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import FlexColumn from "@/app/_components/Layout/FlexColumn";
import FlexCenter from "@/app/_components/Layout/FlexCenter";
import EmailIcon from "@/app/_assets/icons/EmailIcon";
import PhoneIcon from "@/app/_assets/icons/PhoneIcon";
import { COLOR_TEXT_SECONDARY } from "@/app/_theme/colors";
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
