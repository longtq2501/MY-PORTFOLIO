"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import type { CaseStudy } from "@/lib/data/case-studies";

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function CaseStudyClient({ cs }: { cs: CaseStudy }) {
    return (
        <div className="min-h-screen bg-[var(--bg)]">
            {/* Top nav */}
            <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-white/[0.07] bg-[#08080f]/90 px-6 py-4 backdrop-blur-xl md:px-12">
                <Link
                    href="/#projects"
                    className="inline-flex items-center gap-2 text-[13px] font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                    Back to Portfolio
                </Link>
                <div className="flex items-center gap-3">
                    <a
                        href={cs.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-md border border-white/[0.07] px-3 py-1.5 text-[12px] font-medium text-[var(--text-muted)] transition-all hover:border-[var(--accent)] hover:text-[var(--text)]"
                    >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        GitHub
                    </a>
                    {cs.liveUrl && (
                        <a
                            href={cs.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-[12px] font-medium text-white transition-opacity hover:opacity-85"
                            style={{ background: cs.accentColor }}
                        >
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                            Live Demo
                        </a>
                    )}
                </div>
            </div>

            {/* Hero */}
            <div className="relative overflow-hidden px-6 pb-16 pt-28 md:px-12 md:pt-36">
                <div
                    className="bg-grid absolute inset-0 opacity-40"
                    style={{ maskImage: "radial-gradient(ellipse 70% 60% at 50% 0%, black, transparent)" }}
                />
                <div
                    className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full"
                    style={{
                        background: `radial-gradient(circle, ${cs.accentColor}18 0%, transparent 70%)`,
                        filter: "blur(80px)",
                    }}
                />

                <div className="relative z-10 mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-4 flex flex-wrap items-center gap-2"
                    >
                        <span
                            className="rounded px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider"
                            style={{
                                background: `${cs.accentColor}18`,
                                border: `1px solid ${cs.accentColor}40`,
                                color: cs.accentColor,
                            }}
                        >
                            {cs.role}
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded border border-white/[0.07] bg-white/[0.05] px-2.5 py-1 text-[11px] font-medium text-[var(--text-muted)]">
                            <span className="h-1.5 w-1.5 rounded-full" style={{ background: cs.statusColor }} />
                            {cs.status}
                        </span>
                        <span className="text-[11px] text-[var(--text-dim)]">{cs.period}</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="font-display font-black leading-[1.0] tracking-[-0.03em] text-[clamp(36px,7vw,80px)] mb-4"
                    >
                        {cs.title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="mb-8 max-w-2xl text-[clamp(15px,2vw,19px)] italic leading-relaxed text-[var(--text-muted)]"
                    >
                        &ldquo;{cs.tagline}&rdquo;
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mb-8 flex flex-wrap gap-2"
                    >
                        {cs.stack.map((s) => (
                            <span
                                key={s}
                                className="rounded border border-white/[0.07] bg-white/[0.04] px-3 py-1 text-[12px] font-medium text-[var(--text-muted)]"
                            >
                                {s}
                            </span>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.35 }}
                        className="rounded-xl border border-white/[0.07] bg-[var(--surface)] p-6 md:p-8"
                    >
                        <h2 className="mb-3 font-display text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--text-dim)]">
                            Overview
                        </h2>
                        <p className="text-[15px] leading-[1.8] text-[var(--text-muted)] md:text-[16px]">
                            {cs.overview}
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Content sections */}
            <div className="mx-auto max-w-4xl space-y-12 px-6 pb-24 md:px-12 md:space-y-16">
                {cs.sections.map((section, si) => (
                    <motion.div key={si} {...fadeUp(0)}>

                        {/* PROBLEM / SOLUTION */}
                        {(section.type === "problem" || section.type === "solution") && (
                            <div>
                                <SectionHeader title={section.title} accent={cs.accentColor} />
                                <p className="mb-6 text-[15px] leading-[1.8] text-[var(--text-muted)] md:text-[16px]">
                                    {section.content}
                                </p>
                                {section.features && (
                                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                                        {section.features.map((f, fi) => (
                                            <motion.div
                                                key={fi}
                                                {...fadeUp(fi * 0.08)}
                                                className="rounded-xl border border-white/[0.07] bg-[var(--surface)] p-5 transition-colors hover:border-[rgba(124,106,255,0.25)]"
                                            >
                                                <h4 className="mb-2 font-display text-[15px] font-bold text-[var(--text)]">
                                                    {f.title}
                                                </h4>
                                                <p className="mb-3 text-[13px] leading-[1.7] text-[var(--text-muted)]">
                                                    {f.detail}
                                                </p>
                                                {f.metric && (
                                                    <span
                                                        className="inline-block rounded px-2.5 py-1 text-[12px] font-semibold"
                                                        style={{ background: `${cs.accentColor}15`, color: cs.accentColor }}
                                                    >
                                                        {f.metric}
                                                    </span>
                                                )}
                                            </motion.div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        {/* DECISIONS */}
                        {section.type === "decisions" && (
                            <div>
                                <SectionHeader title={section.title} accent={cs.accentColor} />
                                <p className="mb-6 text-[15px] leading-[1.8] text-[var(--text-muted)] md:text-[16px]">
                                    {section.content}
                                </p>
                                <div className="space-y-4">
                                    {section.decisions?.map((d, di) => (
                                        <motion.div
                                            key={di}
                                            {...fadeUp(di * 0.1)}
                                            className="rounded-xl border border-white/[0.07] bg-[var(--surface)] p-6"
                                        >
                                            <h4 className="mb-4 font-display text-[16px] font-bold text-[var(--text)]">
                                                {d.title}
                                            </h4>
                                            <div className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                                                <div className="rounded-lg border border-[rgba(0,229,160,0.2)] bg-[rgba(0,229,160,0.05)] p-3">
                                                    <div className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-[#00e5a0]">
                                                        ✓ Chosen
                                                    </div>
                                                    <div className="text-[13px] font-medium text-[var(--text)]">{d.chosen}</div>
                                                </div>
                                                <div className="rounded-lg border border-white/[0.07] bg-white/[0.03] p-3">
                                                    <div className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--text-dim)]">
                                                        ✗ Rejected
                                                    </div>
                                                    <div className="text-[13px] text-[var(--text-muted)]">{d.rejected}</div>
                                                </div>
                                            </div>
                                            <p className="text-[13px] leading-[1.75] text-[var(--text-muted)]">
                                                <strong className="font-medium text-[var(--text)]">Why: </strong>
                                                {d.reason}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* CODE SNIPPET */}
                        {section.type === "code" && section.codeSnippet && (
                            <div>
                                <SectionHeader title={section.title} accent={cs.accentColor} />
                                <p className="mb-5 text-[15px] leading-[1.8] text-[var(--text-muted)]">
                                    {section.content}
                                </p>
                                <div className="overflow-hidden rounded-xl border border-white/[0.07]">
                                    <div className="flex items-center gap-3 border-b border-white/[0.07] bg-[#0d0d1a] px-4 py-3">
                                        <div className="flex gap-1.5">
                                            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                                            <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                                            <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                                        </div>
                                        <span className="text-[12px] text-[var(--text-dim)]">{section.codeSnippet.label}</span>
                                        <span className="ml-auto rounded bg-white/[0.06] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[var(--text-dim)]">
                                            {section.codeSnippet.lang}
                                        </span>
                                    </div>
                                    <div className="overflow-x-auto bg-[#0a0a14] p-5">
                                        <pre className="text-[13px] leading-[1.7] text-[#b8b0ff]">
                                            <code>{section.codeSnippet.code}</code>
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* ARCHITECTURE */}
                        {section.type === "architecture" && (
                            <div>
                                <SectionHeader title={section.title} accent={cs.accentColor} />
                                <p className="mb-6 text-[15px] leading-[1.8] text-[var(--text-muted)] md:text-[16px]">
                                    {section.content}
                                </p>
                                <div className="flex items-center justify-center rounded-xl border border-dashed border-white/[0.15] bg-[var(--surface)] p-12 text-center">
                                    <div>
                                        <div className="mb-3 text-[32px]">🏗</div>
                                        <p className="text-[14px] font-medium text-[var(--text-muted)]">Architecture diagram</p>
                                        <p className="mt-1 text-[12px] text-[var(--text-dim)]">
                                            Add image at /public/case-studies/{cs.id}/architecture.png
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* RESULTS */}
                        {section.type === "result" && (
                            <div>
                                <SectionHeader title={section.title} accent={cs.accentColor} />
                                <p className="mb-6 text-[15px] leading-[1.8] text-[var(--text-muted)]">
                                    {section.content}
                                </p>
                                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                                    {section.metrics?.map((m, mi) => (
                                        <motion.div
                                            key={mi}
                                            {...fadeUp(mi * 0.07)}
                                            className="rounded-xl border border-white/[0.07] bg-[var(--surface)] p-5 text-center"
                                        >
                                            <div
                                                className="mb-1 font-display text-[24px] font-black tracking-tight md:text-[28px]"
                                                style={{ color: cs.accentColor }}
                                            >
                                                {m.value}
                                            </div>
                                            <div className="text-[12px] leading-[1.5] text-[var(--text-muted)]">{m.label}</div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        )}

                    </motion.div>
                ))}

                {/* Bottom CTA */}
                <div className="flex flex-col items-center gap-4 border-t border-white/[0.07] pt-12 sm:flex-row sm:justify-between">
                    <Link
                        href="/#projects"
                        className="inline-flex items-center gap-2 text-[14px] font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                        Back to all projects
                    </Link>
                    <a
                        href={cs.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-[14px] font-medium text-white transition-opacity hover:opacity-85"
                        style={{ background: cs.accentColor }}
                    >
                        View on GitHub →
                    </a>
                </div>
            </div>
        </div>
    );
}

function SectionHeader({ title, accent }: { title: string; accent: string }) {
    return (
        <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-5 flex-shrink-0" style={{ background: accent }} />
            <h2 className="font-display text-[clamp(20px,3vw,28px)] font-black tracking-[-0.02em]">
                {title}
            </h2>
        </div>
    );
}