"use client";

import { FormEvent, useState, useEffect } from "react";
import { motion } from "framer-motion";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  attendance: "yes" | "no" | "";
  guests: string;
  message: string;
};

const initialState: FormState = {
  fullName: "",
  email: "",
  phone: "",
  attendance: "",
  guests: "0",
  message: "",
};

export function RsvpSection({ guestName, maxGuests }: { guestName?: string; maxGuests?: number }) {
  const [form, setForm] = useState<FormState>(() => {
    if (typeof window !== 'undefined') {
      const saved = sessionStorage.getItem('rsvpFormData');
      return saved ? JSON.parse(saved) : initialState;
    }
    return initialState;
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [feedback, setFeedback] = useState<string>("");

  // Save form data to sessionStorage whenever it changes
  useEffect(() => {
    sessionStorage.setItem('rsvpFormData', JSON.stringify(form));
  }, [form]);

  // Pre-fill guest name when provided via URL
  useEffect(() => {
    if (guestName) {
      setForm(prev => ({ ...prev, fullName: decodeURIComponent(guestName) }));
    }
  }, [guestName]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    const trimmedForm = {
      fullName: form.fullName.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      attendance: form.attendance,
      guests: form.guests.trim(),
      message: form.message.trim(),
      maxGuests: maxGuests || 10,
    };

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[+]?[-()\d\s]{7,20}$/;

    if (!trimmedForm.fullName) {
      setStatus("error");
      setFeedback("Please share the name we should reserve your seat with.");
      return;
    }

    if (!trimmedForm.email || !emailPattern.test(trimmedForm.email)) {
      setStatus("error");
      setFeedback("Please enter a valid email address so we can reach you.");
      return;
    }

    if (!trimmedForm.phone || !phonePattern.test(trimmedForm.phone)) {
      setStatus("error");
      setFeedback(
        "Please provide a phone number (include country code if outside Nigeria)."
      );
      return;
    }

    if (!trimmedForm.attendance) {
      setStatus("error");
      setFeedback("Kindly let us know if you will join us in person.");
      return;
    }

    const guestCount = Number.parseInt(trimmedForm.guests, 10);
    const maxAllowed = maxGuests || 10;
    if (Number.isNaN(guestCount) || guestCount < 0 || guestCount > maxAllowed) {
      setStatus("error");
      setFeedback(
        `Please share how many guests (including you) are coming — up to ${maxAllowed} seat${maxAllowed > 1 ? 's' : ''}.`
      );
      return;
    }

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...trimmedForm,
          guests: guestCount,
        }),
      });

      if (!response.ok) {
        throw new Error("Network error");
      }

      setStatus("success");
      setFeedback("Thank you! We have received your RSVP.");
      setForm(initialState);
      sessionStorage.removeItem('rsvpFormData');
    } catch (error) {
      console.error(error);
      setStatus("error");
      setFeedback(
        "We were not able to send your RSVP right now. Please try again."
      );
    }
  };

  return (
    <section
      id="rsvp"
      className="relative mx-auto mt-24 max-w-6xl rounded-xl border border-gold/35 bg-gradient-to-br from-night/92 via-onyx/88 to-char/90 px-6 py-16 shadow-[0_50px_140px_-60px_rgba(249,210,122,0.55)] backdrop-blur md:px-16"
    >
      <div className="grid gap-16 lg:grid-cols-[1.1fr,0.9fr]">
        <div>
          <p className="font-display text-lg font-semibold uppercase tracking-[0.3em] text-black">
            RSVP
          </p>
          <h2 className="mt-4 font-display text-2xl tracking-tight text-ivory sm:text-5xl">
            We cannot wait to celebrate with you
          </h2>
          <p className="mt-4 text-base leading-7 text-ivory/70">
            Kindly share your plans so we can prepare better to take care of you.
          </p>
          {status !== "idle" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-6 rounded-xl border px-4 py-3 text-sm leading-6 ${
                status === "success"
                  ? "border-gold/35 bg-night/70"
                  : "border-bronze/30 bg-night/60 text-ivory/70"
              }`}
            >
              {feedback}
            </motion.div>
          )}
        </div>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-xl border border-gold/30 bg-night/80 px-6 py-8 shadow-[0_35px_110px_-60px_rgba(249,210,122,0.45)]"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="fullName"
                className="text-xs uppercase tracking-[0.3em] text-black"
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
                className="mt-2 w-full rounded-xl border border-gold/25 bg-night/70 px-4 py-3 text-sm shadow-[inset_0_12px_35px_rgba(249,210,122,0.08)] outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/25"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-xs uppercase tracking-[0.3em] text-black"
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
                className="mt-2 w-full rounded-xl border border-gold/25 bg-night/70 px-4 py-3 text-sm shadow-[inset_0_12px_35px_rgba(249,210,122,0.08)] outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/25"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="phone"
              className="text-xs uppercase tracking-[0.3em] text-black"
            >
              Phone number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              value={form.phone}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, phone: event.target.value }))
              }
              required
              pattern="^[+]?[-()\\d\\s]{7,20}$"
              title="Phone number with 11 digits."
              className="mt-2 w-full rounded-xl border border-gold/25 bg-night/70 px-4 py-3 text-sm textow-[inset_0_12px_35px_rgba(249,210,122,0.08)] outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/25"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-black">
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
                className="text-xs uppercase tracking-[0.3em] text-black"
              >
                Number of guests (including you)
                {maxGuests && (
                  <span className="ml-2 text-xs text-gold">
                    (Max: {maxGuests})
                  </span>
                )}
              </label>
              <input
                id="guests"
                name="guests"
                type="number"
                min={0}
                max={maxGuests || 10}
                inputMode="numeric"
                value={form.guests}
                onChange={(event) =>
                  setForm((prev) => {
                    const rawValue = event.target.value.replace(/[^0-9]/g, "");
                    if (!rawValue) {
                      return { ...prev, guests: "" };
                    }
                    const nextValue = String(
                      Math.min(Number.parseInt(rawValue, 10), maxGuests || 10)
                    );
                    return {
                      ...prev,
                      guests: nextValue,
                    };
                  })
                }
                className="mt-2 w-full rounded-xl border border-gold/25 bg-night/70 px-4 py-3 text-sm shadow-[inset_0_12px_35px_rgba(249,210,122,0.08)] outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/25"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
           className="inline-flex w-full  items-center justify-center rounded-lg px-8 py-3 text-sm font-semibold uppercase tracking-[0.28em] border"
          >
            {status === "loading" ? "Sending..." : "Send RSVP"}
          </button>
        </form>
      </div>
    </section>
  );
}
