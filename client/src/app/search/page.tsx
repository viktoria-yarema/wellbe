import FlexColumn from "@/shared/components/Layout/FlexColumn";
import { SearchPanel } from "./components/SearchPanel";
import { CompaniesList } from "./components/CompaniesList";
import PageContainer from "@/shared/components/PageContainer";
import { getCompanies } from "@/entities/company/api/getCompanies";
import { queryClient } from "@/shared/global/queryClient";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";

export default async function SearchPage() {
  await queryClient.prefetchQuery({
    queryKey: ["companies"],
    queryFn: () => getCompanies(),
  });

  return (
    <FlexColumn pt={0} mt={0}>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <SearchPanel />
        <PageContainer>
          <CompaniesList />
        </PageContainer>
      </HydrationBoundary>
    </FlexColumn>
  );
}
