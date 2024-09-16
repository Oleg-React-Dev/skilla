import { Icon } from "../Icon";

export const SpecifyDates = () => (
  <div className="flex flex-col w-full gap-3.5">
    <div>
      <span>Указать даты</span>
    </div>

    <div className="flex items-baseline justify-between w-full">
      <div className="cursor-pointer text-datePikerSvg hover:text-textAvatar">
        <Icon name="SetDate" />
      </div>
      <div className="cursor-pointer text-datePikerSvg hover:text-textAvatar">
        <Icon name="DatePiker" />
      </div>
    </div>
  </div>
);
