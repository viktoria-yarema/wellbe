"use client";
import { COLOR_PRIMARY_DARK } from "@/app/_theme/colors";
import Typography from "@mui/material/Typography";

type TitleProps = {
  title: string;
};

export default function Title({ title }: TitleProps) {
  const highlightWord = "Wellbe";
  const normalizedTitle = title.split(highlightWord);

  return (
    <Typography variant="heading4Bold" textAlign={"center"} height={"62px"}>
      {normalizedTitle.map((part, index) => (
        <span key={index}>
          {part}
          {index < normalizedTitle.length - 1 && (
            <span style={{ color: COLOR_PRIMARY_DARK }}>{highlightWord}</span>
          )}
        </span>
      ))}
    </Typography>
  );
}
