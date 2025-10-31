"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

type FormState = {
  fullName: string;
  email: string;
  attendance: "yes" | "no" | "";
  guests: string;
  message: string;
};

const initialState: FormState = {
  fullName: "",
  email: "",
  attendance: "",
  guests: "0",
  message: "",
};

export function RsvpSection() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [feedback, setFeedback] = useState<string>("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    if (!form.fullName || !form.email || !form.attendance) {
      setStatus("error");
      setFeedback(
        "Please fill in your name, email, and attendance preference."
      );
      return;
    }

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Network error");
      }

      setStatus("success");
      setFeedback("Thank you! We have received your RSVP.");
      setForm(initialState);
    } catch (error) {
      console.error(error);
      setStatus("error");
      setFeedback(
        "We were not able to send your RSVP right now. Please try again or email hello@radiantvows.ng."
      );
    }
  };

  return (
    <section
      id="rsvp"
      className="relative mx-auto mt-24 max-w-6xl rounded-[3.5rem] border border-gold/35 bg-gradient-to-br from-night/92 via-onyx/88 to-char/90 px-6 py-20 shadow-[0_50px_140px_-60px_rgba(249,210,122,0.55)] backdrop-blur md:px-16"
    >
      <div className="grid gap-16 lg:grid-cols-[1.1fr,0.9fr]">
        <div>
          <p className="font-display text-xs uppercase tracking-[0.6em] text-gold">
            RSVP
          </p>
          <h2 className="mt-4 font-display text-4xl tracking-tight text-ivory sm:text-5xl">
            We cannot wait to celebrate with you
          </h2>
          <p className="mt-4 text-base leading-7 text-ivory/70">
            Kindly share your plans so we can set your place and personalise
            treats. We will take care of you.
          </p>
          {status !== "idle" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-6 rounded-3xl border px-4 py-3 text-sm leading-6 ${
                status === "success"
                  ? "border-gold/35 bg-night/70 text-gilded"
                  : "border-bronze/30 bg-night/60 text-ivory/70"
              }`}
            >
              {feedback}
            </motion.div>
          )}
        </div>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-[2.5rem] border border-gold/30 bg-night/80 px-6 py-8 shadow-[0_35px_110px_-60px_rgba(249,210,122,0.45)]"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="fullName"
                className="text-xs uppercase tracking-[0.3em] text-gold"
              >
                Full name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={form.fullName}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, fullName: event.target.value }))
                }
                required
                className="mt-2 w-full rounded-2xl border border-gold/25 bg-night/70 px-4 py-3 text-sm text-ivory shadow-[inset_0_12px_35px_rgba(249,210,122,0.08)] outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/25"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-xs uppercase tracking-[0.3em] text-gold"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, email: event.target.value }))
                }
                required
                className="mt-2 w-full rounded-2xl border border-gold/25 bg-night/70 px-4 py-3 text-sm text-ivory shadow-[inset_0_12px_35px_rgba(249,210,122,0.08)] outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/25"
              />
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">
              Will you join us?
            </p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {[
                { label: "Joyfully accepting", value: "yes" as const },
                { label: "Sending love from afar", value: "no" as const },
              ].map((option) => (
                <label
                  key={option.value}
                  className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-sm shadow-[inset_0_15px_30px_rgba(249,210,122,0.08)] transition ${
                    form.attendance === option.value
                      ? "border-gold/45 bg-night/85 text-gilded"
                      : "border-gold/25 bg-night/70 text-ivory"
                  }`}
                >
                  <span>{option.label}</span>
                  <input
                    type="radio"
                    name="attendance"
                    value={option.value}
                    checked={form.attendance === option.value}
                    onChange={(event) =>
                      setForm((prev) => ({
                        ...prev,
                        attendance: event.target.value as "yes" | "no",
                      }))
                    }
                    className="h-4 w-4 border-gold accent-gold"
                  />
                </label>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="guests"
                className="text-xs uppercase tracking-[0.3em] text-gold"
              >
                Number of guests (including you)
              </label>
              <input
                id="guests"
                name="guests"
                type="number"
                min={0}
                max={6}
                value={form.guests}
                onChange={(event) =>
                  setForm((prev) => ({
                    ...prev,
                    guests: event.target.value,
                  }))
                }
                className="mt-2 w-full rounded-2xl border border-gold/25 bg-night/70 px-4 py-3 text-sm text-ivory shadow-[inset_0_12px_35px_rgba(249,210,122,0.08)] outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/25"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="message"
              className="text-xs uppercase tracking-[0.3em] text-gold"
            >
              Notes or Extras
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={(event) =>
                setForm((prev) => ({
                  ...prev,
                  message: event.target.value,
                }))
              }
              rows={4}
              className="mt-2 w-full rounded-2xl border border-gold/25 bg-night/70 px-4 py-3 text-sm text-ivory shadow-[inset_0_12px_35px_rgba(249,210,122,0.08)] outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/25"
            />
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-ember via-gold to-gilded px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-ink shadow-[0_18px_60px_rgba(246,196,92,0.45)] transition hover:shadow-[0_20px_70px_rgba(249,210,122,0.6)] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "loading" ? "Sending..." : "Send RSVP"}
          </button>
        </form>
      </div>
    </section>
  );
}
