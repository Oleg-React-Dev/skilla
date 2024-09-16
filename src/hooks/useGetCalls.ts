import { useQuery } from "react-query";
import { CallsFilters } from "@/types/callsFilters";
import { buildQueryParams } from "@/utils/buildQueryParams";
import { fetchCallsData } from "@/api/api";

export const useGetCalls = (filters: CallsFilters) => {
  const fetchCalls = async () => {
    const queryParams = buildQueryParams(filters);
    return await fetchCallsData(queryParams);
  };

  return useQuery(["calls", filters], fetchCalls, {
    keepPreviousData: true,
    staleTime: 5000,
    cacheTime: 10000,
    refetchOnWindowFocus: false,
  });
};
