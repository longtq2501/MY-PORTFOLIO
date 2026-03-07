"use client";
import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";

const cards = [
  {
    badge: "SOLO PROJECT",
    badgeColor: "accent",
    status: "Live in Production",
    title: "Tutor Pro",
    desc: "EdTech SaaS — 10+ active users, 19 backend modules, WebRTC live classroom, AI feedback engine (Groq Llama 3.3 70B)",
  },
  {
    badge: "TECH LEAD · 6-person team",
    badgeColor: "accent",
    status: null,
    title: "Flood Rescue Coordination",
    desc: "Microservices platform — RabbitMQ + Kafka, GPS live tracking, 5 actor roles, Docker + CI/CD on VPS",
  },
  {
    badge: "EDUCATION",
    badgeColor: "dim",
    status: null,
    title: "UTH — University of Transport HCMC",
    desc: "Bachelor's in Information Technology · 2023 – 2027",
  },
];

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

export default function AboutSection() {
  return (
    <section
      id="about"
      className="border-y border-white/[0.07] bg-[var(--bg2)] px-12 py-32"
    >
      <SectionLabel>About</SectionLabel>
      <motion.h2
        {...reveal}
        className="font-display text-[clamp(32px,5vw,52px)] font-black leading-[1.1] tracking-[-0.02em]"
      >
        I build things people
        <br />
        actually use.
      </motion.h2>

      <div className="mt-16 grid grid-cols-1 gap-20 lg:grid-cols-2">
        {/* Left: text */}
        <motion.div
          {...reveal}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-5"
        >
          {[
            <>
              I&apos;m a <strong className="font-medium text-[var(--text)]">third-year IT student</strong> at UTH —
              but my projects don&apos;t look like coursework. Tutor Pro started as a tool I built
              to manage my own tutoring business. It grew into a{" "}
              <span className="text-[var(--accent)]">full EdTech platform</span> with WebRTC live
              rooms, AI feedback, VietQR invoicing, and a real-time notification engine. It&apos;s
              running in production right now.
            </>,
            <>
              Simultaneously, I&apos;m leading a{" "}
              <strong className="font-medium text-[var(--text)]">6-person team</strong> building a
              microservices platform for flood rescue coordination — responsible for architecture,
              infra setup, CI/CD pipeline, and sprint management via Jira. Two production-level
              projects, running in parallel, year 3.
            </>,
            <>
              Fullstack means I care about both sides equally. The performance of a Spring Boot
              batch insert matters as much as the smoothness of a Framer Motion transition. I
              design, I code, I ship.
            </>,
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
