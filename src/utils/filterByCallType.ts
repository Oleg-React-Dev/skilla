import { TableData } from "@/types/calls";
import { Filter } from "@/types/filter";

interface FilterParams {
  list?: TableData[];
  filterBy: Filter;
}

export const filterByCallType = ({ list, filterBy }: FilterParams) => {
  if (!list?.length) return [];

  if (filterBy === Filter.All) return list;

  if (filterBy === Filter.Inbox) return list?.filter((item) => item.in_out === 1);

  if (filterBy === Filter.Outbox) return list?.filter((item) => item.in_out === 0);
};
