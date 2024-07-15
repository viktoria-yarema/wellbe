import { useUserStore } from "@/entities/user/store/useUserStore";
import LogOutIcon from "@/shared/assets/icons/LogOutIcon";
import PrimaryButton from "@/shared/components/Buttons/PrimaryButton";
import { COLOR_SECONDARY } from "@/shared/theme/colors";
import { auth } from "@/firebase";
import { signOut } from "firebase/auth";

const ProfileButton = () => {
  const { user, cleanUser } = useUserStore();

  const onSignOut = () => {
    signOut(auth);
    cleanUser();
  };

  return (
    <PrimaryButton
      title="Log out"
      onClick={onSignOut}
      startIcon={<LogOutIcon color={COLOR_SECONDARY} />}
      sx={{ justifyContent: "flex-start" }}
    />
  );
};

export default ProfileButton;
