import { TableData } from "@/types/calls";
import { Filter } from "@/types/filter";
import { addDayHeaders } from "@/utils/addEmptyRow";
import { filterByCallType } from "@/utils/filterByCallType";
import { useDeferredValue, useMemo } from "react";

export const useFilterCallList = (filterBy: Filter, callList?: TableData[]) => {
  const filteredList = useMemo(() => {
    const filtered = filterByCallType({ list: callList, filterBy });

    if (!filtered) return [];

    return addDayHeaders(filtered);
  }, [filterBy, callList]);

  return useDeferredValue(filteredList);
};
