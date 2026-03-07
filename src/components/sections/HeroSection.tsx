"use client";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const stats = [
  { num: "2×", label: "Production Projects" },
  { num: "236+", label: "Contributions in 2026" },
  { num: "6↑", label: "Team as Tech Lead" },
];

const currentlyItems = [
  { color: "#00e5a0", pulse: true, label: "Flood Rescue", sub: "Sprint 1" },
  { color: "#ffaa00", pulse: false, label: "Tutor Pro", sub: "Production" },
  { color: "var(--accent)", pulse: false, label: "Open to", sub: "Internship 2026" },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-12 pb-20 pt-28"
    >
      {/* Grid background */}
      <div
        className="bg-grid absolute inset-0"
        style={{
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 40%, black 30%, transparent 100%)",
        }}
      />

      {/* Glow orbs */}
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-[600px] w-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(124,106,255,0.18) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-12 left-[10%] h-[400px] w-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0,229,200,0.1) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl">
        <motion.div
          {...fadeUp(0.1)}
          className="mb-7 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--accent)]"
        >
          <span className="h-px w-6 bg-[var(--accent)]" />
          Fullstack Developer · Ho Chi Minh City
        </motion.div>

        <motion.h1
          {...fadeUp(0.2)}
          className="font-display text-[clamp(52px,8vw,96px)] font-black leading-[0.95] tracking-[-0.03em]"
        >
          <div>Tôn Quỳnh</div>
          <div className="text-stroke-accent">Long</div>
        </motion.h1>

        <motion.p
          {...fadeUp(0.35)}
          className="mt-6 mb-12 max-w-[540px] font-display text-[clamp(16px,2.2vw,21px)] font-normal leading-relaxed text-[var(--text-muted)]"
        >
          I{" "}
          <span className="font-medium text-[var(--text)]">design the interface</span>,
          architect the backend,
          <br />
          and{" "}
          <span className="font-medium text-[var(--text)]">ship the whole thing</span> —
          solo or as Tech Lead.
        </motion.p>

        {/* Stats */}
        <motion.div {...fadeUp(0.45)} className="mb-12 flex items-center gap-10">
          {stats.map((s, i) => (
            <div key={s.label} className="flex items-center gap-10">
              <div className="flex flex-col gap-0.5">
                <span className="font-display text-[28px] font-black tracking-tight text-[var(--text)]">
                  {s.num}
                </span>
                <span className="text-xs tracking-wide text-[var(--text-muted)]">{s.label}</span>
              </div>
              {i < stats.length - 1 && (
                <div className="h-10 w-px bg-white/[0.07]" />
              )}
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div {...fadeUp(0.55)} className="flex gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-7 py-3.5 text-[15px] font-medium text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(124,106,255,0.35)]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" />
            </svg>
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-white/[0.07] px-7 py-3.5 text-[15px] font-medium text-[var(--text-muted)] transition-all hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--text)]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Currently widget */}
      <motion.div
        {...fadeUp(0.7)}
        className="absolute bottom-20 right-12 hidden min-w-[260px] rounded-xl border border-white/[0.07] bg-[var(--surface)] p-5 lg:block"
      >
        <p className="mb-3.5 text-[10px] font-medium uppercase tracking-[0.15em] text-[var(--text-dim)]">
          Currently
        </p>
        {currentlyItems.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-2.5 border-b border-white/[0.04] py-1.5 last:border-none text-[13px] text-[var(--text-muted)]"
          >
            <span
              className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
              style={{
                background: item.color,
                boxShadow: item.pulse ? `0 0 6px ${item.color}` : undefined,
                animation: item.pulse ? "pulse 2s infinite" : undefined,
              }}
            />
            <span>
              <strong className="font-medium text-[var(--text)]">{item.label}</strong>{" "}
              — {item.sub}
            </span>
          </div>
        ))}
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        {...fadeUp(0.9)}
        className="absolute bottom-8 left-12 flex items-center gap-2.5 text-[11px] tracking-widest text-[var(--text-dim)]"
      >
        <div className="relative h-px w-8 overflow-hidden bg-[var(--text-dim)]">
          <span
            className="absolute top-0 h-px w-full bg-[var(--accent)]"
            style={{ animation: "scanline 2s linear infinite" }}
          />
        </div>
        Scroll to explore
      </motion.div>
    </section>
  );
}
