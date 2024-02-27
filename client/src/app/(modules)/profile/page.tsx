"use client";
import { useUserStore } from "@/app/(entities)/user/store/useUserStore";
import LogOutIcon from "@/app/_assets/icons/LogOutIcon";
import PrimaryButton from "@/app/_components/Buttons/PrimaryButton";
import { COLOR_SECONDARY } from "@/app/_theme/colors";
import { auth } from "@/app/firebase";
import { signOut } from "firebase/auth";
import Avatar from "@/app/_components/Avatar";
import Flex from "@/app/_components/Layout/Flex";
import Contacts from "./components/Contacts";
import { StyledProfileContainer } from "./styled";
import Divider from "@/app/_components/Divider";
import FlexColumn from "@/app/_components/Layout/FlexColumn";

export default function ProfilePage() {
  const { user, cleanUser } = useUserStore();

  const onSignOut = () => {
    signOut(auth);
    cleanUser();
  };

  if (!user) {
    return null;
  }

  return (
    <StyledProfileContainer>
      <FlexColumn rowGap={"2rem"}>
        <Flex columnGap={"1rem"}>
          <Avatar alt={user.name} size={"l"} name={user.name} />
          <Contacts
            name={user.name}
            email={user.email}
            phone={user.phoneNumber}
          />
        </Flex>
        <Divider />
      </FlexColumn>
      <PrimaryButton
        title="Log out"
        onClick={onSignOut}
        startIcon={<LogOutIcon color={COLOR_SECONDARY} />}
        sx={{ justifyContent: "flex-start" }}
      />
    </StyledProfileContainer>
  );
}
