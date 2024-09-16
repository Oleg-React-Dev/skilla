export enum Order {
  ASC = "ASC",
  DESC = "DESC",
}

export enum Sort {
  Date = "date",
  Duration = "duration",
}

export interface CallsFilters {
  date_start?: string;
  date_end?: string;
  in_out?: number;
  limit: number;
  offset?: number;
  sort_by?: Sort;
  order?: Order;
  status?: "success" | "fail";
  ["duration[gte]"]?: number;
  ["duration[lte]"]?: number;
}
