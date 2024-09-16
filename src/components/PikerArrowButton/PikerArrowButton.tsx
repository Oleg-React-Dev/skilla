import { FC } from "react";
import { Icon } from "../Icon";
import { ICON_HEIGHT_PX, ICON_WIDTH_PX } from "./constants";
import { cn } from "@/lib/utils";

interface PikerArrowButtonProps {
  rotate: number;
  onClick: () => void;
  disable?: boolean;
}

export const PikerArrowButton: FC<PikerArrowButtonProps> = ({ rotate, onClick, disable }) => (
  <div
    onClick={onClick}
    className={cn(
      "text-datePikerSvg hover:text-textAvatar",
      disable ? "cursor-not-allowed" : "cursor-pointer"
    )}
  >
    <Icon name="ArrowDown" rotate={rotate} width={ICON_WIDTH_PX} height={ICON_HEIGHT_PX} />
  </div>
);
