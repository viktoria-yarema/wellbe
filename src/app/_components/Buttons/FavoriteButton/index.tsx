"use client";
import FavoriteIcon from "@/app/_assets/icons/FavoriteIcon";
import FavoriteOutlinedIcon from "@/app/_assets/icons/FavoriteOutlinedIcon";
import FlexCenter from "../../Layout/FlexCenter";

export default function FavoriteButton() {
  const isFavorite = true;

  return (
    <FlexCenter onClick={() => "mock"}>
      {isFavorite ? (
        <FavoriteIcon size={22} />
      ) : (
        <FavoriteOutlinedIcon size={22} />
      )}
    </FlexCenter>
  );
}
