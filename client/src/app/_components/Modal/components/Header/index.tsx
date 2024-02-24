import Typography from "@mui/material/Typography";
import { FC, ReactNode } from "react";
import { StyledHeader, StyledIconButton, StyledModalHeader } from "./styled";
import CloseIcon from "@/app/_assets/icons/CloseIcon";

type ModalHeaderProps = {
  title?: string;
  onClose?: () => void;
  children?: ReactNode;
};

const ModalHeader: FC<ModalHeaderProps> = ({ children, onClose, title }) => (
  <StyledModalHeader>
    <StyledHeader>
      <Typography variant="bodyXLRegular">{title}</Typography>
      <StyledIconButton onClick={onClose}>
        <CloseIcon />
      </StyledIconButton>
    </StyledHeader>
    {children}
  </StyledModalHeader>
);

export default ModalHeader;
