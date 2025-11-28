"use client";

import { useEffect, useMemo, useState } from "react";
import { countdownTarget } from "@/data/content";

type CountdownState = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

const initialState: CountdownState = {
  days: "00",
  hours: "00",
  minutes: "00",
  seconds: "00",
};

function getTimeRemaining(target: Date): CountdownState {
  const now = new Date();
  const diff = target.getTime() - now.getTime();

  if (diff <= 0) {
    return initialState;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return {
    days: days.toString().padStart(2, "0"),
    hours: hours.toString().padStart(2, "0"),
    minutes: minutes.toString().padStart(2, "0"),
    seconds: seconds.toString().padStart(2, "0"),
  };
}

export function CountdownSection() {
  const targetDate = useMemo(() => new Date(countdownTarget), []);
  const [time, setTime] = useState<CountdownState>(initialState);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const remaining = getTimeRemaining(targetDate);
      setTime(remaining);

      const complete = Object.values(remaining).every((val) => val === "00");
      if (complete && !isComplete) {
        setIsComplete(true);
      }
    };

    updateTime();
    const interval = window.setInterval(updateTime, 1000);
    return () => window.clearInterval(interval);
  }, [targetDate, isComplete]);

  if (isComplete) {
    return (
      <section
        aria-labelledby="celebration-heading"
        className="relative mx-auto max-w-5xl overflow-hidden rounded-xl border border-gold/35 bg-gradient-to-br from-night/90 via-onyx/85 to-char/90 px-6 py-20 text-center shadow-[0_40px_120px_-60px_rgba(249,210,122,0.55)] backdrop-blur md:px-16"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="firework"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 30}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10">
          <h2
            id="celebration-heading"
            className="flex flex-col font-display font-bold tracking-tight text-gold animate-pulse-slow text-3xl"
          >
            <span>🎉🎉🎉</span>
            <span className="text-3xl uppercase">Today is the Big Day!</span>
            <span>🎉🎉🎉</span>
          </h2>
          <p className="mt-6 text-xl leading-8 text-ivory/90 max-w-2xl mx-auto">
            We can't wait to celebrate with you!
          </p>
        </div>

        <style jsx>{`
          @keyframes firework {
            0% {
              transform: translate(0, 100vh) scale(0);
              opacity: 1;
            }
            50% {
              opacity: 1;
            }
            100% {
              transform: translate(var(--x), var(--y)) scale(1);
              opacity: 0;
            }
          }

          @keyframes pulse-slow {
            0%,
            100% {
              opacity: 1;
              transform: scale(1);
            }
            50% {
              opacity: 0.9;
              transform: scale(1.05);
            }
          }

          .animate-pulse-slow {
            animation: pulse-slow 3s ease-in-out infinite;
          }

          .firework {
            position: absolute;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: radial-gradient(
              circle,
              rgba(249, 210, 122, 1) 0%,
              rgba(249, 210, 122, 0.8) 50%,
              transparent 100%
            );
            animation: firework 2s ease-out infinite;
            --x: calc(var(--rand-x, 0) * 1px);
            --y: calc(var(--rand-y, 0) * -1px);
          }

          .firework:nth-child(1) {
            --rand-x: -100;
            --rand-y: 300;
            background: radial-gradient(
              circle,
              #ffd700 0%,
              #ffd70080 50%,
              transparent 100%
            );
          }
          .firework:nth-child(2) {
            --rand-x: 100;
            --rand-y: 350;
            background: radial-gradient(
              circle,
              #ff6b6b 0%,
              #ff6b6b80 50%,
              transparent 100%
            );
          }
          .firework:nth-child(3) {
            --rand-x: -150;
            --rand-y: 280;
            background: radial-gradient(
              circle,
              #4ecdc4 0%,
              #4ecdc480 50%,
              transparent 100%
            );
          }
          .firework:nth-child(4) {
            --rand-x: 150;
            --rand-y: 320;
            background: radial-gradient(
              circle,
              #95e1d3 0%,
              #95e1d380 50%,
              transparent 100%
            );
          }
          .firework:nth-child(5) {
            --rand-x: -80;
            --rand-y: 380;
            background: radial-gradient(
              circle,
              #f38181 0%,
              #f3818180 50%,
              transparent 100%
            );
          }
          .firework:nth-child(6) {
            --rand-x: 80;
            --rand-y: 290;
            background: radial-gradient(
              circle,
              #aa96da 0%,
              #aa96da80 50%,
              transparent 100%
            );
          }
          .firework:nth-child(7) {
            --rand-x: -120;
            --rand-y: 340;
            background: radial-gradient(
              circle,
              #fcbad3 0%,
              #fcbad380 50%,
              transparent 100%
            );
          }
          .firework:nth-child(8) {
            --rand-x: 120;
            --rand-y: 310;
            background: radial-gradient(
              circle,
              #ffffd2 0%,
              #ffffd280 50%,
              transparent 100%
            );
          }
          .firework:nth-child(9) {
            --rand-x: -90;
            --rand-y: 360;
            background: radial-gradient(
              circle,
              #ffd700 0%,
              #ffd70080 50%,
              transparent 100%
            );
          }
          .firework:nth-child(10) {
            --rand-x: 90;
            --rand-y: 270;
            background: radial-gradient(
              circle,
              #ff6b6b 0%,
              #ff6b6b80 50%,
              transparent 100%
            );
          }
          .firework:nth-child(11) {
            --rand-x: -140;
            --rand-y: 330;
            background: radial-gradient(
              circle,
              #4ecdc4 0%,
              #4ecdc480 50%,
              transparent 100%
            );
          }
          .firework:nth-child(12) {
            --rand-x: 140;
            --rand-y: 300;
            background: radial-gradient(
              circle,
              #95e1d3 0%,
              #95e1d380 50%,
              transparent 100%
            );
          }
        `}</style>
      </section>
    );
  }

  return (
    <section
      aria-labelledby="countdown-heading"
      className="relative mx-auto grid max-w-5xl gap-8 rounded-xl border border-gold/35 bg-gradient-to-br from-night/90 via-onyx/85 to-char/90 px-6 py-14 text-center shadow-[0_40px_120px_-60px_rgba(249,210,122,0.55)] backdrop-blur sm:grid-cols-2 sm:text-left md:px-16"
    >
      <div>
        <p className="font-display text-lg font-semibold uppercase tracking-[0.6em] text-black">
          Save the date
        </p>
        <h2
          id="countdown-heading"
          className="mt-4 font-display text-4xl tracking-tight text-ivory sm:text-5xl"
        >
          The countdown is on
        </h2>
        <p className="mt-4 max-w-md text-base leading-7 text-ivory/85">
          November 29 is racing toward us. RSVP to help us plan accordingly.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:gap-6">
        {[
          { label: "Days", value: time.days },
          { label: "Hours", value: time.hours },
          { label: "Minutes", value: time.minutes },
          { label: "Seconds", value: time.seconds },
        ].map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center justify-center rounded-3xl border border-gold/25 bg-night/80 px-6 py-8 text-center shadow-[inset_0_20px_45px_rgba(249,210,122,0.12)]"
          >
            <span className="font-display text-5xl font-semibold text-black drop-shadow-[0_0_15px_rgba(0,0,0,0.35)] sm:text-6xl">
              {item.value}
            </span>
            <span className="mt-2 text-xs font-semibold uppercase tracking-[0.3em] text-ivory/85">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
