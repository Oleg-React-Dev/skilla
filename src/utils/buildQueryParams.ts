import { CallsFilters } from "@/types/callsFilters";

export const buildQueryParams = (filters: CallsFilters) => {
  const params = new URLSearchParams();

  if (filters.date_start) params.append("date_start", filters.date_start);
  if (filters.date_end) params.append("date_end", filters.date_end);
  if (filters.in_out !== undefined) params.append("in_out", filters.in_out.toString());
  if (filters.limit !== undefined) params.append("limit", filters.limit.toString());
  if (filters.offset !== undefined) params.append("offset", filters.offset.toString());
  if (filters.sort_by) params.append("sort_by", filters.sort_by);
  if (filters.order) params.append("order", filters.order);
  if (filters.status) params.append("status", filters.status);

  return params.toString();
};
