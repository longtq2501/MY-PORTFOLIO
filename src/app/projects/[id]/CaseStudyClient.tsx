"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import type { CaseStudy, Section } from "@/lib/data/case-studies";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function CaseStudyClient({ cs }: { cs: CaseStudy }) {
    const { language, t } = useLanguage();

    return (
        <div className="min-h-screen bg-[var(--bg)]">

            {/* ── Top nav ── */}
            <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-white/[0.07] bg-[#08080f]/90 px-6 py-4 backdrop-blur-xl md:px-12">
                <Link href="/#projects"
                    className="inline-flex items-center gap-2 text-[13px] font-medium text-[#a0a0b8] transition-colors hover:text-white">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                    {t("casestudy.back")}
                </Link>
                <div className="flex items-center gap-3">
                    <a href={cs.githubUrl} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-md border border-white/[0.07] px-3 py-1.5 text-[12px] font-medium text-[#a0a0b8] transition-all hover:border-[var(--accent)] hover:text-white">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        GitHub
                    </a>
                    {cs.liveUrl && (
                        <a href={cs.liveUrl} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-[12px] font-medium text-white transition-opacity hover:opacity-85"
                            style={{ background: cs.accentColor }}>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                            {t("casestudy.liveDemo")}
                        </a>
                    )}
                </div>
            </div>

            {/* ── Hero ── */}
            <div className="relative overflow-hidden px-6 pb-16 pt-28 md:px-12 md:pt-36">
                <div className="bg-grid absolute inset-0 opacity-30"
                    style={{ maskImage: "radial-gradient(ellipse 70% 60% at 50% 0%, black, transparent)" }} />
                <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full"
                    style={{ background: `radial-gradient(circle, ${cs.accentColor}18 0%, transparent 70%)`, filter: "blur(80px)" }} />

                <div className="relative z-10 mx-auto max-w-4xl">
                    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
                        className="mb-5 flex flex-wrap items-center gap-2">
                        <span className="rounded px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider"
                            style={{ background: `${cs.accentColor}18`, border: `1px solid ${cs.accentColor}40`, color: cs.accentColor }}>
                            {cs.role[language]}
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded border border-white/[0.07] bg-white/[0.05] px-2.5 py-1 text-[11px] font-medium text-[#a0a0b8]">
                            <span className="h-1.5 w-1.5 rounded-full" style={{ background: cs.statusColor }} />
                            {cs.status[language]}
                        </span>
                        <span className="text-[11px] text-[#555566]">{cs.period[language]}</span>
                    </motion.div>

                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
                        className="mb-5 font-display font-black leading-[1.0] tracking-[-0.03em] text-[clamp(36px,7vw,80px)]">
                        {cs.title}
                    </motion.h1>

                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
                        className="mb-8 max-w-2xl italic leading-relaxed text-[#8080a0] text-[clamp(15px,2vw,19px)]">
                        &ldquo;{cs.tagline[language]}&rdquo;
                    </motion.p>

                    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
                        className="mb-8 flex flex-wrap gap-2">
                        {cs.stack.map((s) => (
                            <span key={s} className="rounded border border-white/[0.07] bg-white/[0.04] px-3 py-1 text-[12px] font-medium text-[#9090aa]">
                                {s}
                            </span>
                        ))}
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 }}
                        className="rounded-xl border border-white/[0.07] bg-[var(--surface)] p-6 md:p-8">
                        <h2 className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#555566]">{t("casestudy.overview")}</h2>
                        <p className="text-[16px] leading-[1.85] text-[#c8c6e8]">{cs.overview[language]}</p>
                    </motion.div>
                </div>
            </div>

            {/* ── Sections ── */}
            <div className="mx-auto max-w-4xl space-y-20 px-6 pb-24 md:px-12">
                {cs.sections.map((section, si) => (
                    <motion.div key={si} {...fadeUp(0)}>
                        <SectionRenderer section={section} accent={cs.accentColor} language={language} t={t} />
                    </motion.div>
                ))}

                {/* CTA */}
                <div className="flex flex-col items-center gap-4 border-t border-white/[0.07] pt-12 sm:flex-row sm:justify-between">
                    <Link href="/#projects"
                        className="inline-flex items-center gap-2 text-[14px] font-medium text-[#a0a0b8] transition-colors hover:text-white">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                        {t("casestudy.backAll")}
                    </Link>
                    <a href={cs.githubUrl} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-[14px] font-medium text-white transition-opacity hover:opacity-85"
                        style={{ background: cs.accentColor }}>
                        {t("casestudy.viewGithub")}
                    </a>
                </div>
            </div>
        </div>
    );
}

// ── Section router ────────────────────────────────────────────────────────────

