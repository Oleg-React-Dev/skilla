import { cn } from "@/lib/utils";
import { FC } from "react";

interface TableHeaderLabelProps {
  label: string;
  icon?: JSX.Element;
  onClick?: () => void;
  labelClass?: string;
  containerClass?: string;
}

export const LabelWithIcon: FC<TableHeaderLabelProps> = ({
  label,
  icon,
  onClick,
  labelClass,
  containerClass,
}) => (
  <div
    onClick={() => onClick?.()}
    className={cn("flex items-baseline justify-start", containerClass, onClick ? "cursor-pointer" : "")}
  >
    <div className={cn("text-textSecondary text-[14px] font-normal leading-5", labelClass)}>{label}</div>
    <div className="flex items-center ml-2">{icon}</div>
  </div>
);
