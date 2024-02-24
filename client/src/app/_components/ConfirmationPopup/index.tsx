"use client";

import { FC } from "react";
import { StyledPopup } from "./styled";
import DialogActions from "@mui/material/DialogActions";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import PrimaryButton from "../Buttons/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton";

type ConfirmationPopupProps = {
  title?: string;
  description?: string;
  open: boolean;
  onClose: () => void;
  onApply: () => void;
  isLoading?: boolean;
};

export const ConfirmationPopup: FC<ConfirmationPopupProps> = ({
  title,
  description,
  open,
  onClose,
  onApply,
  isLoading,
}) => {
  return (
    <StyledPopup open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{description}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <SecondaryButton title="Cancel" onClick={onClose} fullWidth />
        <PrimaryButton
          title="Apply"
          onClick={onApply}
          fullWidth
          loading={isLoading}
          size="large"
        />
      </DialogActions>
    </StyledPopup>
  );
};

export default ConfirmationPopup;
