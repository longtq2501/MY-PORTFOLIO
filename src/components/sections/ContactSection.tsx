"use client";
import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import React from "react";

const contactLinks = [
  {
    href: "mailto:tonquynhlong05@gmail.com",
    label: "tonquynhlong05@gmail.com",
    variant: "primary" as const,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    href: "https://linkedin.com/in/ton-quynh-long-dev",
    label: "LinkedIn",
    variant: "ghost" as const,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    href: "https://github.com/longtq2501",
    label: "GitHub",
    variant: "ghost" as const,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="border-t border-white/[0.07] bg-[var(--bg)] px-12 py-32 text-center"
    >
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionLabel className="justify-center mb-6">{t("contact.title")}</SectionLabel>
          <h2 className="mb-5 font-display text-[clamp(36px,6vw,64px)] font-black leading-[1.05] tracking-[-0.03em]">
            {t("contact.heading").split(/\{(.*?)\}/).map((part, i) => {
              if (part === "something") return <span key={i} className="text-stroke-accent">{t("contact.something")}</span>;
              return <React.Fragment key={i}>{part}</React.Fragment>;
            })}
          </h2>
          <p className="mb-10 text-[16px] leading-[1.7] text-[var(--text-muted)] whitespace-pre-line">
            {t("contact.para")}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={
                  link.variant === "primary"
                    ? "inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-7 py-3.5 text-[15px] font-medium text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(124,106,255,0.35)]"
                    : "inline-flex items-center gap-2 rounded-lg border border-white/[0.07] px-7 py-3.5 text-[15px] font-medium text-[var(--text-muted)] transition-all hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--text)]"
                }
              >
                {link.icon}
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
