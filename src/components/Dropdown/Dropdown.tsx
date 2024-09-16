import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface DropdownItems<T extends string> {
  id: T;
  content: string | JSX.Element;
}

interface DropdownProps<T extends string> extends React.PropsWithChildren {
  menuItems: DropdownItems<T>[];
  activeFilter: T;
  onFilterChange: React.Dispatch<React.SetStateAction<T>> | ((value: T) => void);
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  contentClass?: string;
  itemClass?: string;
}

export const Dropdown = <T extends string>({
  children,
  menuItems,
  activeFilter,
  onFilterChange,
  onOpenChange,
  open,
  contentClass,
  itemClass,
}: DropdownProps<T>) => (
  <DropdownMenu onOpenChange={onOpenChange} open={open}>
    <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
    <DropdownMenuContent className={contentClass}>
      {menuItems.map(({ id, content }) => {
        return (
          <DropdownMenuItem
            onClick={() => onFilterChange(id)}
            key={id}
            className={cn(
              "py-[7px] px-[12px] hover:bg-hoverDropdown cursor-pointer hover:border-none focus:border-none text-xs h-8 text-",
              activeFilter === id ? "text-dropdownItemTextActive" : "text-dropdownItemText",
              itemClass
            )}
          >
            {content}
          </DropdownMenuItem>
        );
      })}
    </DropdownMenuContent>
  </DropdownMenu>
);
