import { CallRow, EmptyRow, TableData } from "@/types/calls";

const getStartOfDay = (date: Date): Date => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
};

const calculateDaysAgo = (date: Date): number => {
  const today = getStartOfDay(new Date());
  const targetDate = getStartOfDay(date);
  const diffTime = today.getTime() - targetDate.getTime();
  return Math.floor(diffTime / (1000 * 60 * 60 * 24));
};

const getDayLabel = (daysAgo: number): string => {
  if (daysAgo === 1) return "Вчера";
  if (daysAgo < 5) return `${daysAgo} дня назад`;
  return `${daysAgo} днeй назад`;
};

const addDayHeader = (result: CallRow[], day: Date, dayRows: TableData[]) => {
  if (dayRows.length === 0) return;

  const daysAgo = calculateDaysAgo(day);
  if (daysAgo === 0) return;

  const header: EmptyRow = {
    type: "header",
    label: getDayLabel(daysAgo),
    count: dayRows.length,
    callStatus: null,
    date: null,
    avatar: null,
    contact: null,
    source: null,
    errors: null,
    time: null,
    record: null,
    partnershipId: null,
  };

  result.push(header);
  result.push(...dayRows);
};

export const addDayHeaders = (rows: TableData[]) => {
  const result: CallRow[] = [];
  let currentDay: Date | null = null;
  let dayRows: TableData[] = [];

  rows.forEach((row) => {
    const rowDay = getStartOfDay(row.date!);

    if (!currentDay || rowDay.getTime() !== currentDay.getTime()) {
      if (currentDay) {
        addDayHeader(result, currentDay, dayRows);
      }
      currentDay = rowDay;
      dayRows = [];
    }

    dayRows.push(row);
  });

  if (currentDay) {
    addDayHeader(result, currentDay, dayRows);
  }

  return result;
};
