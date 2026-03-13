"use client";

export default function VaultTrackCard({ track, onPlay }: any) {
  if (track.type === "external") {
    return (
      <a
        href={track.url}
        target="_blank"
        className="rounded-xl border p-4 hover:bg-white/5"
      >
        {track.title}
      </a>
    );
  }

  return (
    <button
      onClick={onPlay}
      className="text-left rounded-xl border p-4 hover:bg-white/5"
    >
      ▶ {track.title}
    </button>
  );
}
