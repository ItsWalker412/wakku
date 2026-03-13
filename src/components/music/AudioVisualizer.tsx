"use client";

import { useEffect, useRef } from "react";

export default function AudioVisualizer({
  audioRef,
}: {
  audioRef: React.RefObject<HTMLAudioElement | null>;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const dataRef = useRef<Uint8Array | null>(null);

  useEffect(() => {
    if (!audioRef.current || analyserRef.current) return;

    const audioCtx = new AudioContext();
    const source = audioCtx.createMediaElementSource(audioRef.current);
    const analyser = audioCtx.createAnalyser();

    analyser.fftSize = 128;

    source.connect(analyser);
    analyser.connect(audioCtx.destination);

    analyserRef.current = analyser;
    dataRef.current = new Uint8Array(analyser.frequencyBinCount);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const analyser = analyserRef.current;
    const data = dataRef.current;
    if (!canvas || !analyser || !data) return;

    const ctx = canvas.getContext("2d")!;
    const draw = () => {
      requestAnimationFrame(draw);

      analyser.getByteFrequencyData(data as any);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const barWidth = canvas.width / data.length;

      data.forEach((v, i) => {
        const h = (v / 255) * canvas.height;
        ctx.fillStyle = "rgba(255,255,255,0.8)";
        ctx.fillRect(i * barWidth, canvas.height - h, barWidth - 1, h);
      });
    };

    draw();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={500}
      height={80}
      className="w-full rounded-md bg-black/30"
    />
  );
}
