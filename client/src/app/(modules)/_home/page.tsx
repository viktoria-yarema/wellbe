import { getCompanies } from "@/app/(entities)/company/api/getCompanies";
import { Company } from "@/app/(entities)/company/types";
import CompanyCard from "@/app/_components/CompanyCard";
import { Box } from "@mui/material";

export default async function HomePage() {
  const companies = await getCompanies();

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
        <CompanyCard company={company} key={company.id} />
      ))}
    </Box>
  );
}
