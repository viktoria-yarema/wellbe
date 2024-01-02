import PrimaryButton from "@/app/_components/Buttons/PrimaryButton";
import SecondaryButton from "@/app/_components/Buttons/SecondaryButton";
import { StyledActionsBar } from "./styled";

export function ActionBar() {
  return (
    <StyledActionsBar>
      <SecondaryButton title="Change" />
      <PrimaryButton title={"Approve"} />
    </StyledActionsBar>
  );
}
