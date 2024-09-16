import { CallResult } from "@/types/calls";
import { isValidImageUrl } from "./isValidImageUrl";
import { getInitials } from "./getInitials";

export const getAvatar = (call: CallResult) => {
  if (isValidImageUrl(call.person_avatar)) {
    return { link: call.person_avatar };
  }

  return { initials: getInitials(call.person_name, call.person_surname) };
};
