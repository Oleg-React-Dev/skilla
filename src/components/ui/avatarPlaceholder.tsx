import { FC } from "react";

interface AvatarPlaceholderProps extends React.PropsWithChildren {}

export const AvatarPlaceholder: FC<AvatarPlaceholderProps> = ({ children }) => (
  <div className="w-8 h-8 rounded-[50%] bg-backgroundAvatar flex justify-center items-center">{children}</div>
);
