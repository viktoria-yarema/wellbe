"use client";

import { Company } from "@/app/(entities)/company/types";
import CompanyCard from "@/app/_components/CompanyCard";
import FlexColumn from "@/app/_components/Layout/FlexColumn";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useCompaniesQuery } from "@/app/(entities)/company/queries/useCompaniesQuery";
import { useSearchStore } from "../../store/useSearchStore";
import { useMemo } from "react";

export function CompaniesList() {
  const { searchValue } = useSearchStore();

  const { data: companies = [] } = useCompaniesQuery();

  const filteredCompanies = useMemo(() => {
    return companies.filter((company) =>
      company.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [searchValue]);

  return (
    <FlexColumn rowGap={"1rem"}>
      <Typography variant="heading5Bold">
        Items ({filteredCompanies.length})
      </Typography>
      <Box
        flexWrap={"wrap"}
        gap="1rem"
        sx={{
          display: "grid",
          gridTemplateColumns: "auto auto",
          width: "100%",
          maxWidth: 1024,
          margin: "0 auto",
        }}
      >
        {filteredCompanies?.map((company: Company) => (
          <CompanyCard company={company} key={company.id} />
        ))}
      </Box>
    </FlexColumn>
  );
}
