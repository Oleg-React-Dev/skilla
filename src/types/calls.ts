export enum InOut {
  Out,
  In,
}

export enum CallStatus {
  Success = "Дозвонился",
  Fail = "Не дозвонился",
}

export interface PartnerData {
  id: string;
  name: string;
  phone: string;
}

export interface Results {
  type: string;
  title: string;
  tooltip: string;
}

export interface Stages {
  person_name: string;
  person_surname: string;
  person_mango_phone: string;
  duration: string;
  disconnect_reason: string;
}

export interface CallResult {
  id: number;
  partnership_id: string;
  partner_data: PartnerData;
  date: string;
  date_notime: string;
  time: number;
  from_number: string;
  from_extension: string;
  to_number: string;
  to_extension: string;
  is_skilla: number;
  status: CallStatus; // "Дозвонился" | "Не дозвонился"; TOTO. remove string
  record: string;
  line_number: string;
  line_name: string;
  in_out?: InOut; // 1 - входящий звонок, 0 - исходящий звонок, '' - все звонки
  from_site: number;
  source: string;
  errors: string[];
  disconnect_reason: string;
  results: Results[];
  stages: Stages[];
  abuse: string[];
  contact_name: string;
  contact_company: string;
  person_id: number;
  person_name: string;
  person_surname: string;
  person_avatar: string;
  candidate_id: number;
  candidate_name: string;
  candidate_link: string;
  candidate_vacancy_name: string;
}

export interface CallsData {
  total_rows: string;
  results: CallResult[];
}

export type TypeOfAvatar = { link: string } | { initials?: string };

export type Contact = { componyName?: string; employeeName?: string; phone: string };

export type EmptyRow = {
  callStatus: null;
  date: null;
  avatar: null;
  contact: null;
  source: null;
  errors: null;
  time: null;
  record: null;
  partnershipId: null;
  label: string;
  count: number;
  type: "header";
};

export type TableData = {
  callStatus?: CallStatus;
  date: Date | null;
  avatar: TypeOfAvatar;
  contact: Contact;
  source: string;
  record: string;
  partnershipId: string;
  errors: string[];
  time: number;
  in_out?: InOut;
};

export type CallRow = TableData | EmptyRow;

export interface TableCallData {
  total: string;
  results: CallRow[];
}

export interface PrepaidData {
  total: string;
  results: TableData[];
}
