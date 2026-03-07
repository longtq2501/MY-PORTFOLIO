"use client";
import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { projects } from "@/lib/data/projects";
import TutorProMock from "@/components/ui/TutorProMock";
import FloodRescueMock from "@/components/ui/FloodRescueMock";

const mocks = [TutorProMock, FloodRescueMock];

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-[var(--bg)] px-12 py-32">
      <div className="mb-16">
        <SectionLabel>Projects</SectionLabel>
        <h2 className="font-display text-[clamp(32px,5vw,52px)] font-black leading-[1.1] tracking-[-0.02em]">
          What I&apos;ve shipped.
        </h2>
      </div>

      <div className="flex flex-col gap-6">
        {projects.map((project, i) => {
          const Mock = mocks[i];
          const isReverse = i % 2 !== 0;

          return (
            <motion.div
              key={project.id}
              {...reveal(i * 0.1)}
              className={`grid grid-cols-1 overflow-hidden rounded-2xl border border-white/[0.07] bg-[var(--surface)] transition-colors hover:border-[rgba(124,106,255,0.3)] lg:grid-cols-2`}
            >
              {/* Visual */}
              <div className={`relative min-h-[380px] bg-[var(--bg2)] ${isReverse ? "lg:order-last" : ""}`}>
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <Mock />
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-col justify-center p-12">
                <div className="font-display text-[72px] font-black leading-none tracking-[-0.04em] text-white/[0.04] mb-[-8px]">
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
                  {project.tag}
                </div>

                <h3 className="mb-4 font-display text-[clamp(22px,3vw,32px)] font-black leading-[1.15] tracking-[-0.02em]">
                  {project.title}
                </h3>

                <p className="mb-7 text-[15px] leading-[1.75] text-[var(--text-muted)]">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="mb-7 flex gap-6 border-y border-white/[0.07] py-4">
                  {project.metrics.map((m) => (
                    <div key={m.key} className="flex flex-col gap-0.5">
                      <span className="font-display text-[20px] font-bold tracking-tight">
                        {m.value}
                        {m.accent && (
                          <span
                            style={{
                              color: m.key.includes("GPS") ? "#00e5a0" : "var(--accent)",
                            }}
                          >
                            {m.accent}
                          </span>
                        )}
                      </span>
                      <span className="text-[11px] text-[var(--text-dim)]">{m.key}</span>
                    </div>
                  ))}
                </div>

                {/* Stack pills */}
                <div className="mb-7 flex flex-wrap gap-2">
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
                <div className="flex gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={
                        link.variant === "primary"
                          ? "inline-flex items-center gap-1.5 rounded-md bg-[var(--accent)] px-4 py-2 text-[13px] font-medium text-white transition-all hover:opacity-85 hover:-translate-y-px"
                          : "inline-flex items-center gap-1.5 rounded-md border border-white/[0.07] px-4 py-2 text-[13px] font-medium text-[var(--text-muted)] transition-all hover:border-[var(--accent)] hover:text-[var(--text)] hover:-translate-y-px"
                      }
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
