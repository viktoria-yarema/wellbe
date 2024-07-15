import FlexColumn from "@/shared/components/Layout/FlexColumn";
import { Company } from "@/entities/company/types";
import Contacts from "./sections/Contacts";
import About from "./sections/About";
import Schedule from "./sections/Schedule";

type GeneralProps = {
  company: Company;
};

export default function General({ company }: GeneralProps) {
  return (
    <FlexColumn rowGap={"1rem"}>
      <Schedule schedule={company.schedule} />
      <Contacts
        phone={company.phone}
        extraPhones={company.extraPhones}
        socialMedia={company.socialMedia}
      />
      <About description={company.about} />
    </FlexColumn>
  );
}
