import { DateRange } from "@/types/dateRange";

const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const getDateRange = (unit: DateRange, value: number): { startDate: string; endDate: string } => {
  const today = new Date();

  const endDate = formatDate(today);

  const startDate = new Date(today);

  switch (unit) {
    case "days":
      startDate.setDate(today.getDate() - value);
      break;
    case "week":
      startDate.setDate(today.getDate() - value * 7);
      break;
    case "month":
      startDate.setMonth(today.getMonth() - value);
      break;
    case "year":
      startDate.setFullYear(today.getFullYear() - value);
      break;
    default:
      throw new Error("Invalid unit option");
  }

  return {
    startDate: formatDate(startDate),
    endDate,
  };
};
