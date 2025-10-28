"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

type FormState = {
  fullName: string;
  email: string;
  attendance: "yes" | "no" | "";
  guests: string;
  shuttle: boolean;
  message: string;
};

const initialState: FormState = {
  fullName: "",
  email: "",
  attendance: "",
  guests: "0",
  shuttle: false,
  message: "",
};

export function RsvpSection() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [feedback, setFeedback] = useState<string>("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    if (!form.fullName || !form.email || !form.attendance) {
      setStatus("error");
      setFeedback("Please fill in your name, email, and attendance preference.");
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
      setFeedback(
        "Thank you! We have received your RSVP and will send final wedding day details in October."
      );
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
      className="relative mx-auto mt-24 max-w-6xl rounded-[3.5rem] border border-gold/45 bg-gradient-to-br from-pearl/96 via-porcelain/90 to-champagne/88 px-6 py-20 shadow-[0_50px_140px_-60px_rgba(210,163,60,0.55)] backdrop-blur md:px-16"
    >
      <div className="grid gap-16 lg:grid-cols-[1.1fr,0.9fr]">
        <div>
          <p className="font-display text-xs uppercase tracking-[0.6em] text-gold/80">
            RSVP
          </p>
          <h2 className="mt-4 font-display text-4xl tracking-tight text-ivory sm:text-5xl">
            We cannot wait to celebrate with you
          </h2>
          <p className="mt-4 text-base leading-7 text-ink/75">
            Kindly share your plans so we can set your place, personalise
            treats, and coordinate valet support. Prefer email? Reach out to{" "}
            hello@radiantvows.ng and we will take care of you.
          </p>
          {status !== "idle" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-6 rounded-3xl border px-4 py-3 text-sm leading-6 ${
                status === "success"
                  ? "border-gold/40 bg-pearl/80 text-ink"
                  : "border-bronze/35 bg-pearl/75 text-ink/80"
              }`}
            >
              {feedback}
            </motion.div>
          )}
        </div>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-[2.5rem] border border-gold/40 bg-pearl/85 px-6 py-8 shadow-[0_35px_110px_-60px_rgba(210,163,60,0.5)]"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="fullName"
                className="text-xs uppercase tracking-[0.3em] text-gold/70"
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
                className="mt-2 w-full rounded-2xl border border-gold/30 bg-pearl/80 px-4 py-3 text-sm text-ink shadow-[inset_0_12px_35px_rgba(223,179,74,0.12)] outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/25"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-xs uppercase tracking-[0.3em] text-gold/70"
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
                className="mt-2 w-full rounded-2xl border border-gold/30 bg-pearl/80 px-4 py-3 text-sm text-ink shadow-[inset_0_12px_35px_rgba(223,179,74,0.12)] outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/25"
              />
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold/70">
              Will you join us?
            </p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {[
                { label: "Joyfully accepting", value: "yes" as const },
                { label: "Sending love from afar", value: "no" as const },
              ].map((option) => (
                <label
                  key={option.value}
                  className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-sm shadow-[inset_0_15px_30px_rgba(223,179,74,0.12)] transition ${
                    form.attendance === option.value
                      ? "border-gold/50 bg-pearl/90 text-ink"
                      : "border-gold/30 bg-pearl/80 text-ink/75"
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
                className="text-xs uppercase tracking-[0.3em] text-gold/70"
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
                className="mt-2 w-full rounded-2xl border border-gold/30 bg-pearl/80 px-4 py-3 text-sm text-ink shadow-[inset_0_12px_35px_rgba(223,179,74,0.12)] outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/25"
              />
            </div>
            <label className="flex items-center gap-3 rounded-2xl border border-gold/30 bg-pearl/80 px-4 py-3 text-sm text-ink shadow-[inset_0_12px_35px_rgba(223,179,74,0.12)]">
              <input
                type="checkbox"
                checked={form.shuttle}
                onChange={(event) =>
                  setForm((prev) => ({
                    ...prev,
                    shuttle: event.target.checked,
                  }))
                }
                className="h-4 w-4 border-gold accent-gold"
              />
              Please reserve valet or ride support for me
            </label>
          </div>
          <div>
            <label
              htmlFor="message"
              className="text-xs uppercase tracking-[0.3em] text-gold/70"
            >
              Notes, allergies, or song requests
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
              className="mt-2 w-full rounded-2xl border border-gold/30 bg-pearl/80 px-4 py-3 text-sm text-ink shadow-[inset_0_12px_35px_rgba(223,179,74,0.12)] outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/25"
            />
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-ember via-gold to-gilded px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-ink shadow-[0_20px_65px_rgba(223,179,74,0.5)] transition hover:shadow-[0_24px_85px_rgba(229,192,110,0.65)] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "loading" ? "Sending..." : "Send RSVP"}
          </button>
        </form>
      </div>
    </section>
  );
}
