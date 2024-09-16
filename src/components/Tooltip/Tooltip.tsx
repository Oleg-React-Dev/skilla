import React, { useState } from "react";

interface TooltipProps {
  duration: number;
  children: JSX.Element;
}

export const Tooltip: React.FC<TooltipProps> = ({ duration, children }) => {
  const [visible, setVisible] = useState(false);
  const [x, setX] = useState(0);
  const [progress, setProgress] = useState(0);

  const handleMouseOver = (e: React.MouseEvent<HTMLDivElement>) => {
    setVisible(true);
    updateTooltipPosition(e);
  };

  const handleMouseOut = () => {
    setVisible(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    updateTooltipPosition(e);
  };

  const updateTooltipPosition = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPos = e.clientX - rect.left;

    setX(xPos);

    const progress = xPos / rect.width;
    setProgress(progress);
  };

  const calculateTime = () => {
    const time = duration * progress;
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onMouseMove={handleMouseMove}
      className="relative"
    >
      {children}

      {visible && (
        <div
          className="absolute z-10 text-sm text-text-cellText0"
          style={{
            top: "-20px",
            left: `${x}px`,
          }}
        >
          {calculateTime()}
        </div>
      )}
    </div>
  );
};
