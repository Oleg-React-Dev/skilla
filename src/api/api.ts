import { CallsData, PrepaidData } from "@/types/calls";
import { prepareData } from "@/utils/prepareData";

const token = import.meta.env.VITE_API_TOKEN;

const API_URL = "https://api.skilla.ru/mango/getList";
const RECORD_URL = "https://api.skilla.ru/mango/getRecord";

let headersList = {
  Accept: "*/*",
  Authorization: token,
};

export const fetchCallsData = async (queryParams: string): Promise<PrepaidData | undefined> => {
  let response = await fetch(API_URL + "?" + queryParams, {
    method: "POST",
    headers: headersList,
  });

  const data: CallsData = await response.json();

  if (!data) return;

  return prepareData(data);
};

export const fetchAudioById = async (
  recordId: string,
  partnershipId: string
): Promise<string | undefined> => {
  let response = await fetch(RECORD_URL + "?" + "record=" + recordId + "&partnership_id=" + partnershipId, {
    method: "POST",
    headers: headersList,
  });

  const blob = await response.blob();

  return URL.createObjectURL(blob);
};
