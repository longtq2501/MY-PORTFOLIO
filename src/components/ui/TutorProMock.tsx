"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function TutorProMock() {
  return (
    <div className="relative h-full w-full select-none overflow-visible">
      {/* Glow */}
      <div className="pointer-events-none absolute left-[10%] top-[15%] h-[280px] w-[280px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(124,106,255,0.18) 0%, transparent 70%)", filter: "blur(50px)" }} />
      <div className="pointer-events-none absolute bottom-[5%] right-[5%] h-[180px] w-[180px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(0,229,200,0.13) 0%, transparent 70%)", filter: "blur(40px)" }} />

      {/* ── Main: dashboard dark — full box ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 overflow-hidden rounded-xl border border-white/[0.08]"
        style={{ boxShadow: "0 32px 64px rgba(0,0,0,0.55)" }}
      >
        <Image
          src="/screenshots/tutor-dashboard-light.png"
          alt="Tutor Pro Dashboard"
          fill
          className="object-cover object-top"
          unoptimized
        />
        {/* Live badge */}
        <div className="absolute right-3 top-3 z-10 flex items-center gap-1.5 rounded-full border border-[rgba(0,229,160,0.35)] bg-[rgba(0,229,160,0.12)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#00e5a0]">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#00e5a0]"
            style={{ boxShadow: "0 0 6px #00e5a0" }} />
          Live
        </div>
      </motion.div>

      {/* ── Float left: VietQR — small, full image ── */}
      <motion.div
        initial={{ opacity: 0, x: -12, rotate: -4 }}
        whileInView={{ opacity: 1, x: 0, rotate: -4 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ rotate: -1.5, scale: 1.05, zIndex: 30 }}
        className="absolute -bottom-6 -left-4 z-20 w-[28%] overflow-hidden rounded-xl border border-white/[0.15] bg-white"
        style={{ boxShadow: "0 16px 40px rgba(0,0,0,0.75)" }}
      >
        <Image
          src="/screenshots/tutor-vietqr.png"
          alt="VietQR Invoice"
          width={300}
          height={420}
          className="w-full h-auto"
          unoptimized
        />
      </motion.div>

      {/* ── Float right: AI Feedback — small, full image ── */}
      <motion.div
        initial={{ opacity: 0, x: 12, rotate: 3.5 }}
        whileInView={{ opacity: 1, x: 0, rotate: 3.5 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ rotate: 1, scale: 1.05, zIndex: 30 }}
        className="absolute -bottom-4 -right-4 z-20 w-[38%] overflow-hidden rounded-xl border border-white/[0.15]"
        style={{ boxShadow: "0 16px 40px rgba(0,0,0,0.75)" }}
      >
        <Image
          src="/screenshots/tutor-ai-feedback.png"
          alt="AI Feedback"
          width={400}
          height={280}
          className="w-full h-auto"
          unoptimized
        />
      </motion.div>
    </div>
  );
}