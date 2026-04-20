"use client";

import Link from "next/link";
import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    setErrorMsg("");

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (!accessKey) {
      setStatus("error");
      setErrorMsg(
        "Form is not configured yet. Set NEXT_PUBLIC_WEB3FORMS_KEY in .env.local."
      );
      return;
    }

    const data = new FormData(form);
    data.append("access_key", accessKey);
    data.append("subject", "New message from your portfolio contact form");
    data.append("from_name", "Portfolio Contact Form");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(json.message ?? "Something went wrong. Try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  }

  const inputClass =
    "w-full rounded-lg border border-border bg-surface px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:border-accent transition-colors";

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          required
          name="name"
          type="text"
          placeholder="Name"
          className={inputClass}
        />
        <input
          required
          name="email"
          type="email"
          placeholder="Email"
          className={inputClass}
        />
      </div>
      <textarea
        required
        name="message"
        rows={6}
        placeholder="Your message..."
        className={`${inputClass} resize-y`}
      />

      {/* honeypot — bots fill this, humans don't */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        aria-hidden="true"
        className="hidden"
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-foreground text-background px-5 py-3 font-semibold hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed transition-opacity"
      >
        {status === "sending" ? (
          "Sending…"
        ) : (
          <>
            Send Message <SendIcon />
          </>
        )}
      </button>

      {status === "success" && (
        <p className="text-sm text-accent" role="status">
          Thanks — your message is on its way. I&apos;ll reply soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-400" role="alert">
          {errorMsg}
        </p>
      )}

      <p className="text-xs text-muted">
        By submitting this form, I agree to the{" "}
        <Link href="/privacy.html" className="underline hover:text-foreground">
          privacy policy
        </Link>
        .
      </p>
    </form>
  );
}

function SendIcon() {
  return (
    <svg
      className="size-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 2 11 13" />
      <path d="M22 2 15 22l-4-9-9-4z" />
    </svg>
  );
}
