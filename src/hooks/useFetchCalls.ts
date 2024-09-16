import { useGetCalls } from "@/hooks/useGetCalls";
import { CallsFilters, Order, Sort } from "@/types/callsFilters";
import { DateRange } from "@/types/dateRange";
import { getDateRange } from "@/utils/getDateRange";
import { useEffect, useState } from "react";

export const useFetchCalls = (activeRange: DateRange, rangeUnit: number) => {
  const [currentPage, setCurrentPage] = useState(1);

  const [filters, setFilters] = useState<CallsFilters>({
    date_start: undefined,
    date_end: undefined,
    limit: 50,
    offset: 0,
    sort_by: undefined,
    order: undefined,
  });

  useEffect(() => {
    const range = getDateRange(activeRange, rangeUnit);

    if (range) {
      setFilters((prev) => ({ ...prev, date_start: range.startDate, date_end: range.endDate }));
    }
  }, [activeRange, rangeUnit]);

  const { data, isLoading, isError, refetch } = useGetCalls(filters);

  const handleSort = (sort_by: Sort) => {
    setFilters((prev) => ({ ...prev, sort_by, order: prev.order === Order.ASC ? Order.DESC : Order.ASC }));
  };

  const handlePagination = (newOffset: number) => {
    setFilters((prev) => ({ ...prev, offset: newOffset }));
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    handlePagination((page - 1) * filters.limit);
  };

  return {
    total: data?.total,
    callList: data?.results,
    isLoading,
    isError,
    refetch,
    handleSort,
    sortBy: filters.sort_by,
    order: filters.order,
    itemsPerPage: filters.limit,
    currentPage,
    handlePageChange,
  };
};
