"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const CODE_LINES = [
  { text: "// Bulk calendar engine — O(1) deduplication", color: "#555577", delay: 0 },
  { text: "public void bulkCreateSessions(", color: "#c8c6e8", delay: 120 },
  { text: "    BulkSessionRequest req) {", color: "#c8c6e8", delay: 200 },
  { text: "", color: "", delay: 280 },
  { text: "  BitSet occupied =", color: "#c8c6e8", delay: 360 },
  { text: "    loadOccupiedSlots(", color: "#7c6aff", delay: 420 },
  { text: "      req.tutorId, req.range);", color: "#c8c6e8", delay: 480 },
  { text: "", color: "", delay: 560 },
  { text: "  List<SessionRow> toInsert", color: "#c8c6e8", delay: 640 },
  { text: "    = new ArrayList<>();", color: "#c8c6e8", delay: 700 },
  { text: "", color: "", delay: 760 },
  { text: "  for (LocalDate d = req.start;", color: "#c8c6e8", delay: 840 },
  { text: "       !d.isAfter(req.end);", color: "#c8c6e8", delay: 900 },
  { text: "       d = d.plusDays(1)) {", color: "#c8c6e8", delay: 960 },
  { text: "    int slot = (int) d.toEpochDay();", color: "#c8c6e8", delay: 1040 },
  { text: "    if (!occupied.get(slot)) {", color: "#00e5a0", delay: 1120 },
  { text: "      toInsert.add(", color: "#7c6aff", delay: 1200 },
  { text: "        new SessionRow(d, req));", color: "#c8c6e8", delay: 1260 },
  { text: "      occupied.set(slot);", color: "#c8c6e8", delay: 1320 },
  { text: "    }", color: "#c8c6e8", delay: 1380 },
  { text: "  }", color: "#c8c6e8", delay: 1420 },
  { text: "", color: "", delay: 1460 },
  { text: "  // 300 rows in <800ms ⚡", color: "#555577", delay: 1520 },
  { text: "  jdbcTemplate.batchUpdate(", color: "#7c6aff", delay: 1620 },
  { text: "    INSERT_SQL, toInsert, 500,", color: "#c8c6e8", delay: 1700 },
  { text: "    (ps, row) -> row.bind(ps));", color: "#c8c6e8", delay: 1780 },
  { text: "}", color: "#c8c6e8", delay: 1860 },
];

const RESULT_LINE = { text: "✓ 312 sessions created in 743ms", delay: 2100 };

