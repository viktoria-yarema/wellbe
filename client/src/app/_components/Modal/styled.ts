import styled from "@emotion/styled";
import Dialog from "@mui/material/Dialog";
import FlexColumn from "../Layout/FlexColumn";
import { COLOR_SECONDARY_LIGHTEN, COLOR_WHITE } from "@/app/_theme/colors";

export const StyledModal = styled(Dialog, {
  shouldForwardProp: (prop) => prop !== "blurBackground",
})<{ blurBackground?: boolean }>`
  background-color: ${COLOR_WHITE};
  ${(props) =>
    props.blurBackground &&
    `
      .MuiBackdrop-root {
        background: ${COLOR_SECONDARY_LIGHTEN};
      }
      
      .MuiPaper-root {
        border-radius: 1rem;
        margin: 1rem;
        background: rgba(33, 33, 33, 0.7);
        backdrop-filter: blur(15px);
      }
    `}
`;

export const StyledModalContainer = styled(FlexColumn)`
  align-items: center;
  flex: 1 1 0;
  background: transparent;
  overflow-y: auto;
`;
