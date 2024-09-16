import { Settings } from "@/components/Settings/Settings";
import { Table } from "@/components/Table/Table";
import { Filter } from "@/types/filter";
import { useState } from "react";
import { dropdownItems, filters } from "./constants";
import { DateRange } from "@/types/dateRange";

export const TablePage = () => {
  const [filterBy, setFilterBy] = useState<Filter>(Filter.All);
  const [activeRangeId, setActiveRangeId] = useState<DateRange>(DateRange.Days);
  const [rangeUnit, setRangeUnit] = useState(3);

  return (
    <>
      <Settings
        label={filterBy}
        filters={filters}
        onFilterChange={setFilterBy}
        isFiltered={filterBy !== Filter.All}
        onResetFilter={() => setFilterBy(Filter.All)}
        activeRangeId={activeRangeId}
        activeRangeChange={setActiveRangeId}
        dropdownItems={dropdownItems}
        rangeUnit={rangeUnit}
        setRangeUnit={setRangeUnit}
      />

      <Table filterBy={filterBy} activeRange={activeRangeId} rangeUnit={rangeUnit} />
    </>
  );
};
