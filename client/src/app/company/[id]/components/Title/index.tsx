import { Typography } from "@mui/material";

type TitleProps = {
  title: string;
};

export default function Title({ title }: TitleProps) {
  return <Typography variant="bodyXLSemiBold">{title}</Typography>;
}
