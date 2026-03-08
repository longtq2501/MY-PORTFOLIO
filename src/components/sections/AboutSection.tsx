"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function AboutSection() {
  const { t } = useLanguage();

  const cards = [
    {
      badge: t("about.cards.solo"),
      badgeColor: "accent",
      status: t("about.cards.live"),
      title: "Tutor Pro",
      desc: t("about.cards.tutorProDesc"),
    },
    {
      badge: t("about.cards.techLead"),
      badgeColor: "accent",
      status: null,
      title: "Flood Rescue Coordination",
      desc: t("about.cards.floodRescueDesc"),
    },
    {
      badge: t("about.cards.education"),
      badgeColor: "dim",
      status: null,
      title: t("about.cards.uth"),
      desc: t("about.cards.degree"),
    },
  ];

  const reveal = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  };

  return (
    <section
      id="about"
      className="border-y border-white/[0.07] bg-[var(--bg2)] px-12 py-32"
    >
      <SectionLabel>{t("about.title")}</SectionLabel>
      <motion.h2
        {...reveal}
        className="font-display text-[clamp(32px,5vw,52px)] font-black leading-[1.1] tracking-[-0.02em]"
      >
        {t("about.heading").split("\n").map((line, i) => (
          <React.Fragment key={i}>
            {line}
            {i < t("about.heading").split("\n").length - 1 && <br />}
          </React.Fragment>
        ))}
      </motion.h2>

      <div className="mt-16 grid grid-cols-1 gap-20 lg:grid-cols-2">
        {/* Left: text */}
        <motion.div
          {...reveal}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-5"
        >
          {[
            t("about.para1").split(/\{(.*?)\}/).map((part, i) => {
              if (part === "thirdYear") return <strong key={i} className="font-medium text-[var(--text)]">{t("about.thirdYear")}</strong>;
              if (part === "fullEdTech") return <span key={i} className="text-[var(--accent)]">{t("about.fullEdTech")}</span>;
              return part;
            }),
            t("about.para2").split(/\{(.*?)\}/).map((part, i) => {
              if (part === "sixPerson") return <strong key={i} className="font-medium text-[var(--text)]">{t("about.sixPerson")}</strong>;
              return part;
            }),
            t("about.para3")
          ].map((para, i) => (
            <p key={i} className="text-[16px] leading-[1.8] text-[var(--text-muted)]">
              {para}
            </p>
          ))}
        </motion.div>

        {/* Right: cards */}
        <div className="flex flex-col gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] }}
              className="group rounded-xl border border-white/[0.07] bg-[var(--surface)] p-6 transition-colors hover:border-[rgba(124,106,255,0.3)]"
            >
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="rounded px-2.5 py-0.5 text-[11px] font-semibold tracking-wide bg-[rgba(124,106,255,0.12)] border border-[rgba(124,106,255,0.25)] text-[var(--accent)]">
                  {card.badge}
                </span>
                {card.status && (
                  <span className="inline-flex items-center gap-1.5 rounded px-2.5 py-0.5 text-[11px] font-medium bg-[rgba(0,229,160,0.08)] border border-[rgba(0,229,160,0.2)] text-[#00e5a0]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#00e5a0] animate-pulse" />
                    {card.status}
                  </span>
                )}
              </div>
              <h3 className="mb-1.5 font-display text-[17px] font-bold text-[var(--text)]">
                {card.title}
              </h3>
              <p className="text-[13px] text-[var(--text-muted)]">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
