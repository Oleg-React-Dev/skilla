import { CallResult, Contact } from "@/types/calls";
import { formatPhoneNumber } from "./formatPhoneNumber";

const keys = {
  0: ["to_number", "to_extension"],
  1: ["from_number", "from_extension"],
} as const;

export const getContact = (call: CallResult): Contact => {
  let componyName = call.contact_company || call.partner_data.name;
  let employeeName = call.contact_name;

  let phoneNumberWithExtension = "";

  if (typeof call.in_out === "number") {
    phoneNumberWithExtension += formatPhoneNumber(call[keys[call.in_out][0]]);
    phoneNumberWithExtension += " " + call[keys[call.in_out][1]];
  }

  return { componyName, employeeName, phone: phoneNumberWithExtension };
};
