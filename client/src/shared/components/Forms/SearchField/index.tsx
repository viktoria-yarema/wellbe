"use client";

import { TextFieldProps } from "@mui/material/TextField";
import React, { useState } from "react";
import { StyledIconWrapper, StyledTextField } from "./styled";
import SearchIcon from "@/shared/assets/icons/SearchIcon";

type Props = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  textFieldProps?: TextFieldProps;
};

export default function SearchField({
  value,
  onChange,
  placeholder,
  textFieldProps,
}: Props) {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    onChange(e.target.value);
  };

  return (
    <StyledTextField
      onChange={handleChange}
      value={searchValue}
      placeholder={placeholder}
      variant="filled"
      hiddenLabel
      size="small"
      InputProps={{
        startAdornment: (
          <StyledIconWrapper position="start">
            <SearchIcon />
          </StyledIconWrapper>
        ),
      }}
      {...textFieldProps}
      autoComplete="off"
    />
  );
}
