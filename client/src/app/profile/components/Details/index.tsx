"use client";

import Flex from "@/shared/components/Layout/Flex";
import Contacts from "../Contacts";
import Avatar from "@/shared/components/Avatar";
import { useUserStore } from "@/entities/user/store/useUserStore";

const Details = () => {
  const { user } = useUserStore();

  if (!user) {
    return null;
  }

  <Flex columnGap={"1rem"}>
    <Avatar alt={user.name} size={"l"} name={user.name} />
    <Contacts {...user} phone={user.phoneNumber} />
  </Flex>;
};

export default Details;
