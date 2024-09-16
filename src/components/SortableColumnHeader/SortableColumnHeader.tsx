import { Order, Sort } from "@/types/callsFilters";
import { FC } from "react";
import { ICON_HEIGHT_PX, ICON_WIDTH_PX } from "../Table/constants";
import { Icon } from "../Icon";
import { LabelWithIcon } from "../LabelWithIcon/LabelWithIcon";
import { ROTATE_ICON_180_DEGREES } from "@/constants/constants";

interface FilterableColumnHeaderProps {
  activeSort?: Sort;
  activeOrder?: Order;
  label: string;
  onSort: () => void;
  sortName: Sort;
  containerClass?: string;
}

export const SortableColumnHeader: FC<FilterableColumnHeaderProps> = ({
  onSort,
  label,
  activeSort,
  activeOrder,
  sortName,
  containerClass,
}) => {
  const isSortActive = activeSort === sortName;
  const isIconDirectionDown = !isSortActive || activeOrder === Order.DESC;
  const iconRotation = isIconDirectionDown ? 0 : ROTATE_ICON_180_DEGREES;
  return (
    <LabelWithIcon
      labelClass={isSortActive ? "text-filteredText" : undefined}
      onClick={onSort}
      label={label}
      containerClass={containerClass}
      icon={
        <Icon
          name="ArrowDown"
          color="#ADBFDF"
          width={ICON_WIDTH_PX}
          height={ICON_HEIGHT_PX}
          rotate={iconRotation}
        />
      }
    />
  );
};
