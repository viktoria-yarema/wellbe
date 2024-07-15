import Link from "@mui/material/Link";
import { SocialMedia, SocialMediaVariant } from "@/entities/company/types";
import FacebookIcon from "@/shared/assets/socialMediaIcons/FacebookIcon";
import InstagramIcon from "@/shared/assets/socialMediaIcons/InstagramIcon";
import TiktokIcon from "@/shared/assets/socialMediaIcons/TiktokIcon";
import FlexCenter from "../Layout/FlexCenter";
import { Typography } from "@mui/material";

type SocialMediaLinkProps = {
  socialMedia: SocialMedia;
};

export default function SocialMediaLink({ socialMedia }: SocialMediaLinkProps) {
  const socialMediasMap = {
    [SocialMediaVariant.FACEBOOK]: {
      Icon: <FacebookIcon />,
      label: "Facebook",
    },
    [SocialMediaVariant.INSTAGRAM]: {
      Icon: <InstagramIcon />,
      label: "Instagram",
    },
    [SocialMediaVariant.TIK_TOK]: { Icon: <TiktokIcon />, label: "TikTok" },
    [SocialMediaVariant.WHATS_APP]: { Icon: <TiktokIcon />, label: "TikTok" },
    [SocialMediaVariant.TELEGRAM]: { Icon: <TiktokIcon />, label: "TikTok" },
  };

  const { Icon, label } = socialMediasMap[socialMedia.type];

  return (
    <Link
      component={"a"}
      href={socialMedia.link}
      target="_blank"
      sx={{ textDecoration: "unset" }}
      color={"text.primary"}
    >
      <FlexCenter width={38} height={38}>
        {Icon}
      </FlexCenter>
      <Typography variant="bodyXSRegular" color={"text.secondary"}>
        {label}
      </Typography>
    </Link>
  );
}
