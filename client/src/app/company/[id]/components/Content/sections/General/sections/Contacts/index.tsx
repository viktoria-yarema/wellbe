import FlexColumn from "@/shared/components/Layout/FlexColumn";
import Flex from "@/shared/components/Layout/Flex";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { SocialMedia } from "@/entities/company/types";
import Title from "../../../../../Title";
import SocialMediaLink from "@/shared/components/SocialMediaLink";

type GeneralProps = {
  phone: string;
  extraPhones?: string[];
  socialMedia?: SocialMedia[];
};

export default function Contacts({
  phone,
  extraPhones,
  socialMedia,
}: GeneralProps) {
  return (
    <FlexColumn rowGap={"0.5rem"}>
      <Title title={"Contacts"} />
      <FlexColumn rowGap={"1rem"}>
        <Flex justifyContent={"space-between"}>
          <Typography variant="bodyMMedium" color={"text.secondary"}>
            Phone
          </Typography>
          <FlexColumn rowGap={"0.5rem"}>
            <Link
              component={"a"}
              href={`tel:${phone}`}
              sx={{ fontSize: "14px" }}
            >
              {phone}
            </Link>
            {extraPhones?.map((phone) => (
              <Link
                component={"a"}
                href={`tel:${phone}`}
                sx={{ fontSize: "14px" }}
              >
                {phone}
              </Link>
            ))}
          </FlexColumn>
        </Flex>
        <FlexColumn rowGap={"0.75rem"}>
          <Typography variant="bodyMMedium" color={"text.secondary"}>
            Social medias
          </Typography>
          <Flex columnGap={"1rem"}>
            {socialMedia?.map((media) => (
              <SocialMediaLink socialMedia={media} key={media.type} />
            ))}
          </Flex>
        </FlexColumn>
      </FlexColumn>
    </FlexColumn>
  );
}
