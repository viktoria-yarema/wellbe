import Typography from "@mui/material/Typography";

type TitleProps = {
  title: string;
};

export default function Title({ title }: TitleProps) {
  return (
    <Typography
      variant="bodySLight"
      color={"text.secondary"}
      textTransform={"uppercase"}
    >
      {title}
    </Typography>
  );
}
