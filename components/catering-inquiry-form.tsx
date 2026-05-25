"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { RESTAURANT } from "@/lib/constants";
import {
  CATERING_EVENT_TYPES,
  CATERING_GUEST_COUNTS,
  CATERING_SERVICE_TYPE_OPTIONS,
} from "@/lib/catering-data";

type FormStatus = "idle" | "submitting" | "success" | "error";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  guestCount: string;
  serviceStyle: string;
  venue: string;
  dietaryNotes: string;
  hearAbout: string;
}

const INITIAL: FormData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  eventType: "",
  eventDate: "",
  guestCount: "",
  serviceStyle: "",
  venue: "",
  dietaryNotes: "",
  hearAbout: "",
};

export default function CateringInquiryForm() {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const update = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/catering", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = (await res.json()) as { error?: string };
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      const submittedName = form.name;
      setForm(INITIAL);
      setSubmittedName(submittedName);
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please call us directly."
      );
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-olive/30 bg-olive/10 px-8 py-12 text-center">
        <CheckCircle2 size={48} className="mx-auto text-olive mb-4" />
        <h3 className="font-heading text-2xl font-bold text-stone mb-3">
          Inquiry Received!
        </h3>
        <p className="text-warm-gray leading-relaxed max-w-md mx-auto">
          Thank you, {submittedName || "there"}. Our catering team will respond within{" "}
          <strong>24 hours</strong> (often same day) with a custom quote. For
          urgent requests, call{" "}
          <a
            href={`tel:${RESTAURANT.phone.replace(/\D/g, "")}`}
            className="text-crimson font-semibold hover:underline"
          >
            {RESTAURANT.phone}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-crimson hover:underline"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-stone/15 bg-white px-4 py-3 text-sm text-stone placeholder:text-stone/40 transition-colors focus:border-crimson focus:outline-none focus:ring-2 focus:ring-crimson/20";
  const labelClass = "block text-sm font-semibold text-stone mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === "error" && (
        <div className="flex items-start gap-3 rounded-xl border border-crimson/30 bg-crimson/5 px-4 py-3 text-sm text-crimson">
          <AlertCircle size={18} className="shrink-0 mt-0.5" />
          <div>
            <p>{errorMsg}</p>
            <p className="mt-1 text-warm-gray">
              Or email{" "}
              <a
                href={`mailto:${RESTAURANT.cateringEmail}`}
                className="font-semibold underline"
              >
                {RESTAURANT.cateringEmail}
              </a>{" "}
              directly.
            </p>
          </div>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full Name <span className="text-crimson">*</span>
          </label>
          <input
            id="name"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className={inputClass}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>
            Company / Organization
          </label>
          <input
            id="company"
            type="text"
            autoComplete="organization"
            value={form.company}
            onChange={(e) => update("company", e.target.value)}
            className={inputClass}
            placeholder="Company name (optional)"
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-crimson">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className={inputClass}
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone <span className="text-crimson">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            required
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={inputClass}
            placeholder="(702) 555-0100"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="eventType" className={labelClass}>
            Event Type <span className="text-crimson">*</span>
          </label>
          <select
            id="eventType"
            required
            value={form.eventType}
            onChange={(e) => update("eventType", e.target.value)}
            className={inputClass}
          >
            <option value="">Select event type</option>
            {CATERING_EVENT_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="eventDate" className={labelClass}>
            Event Date <span className="text-crimson">*</span>
          </label>
          <input
            id="eventDate"
            type="date"
            required
            value={form.eventDate}
            onChange={(e) => update("eventDate", e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="guestCount" className={labelClass}>
            Estimated Guest Count <span className="text-crimson">*</span>
          </label>
          <select
            id="guestCount"
            required
            value={form.guestCount}
            onChange={(e) => update("guestCount", e.target.value)}
            className={inputClass}
          >
            <option value="">Select guest count</option>
            {CATERING_GUEST_COUNTS.map((g) => (
              <option key={g} value={g}>
                {g} guests
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="serviceStyle" className={labelClass}>
            Preferred Service Style <span className="text-crimson">*</span>
          </label>
          <select
            id="serviceStyle"
            required
            value={form.serviceStyle}
            onChange={(e) => update("serviceStyle", e.target.value)}
            className={inputClass}
          >
            <option value="">Select service style</option>
            {CATERING_SERVICE_TYPE_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="venue" className={labelClass}>
          Delivery / Event Address <span className="text-crimson">*</span>
        </label>
        <input
          id="venue"
          type="text"
          required
          value={form.venue}
          onChange={(e) => update("venue", e.target.value)}
          className={inputClass}
          placeholder="Venue name and full address in Las Vegas"
        />
      </div>

      <div>
        <label htmlFor="dietaryNotes" className={labelClass}>
          Menu Preferences & Dietary Notes
        </label>
        <textarea
          id="dietaryNotes"
          rows={4}
          value={form.dietaryNotes}
          onChange={(e) => update("dietaryNotes", e.target.value)}
          className={inputClass}
          placeholder="Proteins (beef & lamb, chicken, falafel), allergies, Halal requirements, budget range, setup needs..."
        />
      </div>

      <div>
        <label htmlFor="hearAbout" className={labelClass}>
          How did you hear about us?
        </label>
        <input
          id="hearAbout"
          type="text"
          value={form.hearAbout}
          onChange={(e) => update("hearAbout", e.target.value)}
          className={inputClass}
          placeholder="Google, Instagram, referral, convention, etc."
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-crimson px-8 py-4 text-base font-semibold text-cream transition-all hover:bg-crimson-light hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            Sending Inquiry...
          </>
        ) : (
          "Request Catering Quote"
        )}
      </button>

      <p className="text-center text-xs text-warm-gray">
        By submitting, you agree to be contacted about your catering inquiry.
        We respond within 24 hours. Questions? Call{" "}
        <a
          href={`tel:${RESTAURANT.phone.replace(/\D/g, "")}`}
          className="text-crimson font-semibold hover:underline"
        >
          {RESTAURANT.phone}
        </a>{" "}
        or email{" "}
        <a
          href={`mailto:${RESTAURANT.cateringEmail}`}
          className="text-crimson font-semibold hover:underline"
        >
          {RESTAURANT.cateringEmail}
        </a>
        .
      </p>
    </form>
  );
}
