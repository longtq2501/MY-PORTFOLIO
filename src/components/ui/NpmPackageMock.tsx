"use client";
import { motion } from "framer-motion";

export default function NpmPackageMock() {
    return (
        <div className="relative w-full overflow-hidden rounded-2xl border border-[rgba(247,223,30,0.15)] bg-[#0d0d1a] shadow-[0_32px_80px_rgba(0,0,0,0.8)] transition-all duration-500 hover:border-[rgba(247,223,30,0.4)]">
            {/* Background Glow */}
            <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-[rgba(247,223,30,0.08)] blur-[80px]" />

            {/* Shining border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-full animate-shine pointer-events-none" />

            <div className="flex h-11 items-center gap-2 border-b border-white/[0.06] bg-[#1a1a2e] px-5">
                <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                </div>
                <span className="ml-5 font-mono text-[11px] font-medium tracking-tight text-[#7c7c9c]">
                    npm install <span className="text-[#f7df1e]">@longtq2501/next-spring-skills</span>
                </span>
            </div>

            <div className="p-7 font-mono text-[13px] leading-relaxed text-[#c8c6e8]">
                <div className="flex items-center gap-3 text-[#00e5a0]">
                    <span className="text-[14px] font-bold opacity-60">❯</span>
                    <motion.span
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="font-bold tracking-tight"
                    >
                        npx @longtq2501/next-spring-skills
                    </motion.span>
                </div>

                <div className="mt-6 space-y-2">
                    <div className="text-[#a5b4fc]/70 font-medium">? Select integration template:</div>
                    <div className="flex items-center gap-3 rounded-md bg-white/[0.04] p-2 pr-8 text-white ring-1 ring-white/10">
                        <span className="text-[#f7df1e] font-bold">❯</span>
                        <span>Next.js + Spring Boot (Standard)</span>
                    </div>
                    <div className="pl-6 text-[#555577]">Next.js + Spring Boot (Microservices)</div>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-white/[0.05] pt-5">
                    <div className="flex items-center gap-2.5">
                        <div className="flex -space-x-1.5">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="h-5 w-5 rounded-full border border-[var(--bg)] bg-white/10" />
                            ))}
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-widest text-[#555577]">800+ Devs</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-full bg-[#f7df1e]/10 px-3 py-1 text-[11px] font-black text-[#f7df1e] ring-1 ring-[#f7df1e]/20">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f7df1e] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f7df1e]"></span>
                        </span>
                        LIVE ON NPM
                    </div>
                </div>
            </div>
        </div>
    );
}
