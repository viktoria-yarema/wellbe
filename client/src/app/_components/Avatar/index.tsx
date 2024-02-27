import Image from "next/image";
import { StyledAvatar } from "./styled";
import getStorageDownloadLink from "@/app/_global/getStorageDownloadLink";
import { stringAvatar } from "./utils";
import Avatar from "@mui/material/Avatar";

type AvatarProps = {
  name?: string;
  src?: string;
  alt: string;
  size: "xs" | "s" | "m" | "l";
};

export default function AvatarComponent({ src, alt, size, name }: AvatarProps) {
  const sizeMap = {
    xs: 18,
    s: 28,
    m: 62,
    l: 88,
    xl: 92,
  };

  if (!name || !src) null;

  const img = getStorageDownloadLink(src);

  return (
    <StyledAvatar width={sizeMap[size]} height={sizeMap[size]}>
      {name ? (
        <Avatar alt={`${name}`} {...stringAvatar(name)} />
      ) : (
        <Image
          src={img}
          alt={alt}
          width={sizeMap[size]}
          height={sizeMap[size]}
          layout="responsive"
        />
      )}
    </StyledAvatar>
  );
}