function TerminalBlock() {
  const { t } = useLanguage();
  const [visibleLines, setVisibleLines] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    // Cursor blink
    const cursorInterval = setInterval(() => setCursor((c) => !c), 530);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    
    const run = () => {
      setVisibleLines(0);
      setShowResult(false);

      CODE_LINES.forEach((line, i) => {
        timeouts.push(setTimeout(() => setVisibleLines(i + 1), line.delay + 600));
      });
      timeouts.push(
        setTimeout(() => setShowResult(true), RESULT_LINE.delay + 600)
      );

      // Loop: reset and restart after 4s pause
      timeouts.push(setTimeout(() => {
        run();
      }, RESULT_LINE.delay + 600 + 4000));
    };

    run();

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, []); // Run once on mount

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#07070f] shadow-2xl">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-white/[0.06] bg-[#0d0d1a] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        <span className="ml-3 text-[11px] text-[#444455]">SessionBulkService.java</span>
        <span className="ml-auto rounded bg-[rgba(124,106,255,0.15)] px-2 py-0.5 text-[10px] font-medium text-[#7c6aff]">
          Java
        </span>
      </div>

      {/* Code area */}
      <div className="min-h-[340px] p-5 font-mono text-[12px] leading-[1.75]">
        {CODE_LINES.slice(0, visibleLines).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -4 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.15 }}
            className="flex"
          >
            <span className="mr-4 w-5 flex-shrink-0 select-none text-right text-[10px] text-[#333344]">
              {line.text ? i + 1 : ""}
            </span>
            <span style={{ color: line.color || "transparent" }}>{line.text || "\u00a0"}</span>
          </motion.div>
        ))}

        {/* Cursor */}
        {visibleLines < CODE_LINES.length && (
          <div className="flex">
            <span className="mr-4 w-5 flex-shrink-0 select-none text-right text-[10px] text-[#333344]" />
            <span
              className="inline-block h-[1.2em] w-[7px] bg-[#7c6aff]"
              style={{ opacity: cursor ? 1 : 0, transition: "opacity 0.1s" }}
            />
          </div>
        )}

        {/* Result line */}
        {showResult && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-3 flex items-center gap-2 rounded-lg border border-[rgba(0,229,160,0.2)] bg-[rgba(0,229,160,0.06)] px-3 py-2"
          >
            <span className="text-[#00e5a0]">▶</span>
            <span className="font-mono text-[12px] text-[#00e5a0]">{t("hero.terminal.result")}</span>
          </motion.div>
        )}
      </div>

      {/* Bottom badge */}
      <div className="flex items-center justify-between border-t border-white/[0.05] px-4 py-2">
        <span className="text-[10px] text-[#333344]">Tutor Pro · tutor-pro-app.vercel.app</span>
        <span className="flex items-center gap-1.5 text-[10px] text-[#00e5a0]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#00e5a0]" style={{ boxShadow: "0 0 6px #00e5a0" }} />
          {t("hero.terminal.live")}
        </span>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const { t } = useLanguage();

  const stats = [
    { value: "2×", label: t("hero.stats.projects") },
    { value: "236+", label: t("hero.stats.contributions") },
    { value: "6↑", label: t("hero.stats.team") },
  ];

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 md:px-12 xl:px-20">
      {/* Grid bg */}
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-60"
        style={{ maskImage: "radial-gradient(ellipse 90% 80% at 50% 50%, black, transparent)" }} />
      <div className="pointer-events-none absolute -top-40 -left-20 h-[700px] w-[700px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(124,106,255,0.1) 0%, transparent 70%)", filter: "blur(80px)" }} />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(0,229,200,0.07) 0%, transparent 70%)", filter: "blur(60px)" }} />

      {/* Currently widget */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="absolute bottom-12 right-6 hidden rounded-xl border border-white/[0.07] bg-[var(--surface)] p-4 2xl:block"
      >
        <div className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#555566]">{t("hero.currently.label")}</div>
        <div className="space-y-1.5">
          {[
            { dot: "#ffaa00", text: t("hero.currently.floodRescue"), sub: t("hero.currently.sprint") + " 1" },
            { dot: "#00e5a0", text: t("hero.currently.tutorPro"), sub: t("hero.currently.production") },
            { dot: "#7c6aff", text: t("hero.currently.openTo"), sub: t("hero.currently.internship") },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-[12px]">
              <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: item.dot }} />
              <span className="font-medium text-[var(--text)]">{item.text}</span>
              <span className="text-[var(--text-dim)]">— {item.sub}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* 2-column layout */}
      <div className="relative z-10 w-full pt-16">
        <div className="grid grid-cols-1 items-center gap-16 xl:grid-cols-2">

          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-[var(--accent)]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                {t("hero.sub")}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-black leading-[0.92] tracking-[-0.04em]"
              style={{ fontSize: "clamp(52px, 6vw, 96px)" }}
            >
              <span className="block text-white">Tôn Quỳnh</span>
              <span className="block" style={{
                WebkitTextStroke: "1.5px rgba(255,255,255,0.2)",
                color: "transparent",
              }}>
                Long
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-6 max-w-md leading-[1.7] text-[#9090aa]"
              style={{ fontSize: "clamp(14px, 1.15vw, 17px)" }}
            >
              {t("hero.tagline").split(/\{(.*?)\}/).map((part, i) => {
                if (part === "design") return <strong key={i} className="font-semibold text-white">{t("hero.design")}</strong>;
                if (part === "architect") return <strong key={i} className="font-semibold text-white">{t("hero.architect")}</strong>;
                if (part === "ship") return <strong key={i} className="font-semibold text-white">{t("hero.ship")}</strong>;
                return part;
              })}
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-8"
            >
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col gap-0.5">
                  <span className="font-display font-bold tracking-tight text-white"
                    style={{ fontSize: "clamp(20px, 2vw, 28px)" }}>
                    {s.value}
                  </span>
                  <span className="text-[11px] text-[#555566]">{s.label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a href="#projects"
                className="inline-flex items-center gap-2 rounded-md bg-[var(--accent)] px-5 py-2.5 text-[14px] font-semibold text-white transition-all hover:opacity-85 hover:-translate-y-px">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
                </svg>
                {t("hero.viewProjects")}
              </a>
              {/* <a href="#contact"
                className="inline-flex items-center gap-2 rounded-md border border-white/[0.1] px-5 py-2.5 text-[14px] font-medium text-[#a0a0b8] transition-all hover:border-white/[0.2] hover:text-white hover:-translate-y-px">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                Get in Touch
              </a> */}
            </motion.div>
          </div>

          {/* Right: Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="hidden xl:block"
          >
            <TerminalBlock />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-6 flex items-center gap-2 md:left-12"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          className="animate-bounce text-[#444455]">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
        <span className="text-[11px] tracking-[0.15em] text-[#444455]">{t("hero.scroll")}</span>
      </motion.div>
    </section>
  );
}