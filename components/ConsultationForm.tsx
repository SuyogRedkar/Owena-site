"use client";
import { FormEvent, useState } from "react";
const types = [
  "New Build",
  "Renovation",
  "Interior Design",
  "Interior Execution",
  "Extension",
  "Residential",
  "Commercial",
  "Other",
];
export function ConsultationForm() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong");
      setStatus("Thank you. Your consultation request has been sent.");
      form.reset();
    } catch (err) {
      setStatus(
        err instanceof Error
          ? err.message
          : "Unable to send your request. Please try again.",
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
          <label>Phone *</label>
          <input name="phone" required />
        </div>
        <div className="field">
          <label>Project Location *</label>
          <input name="location" required />
        </div>
        <div className="field full">
          <label>Project Type *</label>
          <div className="checkGroup">
            {types.map((t) => (
              <label className="check" key={t}>
                <input type="checkbox" name="projectType" value={t} />
                {t}
              </label>
            ))}
          </div>
        </div>
        <div className="field">
          <label>Approximate Budget</label>
          <input name="budget" placeholder="e.g. £50,000" />
        </div>
        <div className="field">
          <label>Preferred Consultation Date</label>
          <input type="date" name="date" />
        </div>
        <div className="field full">
          <label>What are you looking to achieve?</label>
          <textarea
            name="message"
            placeholder="Tell us about your space, ideas, requirements and timeline..."
          />
        </div>
        <div className="field full">
          <label>Upload Drawings / Photos (optional)</label>
          <input
            type="file"
            name="files"
            multiple
            accept="image/jpeg,image/png,image/webp,application/pdf"
          />
          <div className="formNote">
            JPG, PNG, WEBP or PDF. Maximum 10 MB total. Files are sent with the
            enquiry email and are not saved to a database.
          </div>
        </div>
        <div className="field full">
          <button className="btn dark" disabled={loading}>
            {loading ? "Sending…" : "Submit Consultation Request ↗"}
          </button>
        </div>
      </div>
    </form>
  );
}
