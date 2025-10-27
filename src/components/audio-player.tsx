"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { audioTrack } from "@/data/content";

export function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isOverlayOpen, setOverlayOpen] = useState(true);
  const [isPlaying, setPlaying] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    const handleEnded = () => setPlaying(false);
    audio.addEventListener("ended", handleEnded);
    return () => audio.removeEventListener("ended", handleEnded);
  }, []);

  const tryPlay = async () => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    try {
      await audio.play();
      setPlaying(true);
      setError(null);
    } catch (err) {
      console.error(err);
      setError(
        "We could not start the music automatically. Tap play once the page loads or open the Spotify link."
      );
    }
    setOverlayOpen(false);
  };

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }
    if (audio.paused) {
      try {
        await audio.play();
        setPlaying(true);
        setError(null);
      } catch (err) {
        console.error(err);
        setError("Tap again to try playing the soundtrack or open the Spotify link.");
      }
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={audioTrack.file} preload="none" />

      {isOverlayOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 px-6 text-center text-white">
          <div className="max-w-md rounded-[2.5rem] border border-white/20 bg-olive/90 px-8 py-10 shadow-2xl">
            <p className="font-display text-xs uppercase tracking-[0.6em] text-white/70">
              Soundtrack
            </p>
            <h3 className="mt-4 font-display text-3xl">Press play to begin</h3>
            <p className="mt-4 text-sm leading-7 text-white/75">
              {audioTrack.description}
            </p>
            <button
              type="button"
              onClick={tryPlay}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-olive transition hover:bg-white/90"
            >
              <Play size={16} strokeWidth={1.5} />
              Begin soundtrack
            </button>
            {audioTrack.link && (
              <a
                href={audioTrack.link}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center justify-center rounded-full border border-white/60 px-5 py-2 text-xs uppercase tracking-[0.3em] text-white/80 transition hover:bg-white/10"
              >
                Listen on Spotify
              </a>
            )}
            {error && (
              <p className="mt-4 text-xs text-rose-100/80">{error}</p>
            )}
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={togglePlayback}
        className="fixed bottom-8 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full border border-white/80 bg-white/80 text-olive shadow-xl shadow-olive/30 backdrop-blur transition hover:bg-white"
        aria-label={isPlaying ? "Pause soundtrack" : "Play soundtrack"}
      >
        {isPlaying ? (
          <Pause size={22} strokeWidth={1.5} />
        ) : (
          <Play size={22} strokeWidth={1.5} />
        )}
      </button>
      {error && (
        <div className="fixed bottom-28 right-6 z-40 max-w-xs rounded-2xl border border-rose-200 bg-white/95 px-4 py-3 text-xs text-rose-500 shadow-lg shadow-rose-200">
          {error}
        </div>
      )}
    </>
  );
}
