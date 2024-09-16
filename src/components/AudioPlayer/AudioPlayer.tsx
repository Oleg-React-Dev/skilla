import { FC } from "react";
import { Icon } from "../Icon";
import { useAudioPlayer } from "@/hooks/useAudioPlayer";
import { handleDownload } from "@/utils/handleDownload";
import { Tooltip } from "../Tooltip/Tooltip";

interface AudioPlayerProps {
  recordId: string;
  partnershipId: string;
}

export const AudioPlayer: FC<AudioPlayerProps> = ({ recordId, partnershipId }) => {
  const { audioSrc, duration, onPlayClick, isPlaying, progress, audioRef } = useAudioPlayer(
    recordId,
    partnershipId
  );
  return (
    <div className="w-[352px] h-[48px] rounded-[48px] bg-backgroundAvatar flex justify-between items-center px-[18px]">
      <span className="text-[15px] text-cellText">
        {Math.floor(duration / 60)}:
        {Math.floor(duration % 60)
          .toString()
          .padStart(2, "0")}
      </span>
      <div
        onClick={onPlayClick}
        className="w-[24px] h-[24px] rounded-[24px] bg-white flex justify-center items-center text-textAvatar cursor-pointer"
      >
        <Icon name={isPlaying ? "Pause" : "Play"} />
      </div>

      <Tooltip duration={duration}>
        <div className="w-[164px] h-[4px] rounded-[50px] bg-datePikerSvg cursor-pointer relative">
          <div
            className={"h-[4px] rounded-[50px] bg-textAvatar cursor-pointer absolute"}
            style={{ width: progress.toFixed(1) + "%" }}
          />
        </div>
      </Tooltip>

      <div
        onClick={audioSrc ? () => handleDownload(audioSrc) : undefined}
        className="cursor-pointer text-datePikerSvg hover:text-textAvatar"
      >
        <Icon name="Download" />
      </div>

      <div className="cursor-pointer text-datePikerSvg hover:text-textAvatar">
        <Icon name="Close" width={14} height={14} />
      </div>

      <audio ref={audioRef} src={audioSrc} />
    </div>
  );
};
