import { CallRow, Contact as ContactType, TypeOfAvatar } from "@/types/calls";
import { ColumnDef } from "@tanstack/react-table";
import { LabelWithIcon } from "../LabelWithIcon/LabelWithIcon";
import { Icon } from "../Icon";
import { statusIcon } from "../StatusCallIcon/StatusCallIcon";
import { TypeOfCall } from "@/types/type-of-call";
import { formatTime } from "@/utils/formatTime";
import { AvatarPlaceholder } from "../ui/avatarPlaceholder";
import { Contact } from "../ui/contact";
import { Order, Sort } from "@/types/callsFilters";
import { SortableColumnHeader } from "../SortableColumnHeader/SortableColumnHeader";
import { AudioPlayer } from "../AudioPlayer/AudioPlayer";

interface Params {
  handleSort: (sortBy: Sort) => void;
  sortBy?: Sort;
  order?: Order;
}

export const getColumns = ({ handleSort, sortBy, order }: Params): ColumnDef<CallRow>[] => [
  {
    accessorKey: "callStatus",
    header: () => <div className="w-10" />,
    cell: () => "",
    size: 40,
  },
  {
    accessorKey: "callStatus",
    header: () => <LabelWithIcon label="Тип" />,
    cell: ({ getValue, row }) => {
      const iconKey = getValue<TypeOfCall>();

      if ("type" in row.original && row.original.type === "header") {
        const { label, count } = row.original;
        return (
          <div className="absolute">
            <span className="text-cellText text-[15px] font-normal leading-5">
              {label}

              <span className="text-xs font-normal leading-3 text-textHeader align-super">{count}</span>
            </span>
          </div>
        );
      }

      if (iconKey === null) return "";

      return statusIcon[iconKey];
    },
    size: 54,
  },

  {
    accessorKey: "date",
    header: () => (
      <SortableColumnHeader
        onSort={() => handleSort(Sort.Date)}
        label="Время"
        activeOrder={order}
        sortName={Sort.Date}
        activeSort={sortBy}
      />
    ),
    cell: ({ getValue }) => {
      const date = getValue<Date>();

      if (date === null) return "";

      return <span className="text-cellText text-[15px] font-normal leading-5">{formatTime(date)}</span>;
    },
    size: 88,
  },
  {
    accessorKey: "avatar",
    header: () => <LabelWithIcon label="Сотрудник" />,
    cell: ({ getValue }) => {
      const av = getValue<TypeOfAvatar>();

      if (av === null) return "";

      if ("link" in av) {
        return <img src={av.link} alt="Avatar" className="object-cover w-8 h-8 rounded-full" />;
      }

      return (
        <AvatarPlaceholder>
          {av.initials ? (
            <span className="text-xs font-medium text-textAvatar">{av.initials}</span>
          ) : (
            <Icon name="EmptyAvatar" />
          )}
        </AvatarPlaceholder>
      );
    },
    size: 129,
  },

  {
    accessorKey: "contact",
    header: () => <LabelWithIcon label="Звонок" />,
    cell: ({ getValue }) => {
      const { phone, componyName, employeeName } = getValue<ContactType>() || {};

      if (!phone && !componyName && !employeeName) return "";

      return <Contact firsRow={employeeName || phone} secondRow={componyName} />;
    },
    size: 325,
  },
  {
    accessorKey: "source",
    header: () => <LabelWithIcon label="Источник" />,
    cell: ({ getValue }) => {
      const source = getValue<string>();

      if (source === null) return "";

      return <span className="text-textSecondary font-normal text-[15px] leading-5">{source}</span>;
    },
    size: 214,
  },
  {
    accessorKey: "errors",
    header: () => <LabelWithIcon label="Оценка" />,
    cell: ({ getValue }) => {
      const grade = getValue<string[]>();

      if (grade === null) return "";
      return (
        <div className="flex flex-col items-start justify-center">
          {grade?.map((item, index) => {
            return (
              <span key={index} className="text-errorText font-normal text-[14px] leading-5">
                {item}
              </span>
            );
          })}
        </div>
      );
    },
    size: 461,
  },
  {
    accessorKey: "record",
    header: () => (
      <SortableColumnHeader
        onSort={() => handleSort(Sort.Duration)}
        label="Длительность"
        activeOrder={order}
        sortName={Sort.Duration}
        activeSort={sortBy}
        containerClass="justify-end"
      />
    ),
    cell: ({ getValue, row }) => {
      const recordId = getValue<string>();

      if (recordId === null || row.original.partnershipId === null) return "";

      if (recordId === "") {
        const time = row.original.time;
        if (time === null || time <= 0) return null;

        return <span className="text-cellText text-[15px] font-normal leading-5">{time}</span>;
      }

      if (recordId && row.original.partnershipId && row.original.time) {
        return <AudioPlayer recordId={recordId} partnershipId={row.original.partnershipId} />;
      }
    },
  },
];
