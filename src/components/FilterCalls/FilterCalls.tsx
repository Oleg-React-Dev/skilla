import { Filter } from "@/types/filter";
import { FC, useState } from "react";
import { Dropdown } from "../Dropdown/Dropdown";
import {
  CLOSE_FILTER_ICON_HEIGHT_PX,
  CLOSE_FILTER_ICON_WIDTH_PX,
  FILTER_ICON_HEIGHT_PX,
  FILTER_ICON_WIDTH_PX,
} from "./constants";
import { LabelWithIcon } from "../LabelWithIcon/LabelWithIcon";
import { Icon } from "../Icon";
import { ROTATE_ICON_180_DEGREES } from "@/constants/constants";

interface FilterProps {
  label: Filter;
  filters: { id: Filter; content: Filter }[];
  onFilterChange: React.Dispatch<React.SetStateAction<Filter>>;
  isFiltered: boolean;
  onResetFilter: () => void;
}

export const FilterCalls: FC<FilterProps> = ({
  label,
  filters,
  onFilterChange,
  isFiltered,
  onResetFilter,
}) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  return (
    <div className="flex flex-col">
      <div className="flex gap-5">
        <LabelWithIcon
          label={label}
          onClick={() => setIsOpenDropdown(true)}
          labelClass={isFiltered ? "text-filteredText" : undefined}
          icon={
            <Icon
              name="ArrowDown"
              width={FILTER_ICON_WIDTH_PX}
              height={FILTER_ICON_HEIGHT_PX}
              rotate={isOpenDropdown ? ROTATE_ICON_180_DEGREES : undefined}
              color="#ADBFDF"
            />
          }
        />

        {isFiltered ? (
          <LabelWithIcon
            label="Сбросить фильтры"
            onClick={onResetFilter}
            icon={
              <Icon
                name={"Close"}
                width={CLOSE_FILTER_ICON_WIDTH_PX}
                height={CLOSE_FILTER_ICON_HEIGHT_PX}
                color={"#ADBFDF"}
              />
            }
          />
        ) : null}
      </div>

      <Dropdown
        menuItems={filters}
        activeFilter={label}
        onFilterChange={onFilterChange}
        onOpenChange={setIsOpenDropdown}
        open={isOpenDropdown}
        contentClass="rounded-lg bg-white w-[133px]"
      >
        <div className="w-[133px]" />
      </Dropdown>
    </div>
  );
};
