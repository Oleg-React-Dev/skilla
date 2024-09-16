import { FC } from "react";

interface ContactProps {
  firsRow: string;
  secondRow?: string;
}

export const Contact: FC<ContactProps> = ({ firsRow, secondRow }) => (
  <div className="flex flex-col items-start justify-center gap-1.5">
    <span className="font-normal text-[15px] leading-5 text-cellText">{firsRow}</span>
    {secondRow && <span className="text-textSecondary font-normal text-[15px] leading-5">{secondRow}</span>}
  </div>
);
