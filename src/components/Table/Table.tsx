import { getColumns } from "@/components/Table/columns";
import { DataTable } from "@/components/Table/DataTable";
import { useFetchCalls } from "@/hooks/useFetchCalls";
import { useFilterCallList } from "@/hooks/useFilterCallList";
import { DateRange } from "@/types/dateRange";
import { Filter } from "@/types/filter";
import { FC } from "react";
import { Pagination } from "../Pagination/Pagination";

interface TableProps {
  filterBy: Filter;
  activeRange: DateRange;
  rangeUnit: number;
}

export const Table: FC<TableProps> = ({ filterBy, activeRange, rangeUnit }) => {
  const {
    callList,
    total,
    isLoading,
    isError,
    sortBy,
    order,
    handleSort,
    handlePageChange,
    itemsPerPage,
    currentPage,
  } = useFetchCalls(activeRange, rangeUnit);

  const deferredCallList = useFilterCallList(filterBy, callList);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading calls</div>;

  return (
    <>
      <DataTable columns={getColumns({ handleSort, sortBy, order })} data={deferredCallList} />
      <Pagination
        currentPage={currentPage}
        totalItems={Number(total) || 0}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};
