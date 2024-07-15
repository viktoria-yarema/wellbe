import { DialogProps } from "@mui/material/Dialog/Dialog";
import React, { FC } from "react";
import { StyledModal, StyledModalContainer } from "./styled";

interface ModalProps extends DialogProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  fullScreen?: boolean;
  blurBackground?: boolean;
}

const Modal: FC<ModalProps> = ({
  open,
  onClose,
  children,
  className,
  fullScreen = true,
  blurBackground,
  ...props
}) => (
  <StyledModal
    {...props}
    fullScreen={fullScreen}
    open={open}
    onClose={onClose}
    blurBackground={blurBackground}
  >
    <StyledModalContainer
      className={className}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </StyledModalContainer>
  </StyledModal>
);

export default Modal;
