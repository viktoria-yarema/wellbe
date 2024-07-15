import { FC, ReactNode } from "react";
import { StyledModalContent } from "./styled";

type ModalContentProps = {
  children: ReactNode;
  className?: string;
};

const ModalContent: FC<ModalContentProps> = (props) => {
  return (
    <StyledModalContent className={props.className}>
      {props.children}
    </StyledModalContent>
  );
};

export default ModalContent;
