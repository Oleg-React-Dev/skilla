import { ROTATE_ICON_90_DEGREES, ROTATE_ICON_MINUS_90_DEGREES } from "@/constants/constants";
import { Icon } from "../Icon";
import { PikerArrowButton } from "../PikerArrowButton/PikerArrowButton";
import { Dropdown } from "../Dropdown/Dropdown";
import { FC, useState } from "react";
import { DateRange } from "@/types/dateRange";

interface DatePikerButton {
  activeRangeId: DateRange;
  activeRangeChange: React.Dispatch<React.SetStateAction<DateRange>>;
  dropdownItems: { id: DateRange; content: string | JSX.Element }[];
  rangeUnit: number;
  setRangeUnit: React.Dispatch<React.SetStateAction<number>>;
}

export const DatePikerButton: FC<DatePikerButton> = ({
  activeRangeId,
  activeRangeChange,
  dropdownItems,
  setRangeUnit,
  rangeUnit,
}) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const handleRangeChange = (id: DateRange) => {
    if (id !== DateRange.Custom) {
      activeRangeChange(id);
      setRangeUnit(1);
    }
  };

  return (
    <div className="flex flex-col items-end w-fit">
      <div className="flex items-center justify-between w-28">
        <PikerArrowButton
          disable={rangeUnit === 1}
          rotate={ROTATE_ICON_90_DEGREES}
          onClick={() =>
            setRangeUnit((prevState) => {
              if (prevState - 1 >= 1) {
                return prevState - 1;
              }

              return prevState;
            })
          }
        />

        <div className="cursor-pointer text-datePikerSvg hover:text-textAvatar">
          <Icon name="DatePiker" />
        </div>

        <span onClick={() => setIsOpenDropdown(true)} className="text-sm cursor-pointer text-datePikerText">
          {rangeUnit > 1 ? rangeUnit : null}{" "}
          {dropdownItems.find((item) => item.id === activeRangeId)?.content}
        </span>

        <PikerArrowButton
          onClick={() => setRangeUnit((prevState) => prevState + 1)}
          rotate={ROTATE_ICON_MINUS_90_DEGREES}
        />
      </div>

      <Dropdown
        menuItems={dropdownItems}
        activeFilter={activeRangeId}
        onFilterChange={handleRangeChange}
        onOpenChange={setIsOpenDropdown}
        open={isOpenDropdown}
        contentClass="rounded-lg bg-white w-[205px]"
        itemClass="h-10 last:h-20 last:items-start px-5 text-sm"
      >
        <div className="w-[205px]" />
      </Dropdown>
    </div>
  );
};
