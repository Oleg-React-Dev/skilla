import { TypeOfCall } from "@/types/type-of-call";
import { Icon } from "../Icon";
import { ROTATE_ICON_180_DEGREES } from "@/constants/constants";

export const statusIcon: Record<TypeOfCall, JSX.Element> = {
  inSuccess: <Icon name="CallType" color="#002CFB" />,
  inFail: <Icon name="CallType" color="#EA1A4F" />,
  outSuccess: <Icon name="CallType" color="#28A879" rotate={ROTATE_ICON_180_DEGREES} />,
  outFail: <Icon name="CallType" color="#EA1A4F" rotate={ROTATE_ICON_180_DEGREES} />,
};
