"use client";

import FlexColumn from "@/shared/components/Layout/FlexColumn";
import SignUp from "./views/SignUp";
import { useState } from "react";
import { ToggleAuthMethodEnum } from "./components/ToggleAuthMethod/types";
import ToggleAuthMethod from "./components/ToggleAuthMethod";
import Typography from "@mui/material/Typography";
import Title from "./components/Title";
import LogIn from "./views/LogIn";

export default function AuthLayout() {
  const [authMethod, setAuthMethod] = useState(ToggleAuthMethodEnum.LOG_IN);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    method: ToggleAuthMethodEnum,
  ) => {
    setAuthMethod(method ?? ToggleAuthMethodEnum.LOG_IN);
  };

  const headingTitle = {
    [ToggleAuthMethodEnum.SIGN_UP]: "Let’s create your Wellbe account 😎",
    [ToggleAuthMethodEnum.LOG_IN]: "Welcome back to Wellbe 🤗",
  };
  return (
    <FlexColumn
      p={"1rem"}
      alignItems={"center"}
      width={"100%"}
      justifyContent={"space-between"}
    >
      <FlexColumn rowGap={"0.5rem"} alignItems={"center"} mb="6rem">
        <Typography variant="bodyLRegular" color="secondary.light">
          Choose your authentication method
        </Typography>
        <ToggleAuthMethod value={authMethod} handleChange={handleChange} />
      </FlexColumn>
      <FlexColumn rowGap={"3rem"} width={"100%"}>
        <Title title={headingTitle[authMethod]} />
        {authMethod === ToggleAuthMethodEnum.SIGN_UP && <SignUp />}
        {authMethod === ToggleAuthMethodEnum.LOG_IN && <LogIn />}
      </FlexColumn>
    </FlexColumn>
  );
}
