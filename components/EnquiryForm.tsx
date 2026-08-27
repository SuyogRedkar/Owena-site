"use client";
import { FormEvent, useState } from "react";
export function EnquiryForm() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    const form = e.currentTarget;
    try {
      const r = await fetch("/api/enquiry", {
        method: "POST",
        body: new FormData(form),
      });
      const j = await r.json();
      if (!r.ok) throw new Error(j.error || "Unable to send enquiry");
      setStatus("Thank you. Your message has been sent.");
      form.reset();
    } catch (e) {
      setStatus(
        e instanceof Error ? e.message : "Unable to send your message.",
      );
    } finally {
      setLoading(false);
    }
  }
  return (
    <form className="formShell" onSubmit={submit}>
      {status && <div className="status">{status}</div>}
      <div className="formGrid">
        <div className="field">
          <label>Name *</label>
          <input name="name" required />
        </div>
        <div className="field">
          <label>Email *</label>
          <input type="email" name="email" required />
        </div>
        <div className="field">
          <label>Phone</label>
          <input name="phone" />
        </div>
        <div className="field">
          <label>Subject</label>
          <input name="subject" />
        </div>
        <div className="field full">
          <label>Message *</label>
          <textarea name="message" required />
        </div>
        <div className="field full">
          <button className="btn dark" disabled={loading}>
            {loading ? "Sending…" : "Send Message ↗"}
          </button>
        </div>
      </div>
    </form>
  );
}
