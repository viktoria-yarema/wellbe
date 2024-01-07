import PrimaryButton from "@/app/_components/Buttons/PrimaryButton";
import SecondaryButton from "@/app/_components/Buttons/SecondaryButton";
import { StyledActionsBar } from "./styled";
import { AppointmentStatus } from "@/app/(entities)/appointment/types";
import { actionTitlesByStatus } from "./utils";

type ActionBar = {
  status: AppointmentStatus;
};

export default function ActionBar({ status }: ActionBar) {
  const title = actionTitlesByStatus[status];

  if (status === AppointmentStatus.Canceled) {
    return null;
  }

  return (
    <StyledActionsBar>
      <SecondaryButton title="Cancel" />
      <PrimaryButton title={title} />
    </StyledActionsBar>
  );
}
