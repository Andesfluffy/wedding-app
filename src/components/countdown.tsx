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

  useEffect(() => {
    const updateTime = () => {
      setTime(getTimeRemaining(targetDate));
    };

    updateTime();
    const interval = window.setInterval(updateTime, 1000);
    return () => window.clearInterval(interval);
  }, [targetDate]);

  return (
    <section
      aria-labelledby="countdown-heading"
      className="relative mx-auto mt-10 grid max-w-5xl gap-8 rounded-[3rem] border border-white/50 bg-white/80 px-6 py-14 text-center shadow-xl shadow-olive/5 backdrop-blur sm:grid-cols-2 sm:text-left md:px-16"
    >
      <div>
        <p className="font-display text-xs uppercase tracking-[0.6em] text-olive/70">
          Save the date
        </p>
        <h2
          id="countdown-heading"
          className="mt-4 font-display text-4xl tracking-tight text-ink sm:text-5xl"
        >
          The countdown is on
        </h2>
        <p className="mt-4 max-w-md text-base leading-7 text-ink/70">
          November 29 is racing toward us. RSVP to secure your seat, share your
          celebration needs, and help us keep every joyful detail running like
          clockwork.
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
            className="flex flex-col items-center justify-center rounded-3xl bg-cream px-6 py-8 text-center shadow-inner shadow-olive/5"
          >
            <span className="font-display text-4xl text-ink">
              {item.value}
            </span>
            <span className="mt-2 text-xs uppercase tracking-[0.3em] text-ink/60">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