function SectionRenderer({ section, accent, language, t }: { section: Section; accent: string; language: 'en' | 'vi'; t: (path: string) => string }) {
    switch (section.type) {
        case "features_list":
            return (
                <div>
                    <SectionHeader title={section.title[language]} accent={accent} />
                    <div className="space-y-10">
                        {section.features.map((f, fi) => (
                            <motion.div key={fi} {...fadeUp(fi * 0.04)}
                                className="overflow-hidden rounded-2xl border border-white/[0.07] bg-[var(--surface)] transition-colors hover:border-white/[0.14]">
                                {f.media && (
                                    <div className="border-b border-white/[0.07] bg-[#06060c]">
                                        <Image src={f.media} alt={f.title[language]} width={1200} height={675}
                                            className="w-full object-cover" unoptimized />
                                    </div>
                                )}
                                <div className="p-6">
                                    <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                                        <h4 className="font-display text-[17px] font-bold text-white">
                                            <span className="mr-2 text-[#444455]">#{fi + 1}</span>{f.title[language]}
                                        </h4>
                                    </div>
                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                        {f.problem && (
                                            <div>
                                                <div className="mb-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#ff6b6b]">{t("casestudy.problem")}</div>
                                                <p className="text-[13px] leading-[1.7] text-[#9090aa]">{f.problem[language]}</p>
                                            </div>
                                        )}
                                        <div>
                                            <div className="mb-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#7c6aff]">{t("casestudy.solution")}</div>
                                            <p className="text-[13px] leading-[1.7] text-[#9090aa]">{f.solution[language]}</p>
                                        </div>
                                        <div>
                                            <div className="mb-1.5 text-[10px] font-semibold uppercase tracking-wider"
                                                style={{ color: accent }}>{t("casestudy.result")}</div>
                                            <p className="text-[13px] font-medium leading-[1.7] text-[#c8c6e8]">{f.result[language]}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            );

        case "benchmarks":
            return (
                <div>
                    <SectionHeader title={section.title[language]} accent={accent} />
                    {section.content[language] && <p className="mb-6 text-[16px] leading-[1.85] text-[#c8c6e8]">{section.content[language]}</p>}
                    <div className="overflow-hidden rounded-xl border border-white/[0.07]">
                        <table className="w-full text-[13px]">
                            <thead>
                                <tr className="border-b border-white/[0.07] bg-[#0d0d1a]">
                                    <th className="px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-[#555566]">{t("casestudy.module")}</th>
                                    <th className="px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-[#555566]">{t("casestudy.metric")}</th>
                                    <th className="px-5 py-3 text-center text-[11px] font-semibold uppercase tracking-wider text-[#555566]">{t("casestudy.before")}</th>
                                    <th className="px-5 py-3 text-center text-[11px] font-semibold uppercase tracking-wider text-[#555566]">{t("casestudy.after")}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {section.rows.map((r, ri) => (
                                    <tr key={ri} className="border-b border-white/[0.05] transition-colors hover:bg-white/[0.02]">
                                        <td className="px-5 py-3 font-medium text-[#c8c6e8]">{r.module[language]}</td>
                                        <td className="px-5 py-3 text-[#9090aa]">{r.metric[language]}</td>
                                        <td className="px-5 py-3 text-center text-[#666677]">{r.before}</td>
                                        <td className="px-5 py-3 text-center font-semibold" style={{ color: accent }}>{r.after}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            );

        case "decisions":
            return (
                <div>
                    <SectionHeader title={section.title[language]} accent={accent} />
                    {section.content[language] && <p className="mb-6 text-[16px] leading-[1.85] text-[#c8c6e8]">{section.content[language]}</p>}
                    <div className="space-y-4">
                        {section.decisions.map((d, di) => (
                            <motion.div key={di} {...fadeUp(di * 0.08)}
                                className="rounded-xl border border-white/[0.07] bg-[var(--surface)] p-6">
                                <h4 className="mb-4 font-display text-[16px] font-bold text-white">{d.title[language]}</h4>
                                <div className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                                    <div className="rounded-lg border border-[rgba(0,229,160,0.2)] bg-[rgba(0,229,160,0.05)] p-3">
                                        <div className="mb-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#00e5a0]">✓ {t("casestudy.chosen")}</div>
                                        <div className="text-[13px] font-semibold text-white">{d.chosen[language]}</div>
                                    </div>
                                    <div className="rounded-lg border border-white/[0.07] bg-white/[0.03] p-3">
                                        <div className="mb-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#555566]">✗ {t("casestudy.rejected")}</div>
                                        <div className="text-[13px] text-[#9090aa]">{d.rejected[language]}</div>
                                    </div>
                                </div>
                                <p className="text-[14px] leading-[1.75] text-[#9090aa]">
                                    <strong className="font-semibold text-[#c8c6e8]">{t("casestudy.why")}</strong>{d.reason[language]}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            );

        case "security":
            return (
                <div>
                    <SectionHeader title={section.title[language]} accent={accent} />
                    {section.content[language] && <p className="mb-6 text-[16px] leading-[1.85] text-[#c8c6e8]">{section.content[language]}</p>}
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {section.rows.map((r, ri) => (
                            <motion.div key={ri} {...fadeUp(ri * 0.06)}
                                className="rounded-xl border border-white/[0.07] bg-[var(--surface)] p-4">
                                <div className="mb-1.5 text-[11px] font-semibold uppercase tracking-wider" style={{ color: accent }}>
                                    {r.layer[language]}
                                </div>
                                <p className="text-[13px] leading-[1.65] text-[#9090aa]">{r.impl[language]}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            );

        case "roadmap":
            return (
                <div>
                    <SectionHeader title={section.title[language]} accent={accent} />
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        {section.quarters.map((q, qi) => (
                            <motion.div key={qi} {...fadeUp(qi * 0.08)}
                                className="rounded-xl border border-white/[0.07] bg-[var(--surface)] p-5">
                                <div className="mb-4 inline-block rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wider"
                                    style={{ borderColor: `${accent}40`, color: accent, background: `${accent}10` }}>
                                    {q.quarter[language]}
                                </div>
                                <ul className="space-y-2.5">
                                    {q.items.map((item, ii) => (
                                        <li key={ii} className="flex items-start gap-2.5 text-[13px] leading-[1.65] text-[#9090aa]">
                                            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#444455]" />
                                            {item[language]}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            );

        case "code":
            return (
                <div>
                    <SectionHeader title={section.title[language]} accent={accent} />
                    {section.content[language] && <p className="mb-5 text-[16px] leading-[1.85] text-[#c8c6e8]">{section.content[language]}</p>}
                    <div className="overflow-hidden rounded-xl border border-white/[0.07]">
                        <div className="flex items-center gap-3 border-b border-white/[0.07] bg-[#0d0d1a] px-4 py-3">
                            <div className="flex gap-1.5">
                                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                                <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                                <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                            </div>
                            <span className="text-[12px] text-[#555566]">{section.codeSnippet.label}</span>
                            <span className="ml-auto rounded bg-white/[0.06] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[#555566]">
                                {section.codeSnippet.lang}
                            </span>
                        </div>
                        <div className="overflow-x-auto bg-[#0a0a14] p-5">
                            <pre className="text-[13px] leading-[1.75] text-[#c0b8ff]">
                                <code>{section.codeSnippet.code}</code>
                            </pre>
                        </div>
                    </div>
                </div>
            );

        case "problem":
        case "solution":
            return (
                <div>
                    <SectionHeader title={section.title[language]} accent={accent} />
                    {section.content[language] && <p className="mb-6 text-[16px] leading-[1.85] text-[#c8c6e8]">{section.content[language]}</p>}
                    {section.features && (
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {section.features.map((f, fi) => (
                                <motion.div key={fi} {...fadeUp(fi * 0.07)}
                                    className="rounded-xl border border-white/[0.07] bg-[var(--surface)] p-5">
                                    <h4 className="mb-2 font-display text-[15px] font-bold text-white">{f.title[language]}</h4>
                                    <p className="text-[13px] leading-[1.7] text-[#9090aa]">{f.problem ? f.problem[language] : (f.solution ? f.solution[language] : '')}</p>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            );

        case "result":
            return (
                <div>
                    <SectionHeader title={section.title[language]} accent={accent} />
                    {section.content[language] && <p className="mb-6 text-[16px] leading-[1.85] text-[#c8c6e8]">{section.content[language]}</p>}
                    {section.metrics && (
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                            {section.metrics.map((m, mi) => (
                                <motion.div key={mi} {...fadeUp(mi * 0.06)}
                                    className="rounded-xl border border-white/[0.07] bg-[var(--surface)] p-5 text-center">
                                    <div className="mb-1.5 font-display font-black tracking-tight text-[24px] md:text-[28px]"
                                        style={{ color: accent }}>{m.value}</div>
                                    <div className="text-[12px] leading-[1.5] text-[#9090aa]">{m.label[language]}</div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            );

        default:
            return null;
    }
}

function SectionHeader({ title, accent }: { title: string; accent: string }) {
    return (
        <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-5 flex-shrink-0" style={{ background: accent }} />
            <h2 className="font-display font-black tracking-[-0.02em] text-white text-[clamp(22px,3vw,30px)]">
                {title}
            </h2>
        </div>
    );
}