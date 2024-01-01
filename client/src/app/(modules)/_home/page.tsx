"use client";
import { useCompaniesQuery } from "@/app/(entities)/company/queries/useCompaniesQuery";
import { Company } from "@/app/(entities)/company/types";
import CompanyCard from "@/app/_components/CompanyCard";
import Flex from "@/app/_components/Layout/Flex";
import { Box } from "@mui/material";

export default function HomePage() {
  const { data: companies } = useCompaniesQuery();
  return (
    <Box
      flexWrap={"wrap"}
      gap="1rem"
      sx={{
        display: "grid",
        gridTemplateColumns: "auto auto",
        width: "100%",
      }}
    >
      {companies?.map((company: Company) => (
        <CompanyCard company={company} />
      ))}
    </Box>
  );
}
