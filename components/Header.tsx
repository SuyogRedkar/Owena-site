"use client";
import Link from "next/link";
import { useState } from "react";
export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="nav">
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Link
          href="/"
          className="brand"
          onClick={close}
          aria-label="Souza Designers & Builders home"
        >
          <img
            src="/images/logo.jpeg"
            alt="Souza Designers & Builders"
            className="brandLogo"
          />
        </Link>
        <button
          className="mobileMenu"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <nav className={"navlinks " + (open ? "open" : "")}>
          <Link href="/" onClick={close}>
            Home
          </Link>
          <Link href="/about" onClick={close}>
            About
          </Link>
          <Link href="/projects" onClick={close}>
            Projects
          </Link>
          <Link href="/services" onClick={close}>
            Services
          </Link>
          <Link href="/process" onClick={close}>
            Process
          </Link>
          <Link href="/consultation" className="btn dark" onClick={close}>
            Book a Consultation
          </Link>
        </nav>
      </div>
    </header>
  );
}
