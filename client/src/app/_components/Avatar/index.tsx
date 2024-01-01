import Image from "next/image";
import { StyledAvatar } from "./styled";

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

  return (
    <StyledAvatar width={sizeMap[size]} height={sizeMap[size]}>
      <Image
        src={src}
        alt={alt}
        width={sizeMap[size]}
        height={sizeMap[size]}
        layout="responsive"
      />
    </StyledAvatar>
  );
}
