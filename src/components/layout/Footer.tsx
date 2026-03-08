'use client'

import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="flex flex-col items-center justify-between gap-3 border-t border-white/[0.07] px-12 py-7 sm:flex-row">
      <span className="text-[13px] text-[var(--text-dim)]">© 2026 Tôn Quỳnh Long</span>
      <span className="text-[13px] text-[var(--text-dim)]">{t("footer.builtBy")}</span>
      <div className="flex gap-5">
        {[
          { href: "https://github.com/longtq2501", label: "GitHub" },
          { href: "https://linkedin.com/in/ton-quynh-long-dev", label: "LinkedIn" },
        ].map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
          >
            {l.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
