import Image from "next/image";
import { StyledAvatar } from "./styled";
import getStorageDownloadLink from "@/app/_global/getStorageDownloadLink";

type AvatarProps = {
  src: string;
  alt: string;
  size: "xs" | "s" | "m" | "l";
};

export default function Avatar({ src, alt, size }: AvatarProps) {
  const sizeMap = {
    xs: 18,
    s: 28,
    m: 62,
    l: 88,
    xl: 92,
  };

  const img = getStorageDownloadLink(src);
  console.log(img, src, "img");
  return (
    <StyledAvatar width={sizeMap[size]} height={sizeMap[size]}>
      <Image
        src={img}
        alt={alt}
        width={sizeMap[size]}
        height={sizeMap[size]}
        layout="responsive"
      />
    </StyledAvatar>
  );
}
