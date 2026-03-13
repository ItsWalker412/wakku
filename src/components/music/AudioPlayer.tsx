"use client";

import { useEffect, useRef } from "react";
import AudioVisualizer from "./AudioVisualizer";

export default function AudioPlayer({
  tracks,
  currentTrackIndex,
}: any) {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (
      currentTrackIndex === null ||
      !audioRef.current
    ) return;

    audioRef.current.src = tracks[currentTrackIndex].src;
    audioRef.current.play();
  }, [currentTrackIndex]);

  if (currentTrackIndex === null) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 bg-black/80 backdrop-blur p-4">
      <p className="mb-2 font-medium">
        {tracks[currentTrackIndex].title}
      </p>

      <audio ref={audioRef} />

      <AudioVisualizer audioRef={audioRef} />
    </div>
  );
}
