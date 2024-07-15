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
  secondaryButtonTitle?: string;
  primaryButtonTitle?: string;
};

export const ConfirmationPopup: FC<ConfirmationPopupProps> = ({
  title,
  description,
  open,
  onClose,
  onApply,
  isLoading,
  primaryButtonTitle,
  secondaryButtonTitle,
}) => {
  return (
    <StyledPopup open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{description}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <SecondaryButton
          title={secondaryButtonTitle ?? "Cancel"}
          onClick={onClose}
          fullWidth
        />
        <PrimaryButton
          title={primaryButtonTitle ?? "Apply"}
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
