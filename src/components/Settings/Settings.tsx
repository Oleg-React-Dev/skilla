import { FC } from "react";
import { FilterCalls } from "../FilterCalls/FilterCalls";
import { Filter } from "@/types/filter";
import { DatePikerButton } from "../DatePikerButton/DatePikerButton";
import { DateRange } from "@/types/dateRange";

interface SettingsProps {
  label: Filter;
  filters: { id: Filter; content: Filter }[];
  onFilterChange: React.Dispatch<React.SetStateAction<Filter>>;
  isFiltered: boolean;
  onResetFilter: () => void;
  activeRangeId: DateRange;
  activeRangeChange: React.Dispatch<React.SetStateAction<DateRange>>;
  dropdownItems: { id: DateRange; content: string | JSX.Element }[];
  rangeUnit: number;
  setRangeUnit: React.Dispatch<React.SetStateAction<number>>;
}

export const Settings: FC<SettingsProps> = ({
  label,
  filters,
  onFilterChange,
  isFiltered,
  onResetFilter,
  activeRangeId,
  activeRangeChange,
  dropdownItems,
  rangeUnit,
  setRangeUnit,
}) => {
  return (
    <div className="flex justify-between mb-4">
      <FilterCalls
        label={label}
        filters={filters}
        onFilterChange={onFilterChange}
        isFiltered={isFiltered}
        onResetFilter={onResetFilter}
      />
      <DatePikerButton
        activeRangeId={activeRangeId}
        activeRangeChange={activeRangeChange}
        dropdownItems={dropdownItems}
        rangeUnit={rangeUnit}
        setRangeUnit={setRangeUnit}
      />
    </div>
  );
};
