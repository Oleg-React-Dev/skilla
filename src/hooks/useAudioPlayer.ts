import { fetchAudioById } from "@/api/api";
import { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";

export const useAudioPlayer = (recordId: string, partnershipId: string) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const { data: audioSrc, refetch } = useQuery(
    ["audio", recordId],
    () => fetchAudioById(recordId, partnershipId),
    {
      enabled: false,
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
      keepPreviousData: true,
      onSuccess: (data) => {
        if (data) {
          togglePlayPause();
        }
      },
      onError: (err) => {
        console.error(err);
      },
    }
  );

  const handleButtonClick = () => {
    refetch();
  };

  function togglePlayPause() {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio.play();
        setIsPlaying(true);
      }
    }
  }

  const updateProgress = () => {
    const audio = audioRef.current;
    if (audio) {
      setProgress((audio.currentTime / audio.duration) * 100);
    }
  };

  const handleLoadedMetadata = () => {
    const audio = audioRef.current;
    if (audio) {
      setDuration(audio.duration);
    }
  };

  useEffect(() => {
    if (audioSrc && audioRef.current) {
      audioRef.current.addEventListener("timeupdate", updateProgress);
      audioRef.current.addEventListener("loadedmetadata", handleLoadedMetadata);
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("timeupdate", updateProgress);
        audioRef.current.removeEventListener("loadedmetadata", handleLoadedMetadata);
      }
    };
  }, [audioSrc]);

  return {
    audioSrc,
    duration,
    onPlayClick: !audioSrc ? handleButtonClick : togglePlayPause,
    isPlaying,
    progress,
    audioRef,
  };
};
