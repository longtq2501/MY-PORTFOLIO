"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrolled } from "@/hooks/useScrolled";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
];

const contacts = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    label: "GitHub",
    value: "longtq2501",
    href: "https://github.com/longtq2501",
    accent: "#7c6aff",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: "LinkedIn",
    value: "ton-quynh-long-dev",
    href: "https://linkedin.com/in/ton-quynh-long-dev",
    accent: "#0077b5",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Email",
    value: "tonquynhlong05@gmail.com",
    href: "mailto:tonquynhlong05@gmail.com",
    accent: "#00e5c8",
  },
];

export default function Navbar() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 md:px-12 ${scrolled
            ? "border-b border-white/[0.07] bg-[#08080f]/90 backdrop-blur-xl"
            : "bg-transparent"
          }`}
      >
        <Link href="/" className="font-display text-[18px] font-black tracking-[-0.04em] text-white">
          TQL.
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}
              className="text-[13px] font-medium text-[#a0a0b8] transition-colors hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-2 rounded-md bg-[var(--accent)] px-4 py-2 text-[13px] font-semibold text-white transition-all hover:opacity-85 hover:-translate-y-px"
        >
          Get in touch
        </button>
      </header>

      {/* ── Modal ── */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm"
            />

            {/* Panel — fixed inset-0 + flex for true centering */}
            <div className="pointer-events-none fixed inset-0 z-[70] flex items-center justify-center px-4">
              <motion.div
                key="modal"
                initial={{ opacity: 0, scale: 0.95, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 12 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="pointer-events-auto w-full max-w-md overflow-hidden rounded-2xl border border-white/[0.1] bg-[#0e0e1a] shadow-2xl"
              >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/[0.07] px-6 py-5">
                  <div>
                    <h2 className="font-display text-[20px] font-black tracking-[-0.02em] text-white">
                      Let&apos;s connect
                    </h2>
                    <p className="mt-0.5 text-[13px] text-[#7070a0]">
                      Open to internship &amp; fresher roles 2026
                    </p>
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.07] text-[#7070a0] transition-colors hover:border-white/[0.2] hover:text-white"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>

                {/* Links */}
                <div className="space-y-3 p-6">
                  {contacts.map((c) => (
                    <a
                      key={c.label}
                      href={c.href}
                      target={c.href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 rounded-xl border border-white/[0.07] bg-white/[0.03] p-4 transition-all hover:border-white/[0.15] hover:bg-white/[0.06]"
                    >
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg"
                        style={{ background: `${c.accent}18`, color: c.accent }}>
                        {c.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-[11px] font-semibold uppercase tracking-wider text-[#555566]">{c.label}</div>
                        <div className="truncate text-[14px] font-medium text-[#c8c6e8]">{c.value}</div>
                      </div>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                        className="flex-shrink-0 text-[#444455] transition-colors group-hover:text-[#9090aa]">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  ))}

                  {/* CV Download */}
                  <a
                    href="/cv/Ton Quynh Long - resume.pdf"
                    download="Ton-Quynh-Long-CV.pdf"
                    className="group flex w-full items-center gap-4 rounded-xl border border-[rgba(124,106,255,0.25)] bg-[rgba(124,106,255,0.06)] p-4 transition-all hover:border-[rgba(124,106,255,0.5)] hover:bg-[rgba(124,106,255,0.1)]"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[rgba(124,106,255,0.15)] text-[var(--accent)]">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-[#555566]">Resume</div>
                      <div className="text-[14px] font-medium text-[#c8c6e8]">Download CV (.pdf)</div>
                    </div>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                      className="flex-shrink-0 text-[#444455] transition-colors group-hover:text-[var(--accent)]">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}