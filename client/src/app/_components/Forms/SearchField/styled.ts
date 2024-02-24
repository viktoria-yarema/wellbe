import {
  COLOR_SECONDARY,
  COLOR_TEXT_SECONDARY,
  COLOR_WHITE,
} from "@/app/_theme/colors";
import styled from "@emotion/styled";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

export const StyledTextField = styled(TextField)`
  .MuiInputBase-root {
    border-radius: 0;
    min-width: 200px;
    height: 40px;
    border-radius: 0.5rem;
    background-color: ${COLOR_WHITE} !important;
    color: ${COLOR_SECONDARY};

    &::before {
      display: none;
    }

    &:after {
      border-bottom: 0;
    }
  }
`;

export const StyledIconWrapper = styled(InputAdornment)`
  svg > path {
    fill: ${COLOR_SECONDARY};
  }
`;
