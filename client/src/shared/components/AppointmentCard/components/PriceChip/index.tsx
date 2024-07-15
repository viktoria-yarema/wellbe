import Flex from "@/shared/components/Layout/Flex";
import { COLOR_BLUE_GREY } from "@/shared/theme/colors";
import { Typography } from "@mui/material";

type PriceChipProps = {
  price: string;
};

export default function PriceChip({ price }: PriceChipProps) {
  return (
    <Flex
      bgcolor={COLOR_BLUE_GREY}
      sx={{
        borderRadius: "0.75rem",
        margin: "0 auto",
        p: "0.25rem 0.75rem",
      }}
    >
      <Typography variant="bodyMMedium">${Number(price).toFixed(2)}</Typography>
    </Flex>
  );
}
