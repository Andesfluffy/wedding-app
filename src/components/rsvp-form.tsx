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
        "Thank you! We have received your RSVP and will send final Lagos weekend details in October."
      );
      setForm(initialState);
    } catch (error) {
      console.error(error);
      setStatus("error");
      setFeedback(
        "We were not able to send your RSVP right now. Please try again or email team@ifeweddings.com."
      );
    }
  };

  return (
    <section
      id="rsvp"
      className="relative mx-auto mt-24 max-w-6xl rounded-[3.5rem] border border-white/50 bg-white/90 px-6 py-20 shadow-2xl shadow-olive/10 backdrop-blur md:px-16"
    >
      <div className="grid gap-16 lg:grid-cols-[1.1fr,0.9fr]">
        <div>
          <p className="font-display text-xs uppercase tracking-[0.6em] text-olive/70">
            RSVP
          </p>
          <h2 className="mt-4 font-display text-4xl tracking-tight text-ink sm:text-5xl">
            We cannot wait to celebrate with you
          </h2>
          <p className="mt-4 text-base leading-7 text-ink/70">
            Kindly share your plans so we can set your place, prepare fabrics,
            and coordinate valet support. Prefer email? Reach out to{" "}
            team@ifeweddings.com and we will take care of you.
          </p>
          {status !== "idle" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-6 rounded-3xl border px-4 py-3 text-sm leading-6 ${
                status === "success"
                  ? "border-olive/20 bg-cream/80 text-olive/90"
                  : "border-ink/10 bg-cream/60 text-ink/70"
              }`}
            >
              {feedback}
            </motion.div>
          )}
        </div>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-[2.5rem] border border-olive/15 bg-cream/75 px-6 py-8 shadow-xl shadow-olive/10"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="fullName"
                className="text-xs uppercase tracking-[0.3em] text-olive/70"
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
                className="mt-2 w-full rounded-2xl border border-olive/20 bg-white/80 px-4 py-3 text-sm text-ink shadow-inner shadow-olive/10 outline-none transition focus:border-olive focus:ring-2 focus:ring-olive/20"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-xs uppercase tracking-[0.3em] text-olive/70"
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
                className="mt-2 w-full rounded-2xl border border-olive/20 bg-white/80 px-4 py-3 text-sm text-ink shadow-inner shadow-olive/10 outline-none transition focus:border-olive focus:ring-2 focus:ring-olive/20"
              />
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-olive/70">
              Will you join us?
            </p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {[
                { label: "Joyfully accepting", value: "yes" as const },
                { label: "Sending love from afar", value: "no" as const },
              ].map((option) => (
                <label
                  key={option.value}
                  className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-sm shadow-inner shadow-olive/10 transition ${
                    form.attendance === option.value
                      ? "border-olive/40 bg-white"
                      : "border-olive/20 bg-white/80"
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
                    className="h-4 w-4 border-olive accent-olive"
                  />
                </label>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="guests"
                className="text-xs uppercase tracking-[0.3em] text-olive/70"
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
                className="mt-2 w-full rounded-2xl border border-olive/20 bg-white/80 px-4 py-3 text-sm text-ink shadow-inner shadow-olive/10 outline-none transition focus:border-olive focus:ring-2 focus:ring-olive/20"
              />
            </div>
            <label className="flex items-center gap-3 rounded-2xl border border-olive/20 bg-white/80 px-4 py-3 text-sm shadow-inner shadow-olive/10">
              <input
                type="checkbox"
                checked={form.shuttle}
                onChange={(event) =>
                  setForm((prev) => ({
                    ...prev,
                    shuttle: event.target.checked,
                  }))
                }
                className="h-4 w-4 border-olive accent-olive"
              />
              Please reserve valet or ride support for me
            </label>
          </div>
          <div>
            <label
              htmlFor="message"
              className="text-xs uppercase tracking-[0.3em] text-olive/70"
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
              className="mt-2 w-full rounded-2xl border border-olive/20 bg-white/80 px-4 py-3 text-sm text-ink shadow-inner shadow-olive/10 outline-none transition focus:border-olive focus:ring-2 focus:ring-olive/20"
            />
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex w-full items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-ink/20 transition hover:bg-ink/90 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "loading" ? "Sending..." : "Send RSVP"}
          </button>
        </form>
      </div>
    </section>
  );
}
