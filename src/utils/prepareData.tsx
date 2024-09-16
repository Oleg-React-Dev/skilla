import { CallsData, CallStatus, PrepaidData, TableData } from "@/types/calls";
import { getCallStatus } from "./getCallStatus";
import { parseDateTime } from "./parseDateTime";
import { getAvatar } from "./getAvatar";
import { getContact } from "./getContact";

export const prepareData = (data: CallsData) => {
  const result: PrepaidData = { total: data.total_rows, results: [] };

  for (let i = 0; i < data.results.length; i++) {
    result.results[i] = {} as TableData;

    result.results[i].callStatus = getCallStatus(data.results[i]) as unknown as CallStatus;
    result.results[i].date = parseDateTime(data.results[i].date);
    result.results[i].avatar = getAvatar(data.results[i]);
    result.results[i].contact = getContact(data.results[i]);
    result.results[i].source = data.results[i].source;
    result.results[i].errors = data.results[i].errors;
    result.results[i].time = data.results[i].time;
    result.results[i].in_out = data.results[i].in_out;
    result.results[i].record = data.results[i].record;
    result.results[i].partnershipId = data.results[i].partnership_id;
  }

  return result;
};
