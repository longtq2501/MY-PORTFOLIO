"use client";
import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function StackSection() {
  const { t } = useLanguage();

  const columns = [
    {
      title: "Frontend",
      items: [
        { icon: "⚡", name: "Next.js 15", sub: t("stack.frontend.next"), level: 4, bg: "rgba(0,0,0,0.5)" },
        { icon: "⚛", name: "React 19", sub: t("stack.frontend.react"), level: 4, bg: "rgba(97,218,251,0.1)", color: "#61DAFB" },
        { icon: "𝗧", name: "TypeScript", sub: t("stack.frontend.ts"), level: 4, bg: "rgba(49,120,198,0.1)", color: "#3178C6" },
        { icon: "🎨", name: "Tailwind + Framer", sub: t("stack.frontend.styling"), level: 3, bg: "rgba(6,182,212,0.1)", color: "#06B6D4" },
      ],
    },
    {
      title: "Backend",
      items: [
        { icon: "🍃", name: "Spring Boot 3.4", sub: t("stack.backend.spring"), level: 4, bg: "rgba(109,179,63,0.1)", color: "#6DB33F" },
        { icon: "🗄", name: "MySQL / PostgreSQL", sub: t("stack.backend.db"), level: 3, bg: "rgba(0,117,143,0.15)", color: "#00758F" },
        { icon: "🐇", name: "RabbitMQ + Kafka", sub: t("stack.backend.mq"), level: 3, bg: "rgba(255,102,0,0.1)", color: "#FF6600" },
        { icon: "🤖", name: "Groq AI", sub: t("stack.backend.ai"), level: 3, bg: "rgba(124,106,255,0.1)", color: "var(--accent)" },
      ],
    },
    {
      title: "Infrastructure",
      items: [
        { icon: "🐳", name: "Docker Compose", sub: t("stack.infra.docker"), level: 4, bg: "rgba(36,150,237,0.1)", color: "#2496ED" },
        { icon: "⚙", name: "GitHub Actions", sub: t("stack.infra.actions"), level: 3, bg: "rgba(32,208,111,0.1)", color: "#20D06F" },
        { icon: "🌐", name: "Nginx", sub: t("stack.infra.nginx"), level: 3, bg: "rgba(0,150,57,0.1)", color: "#009639" },
        { icon: "📡", name: "WebRTC · SSE · WS", sub: t("stack.infra.realtime"), level: 3, bg: "rgba(255,255,255,0.05)" },
      ],
    },
  ];

  return (
    <section id="stack" className="border-t border-white/[0.07] bg-[var(--bg2)] px-12 py-32">
      <SectionLabel>{t("stack.title")}</SectionLabel>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-[clamp(32px,5vw,52px)] font-black leading-[1.1] tracking-[-0.02em] mb-3"
      >
        {t("stack.heading")}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="mb-16 max-w-lg text-[17px] text-[var(--text-muted)]"
      >
        {t("stack.sub")}
      </motion.p>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        {columns.map((col, ci) => (
          <motion.div
            key={col.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: ci * 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="mb-5 border-b border-white/[0.07] pb-3 text-[13px] font-bold uppercase tracking-[0.08em] text-[var(--text-muted)]">
              {col.title}
            </h3>
            <div className="flex flex-col gap-2.5">
              {col.items.map((item) => (
                <div
                  key={item.name}
                  className="group flex items-center gap-3 rounded-lg border border-white/[0.07] bg-[var(--surface)] px-3.5 py-3 transition-all hover:translate-x-1 hover:border-[rgba(124,106,255,0.3)] cursor-default"
                >
                  <div
                    className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md text-base"
                    style={{ background: item.bg, color: item.color }}
                  >
                    {item.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[14px] font-medium text-[var(--text)]">{item.name}</div>
                    <div className="text-[11px] text-[var(--text-dim)]">{item.sub}</div>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div
                        key={i}
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ background: i < item.level ? "var(--accent)" : "var(--border)" }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
