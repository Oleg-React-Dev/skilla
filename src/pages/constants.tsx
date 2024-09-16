import { SpecifyDates } from "@/components/SpecifyDates/SpecifyDates";
import { DateRange } from "@/types/dateRange";
import { Filter } from "@/types/filter";

export const filters = [
  { id: Filter.All, content: Filter.All },
  { id: Filter.Inbox, content: Filter.Inbox },
  { id: Filter.Outbox, content: Filter.Outbox },
];

export const dropdownItems = [
  { id: DateRange.Days, content: "Дня" },
  { id: DateRange.Week, content: "Неделя" },
  { id: DateRange.Month, content: "Месяц" },
  { id: DateRange.Year, content: "Год" },
  { id: DateRange.Custom, content: <SpecifyDates /> },
];
