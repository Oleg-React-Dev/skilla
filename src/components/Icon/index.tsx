import React from "react";
import CallType from "../../assets/icons/CallType.svg?react";
import ArrowDown from "../../assets/icons/ArrowDown.svg?react";
import ArrowUp from "../../assets/icons/ArrowUp.svg?react";
import DatePiker from "../../assets/icons/DatePiker.svg?react";
import SetDate from "../../assets/icons/SetDate.svg?react";
import EmptyAvatar from "../../assets/icons/EmptyAvatar.svg?react";
import Download from "../../assets/icons/Download.svg?react";
import Play from "../../assets/icons/Play.svg?react";
import Close from "../../assets/icons/Close.svg?react";
import Pause from "../../assets/icons/Pause.svg?react";

const iconMap = {
  CallType,
  ArrowDown,
  ArrowUp,
  DatePiker,
  SetDate,
  EmptyAvatar,
  Download,
  Play,
  Close,
  Pause,
};

export type IconName = keyof typeof iconMap;

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
}

export const Icon: React.FC<IconProps> = ({ name, color, width, height, rotate = 0, ...rest }) => {
  const IconComponent = iconMap[name];

  return <IconComponent style={{ color, width, height, transform: `rotate(${rotate}deg)` }} {...rest} />;
};
