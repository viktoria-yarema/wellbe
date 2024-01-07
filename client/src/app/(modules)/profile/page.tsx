"use client";
import { useUserStore } from "@/app/(entities)/user/store/useUserStore";
import PrimaryButton from "@/app/_components/Buttons/PrimaryButton";
import FlexColumn from "@/app/_components/Layout/FlexColumn";
import { auth } from "@/app/firebase";
import Typography from "@mui/material/Typography";
import { signOut } from "firebase/auth";

export default function ProfilePage() {
  const { user } = useUserStore();

  const onSignOut = () => {
    signOut(auth);
  };

  return (
    <FlexColumn rowGap={"1rem"}>
      <Typography variant="heading4">Hello, {user?.email} </Typography>
      <PrimaryButton title="Log out" onClick={onSignOut} />
    </FlexColumn>
  );
}
