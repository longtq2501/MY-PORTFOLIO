"use client";
import FloodRescueMock from "@/components/ui/FloodRescueMock";
import NpmPackageMock from "@/components/ui/NpmPackageMock";
import SectionLabel from "@/components/ui/SectionLabel";
import TutorProMock from "@/components/ui/TutorProMock";
import { projects } from "@/lib/data/projects";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { motion } from "framer-motion";
import Link from "next/link";

const mocks = [TutorProMock, FloodRescueMock, NpmPackageMock];

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function ProjectsSection() {
  const { t, language } = useLanguage();

  return (
    <section id="projects" className="bg-[var(--bg)] px-6 py-20 md:px-12 md:py-32">
      <div className="mb-12 md:mb-16">
        <SectionLabel>{t("projects.title")}</SectionLabel>
        <h2 className="font-display font-black leading-[1.1] tracking-[-0.02em] text-[clamp(28px,5vw,52px)]">
          {t("projects.heading")}
        </h2>
      </div>

      <div className="flex flex-col gap-10 md:gap-12">
        {projects.map((project, i) => {
          const Mock = mocks[i];
          const isReverse = i % 2 !== 0;

          return (
            <motion.div
              key={project.id}
              {...reveal(i * 0.1)}
              className="grid grid-cols-1 overflow-visible rounded-2xl border border-white/[0.07] bg-[var(--surface)] transition-colors hover:border-[rgba(124,106,255,0.3)] lg:grid-cols-2"
            >
              {/* Visual */}
              <div
                className={`relative min-h-[300px] md:min-h-[440px] bg-[var(--bg2)] overflow-visible rounded-t-2xl lg:rounded-none ${isReverse ? "lg:order-last lg:rounded-r-2xl" : "lg:rounded-l-2xl"
                  }`}
              >
                <div className="absolute inset-0 flex items-center justify-center p-6 md:p-8">
                  <Mock />
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-col justify-center p-6 md:p-10 lg:p-12">
                <div className="font-display font-black leading-none tracking-[-0.04em] text-white/[0.04] mb-[-6px] text-[52px] md:text-[72px]">
                  {project.num}
                </div>

                <div
                  className="mb-3 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.1em]"
                  style={{ color: project.tagColor }}
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{
                      background: project.tagColor,
                      boxShadow: project.statusDot === "active" ? `0 0 6px ${project.tagColor}` : undefined,
                      animation: project.statusDot === "active" ? "pulse 2s infinite" : undefined,
                    }}
                  />
                  {project.tag[language]}
                </div>

                <h3 className="mb-3 font-display font-black leading-[1.15] tracking-[-0.02em] text-[clamp(20px,3vw,32px)]">
                  {project.title}
                </h3>

                <p className="mb-6 text-[14px] leading-[1.75] text-[var(--text-muted)] md:text-[15px]">
                  {project.description[language]}
                </p>

                {/* Metrics */}
                <div className="mb-6 flex gap-5 border-y border-white/[0.07] py-4 md:gap-6">
                  {project.metrics.map((m) => (
                    <div key={m.key[language]} className="flex flex-col gap-0.5">
                      <span className="font-display font-bold tracking-tight text-[17px] md:text-[20px]">
                        {m.value}
                        {m.accent && (
                          <span style={{ color: m.key.en.includes("GPS") ? "#00e5a0" : "var(--accent)" }}>
                            {m.accent}
                          </span>
                        )}
                      </span>
                      <span className="text-[11px] text-[var(--text-dim)]">{m.key[language]}</span>
                    </div>
                  ))}
                </div>

                {/* Stack */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded border border-white/[0.07] bg-white/[0.05] px-3 py-1 text-[12px] font-medium text-[var(--text-muted)]"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.label[language]}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={
                        link.variant === "primary"
                          ? "inline-flex items-center gap-1.5 rounded-md bg-[var(--accent)] px-4 py-2 text-[13px] font-medium text-white transition-all hover:opacity-85 hover:-translate-y-px"
                          : "inline-flex items-center gap-1.5 rounded-md border border-white/[0.07] px-4 py-2 text-[13px] font-medium text-[var(--text-muted)] transition-all hover:border-[var(--accent)] hover:text-[var(--text)] hover:-translate-y-px"
                      }
                    >
                      {link.label[language]}
                    </a>
                  ))}
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center gap-1.5 rounded-md border border-white/[0.07] px-4 py-2 text-[13px] font-medium text-[var(--text-muted)] transition-all hover:border-[var(--accent)] hover:text-[var(--text)] hover:-translate-y-px"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                    {t("projects.viewCase")}
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}