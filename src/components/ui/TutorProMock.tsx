export default function TutorProMock() {
  return (
    <div className="w-full max-w-[420px] rounded-xl border border-[rgba(124,106,255,0.2)] bg-[#0d0d1a] shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden">
      {/* Topbar */}
      <div className="flex h-9 items-center gap-1.5 border-b border-white/[0.06] bg-[#13131f] px-3.5">
        <span className="h-2 w-2 rounded-full bg-[#ff5f56]" />
        <span className="h-2 w-2 rounded-full bg-[#ffbd2e]" />
        <span className="h-2 w-2 rounded-full bg-[#27c93f]" />
      </div>
      {/* Body */}
      <div className="flex h-[220px]">
        {/* Sidebar */}
        <div className="flex w-12 flex-col items-center gap-2.5 border-r border-white/[0.05] bg-[#0a0a15] py-3.5">
          {[true, false, false, false, false].map((active, i) => (
            <div
              key={i}
              className="h-7 w-7 rounded-md"
              style={{ background: active ? "rgba(124,106,255,0.3)" : "rgba(255,255,255,0.05)" }}
            />
          ))}
        </div>
        {/* Main */}
        <div className="flex-1 p-3.5 space-y-2">
          <div className="rounded-md bg-white/[0.04] p-2.5 space-y-2">
            <div className="h-1.5 w-[60%] rounded-full bg-[rgba(124,106,255,0.4)]" />
            <div className="h-1.5 w-[40%] rounded-full bg-white/[0.08]" />
            <div className="mt-2 grid grid-cols-2 gap-1.5">
              {[
                { num: "300+", label: "Sessions" },
                { num: "<800ms", label: "Generated" },
              ].map((m) => (
                <div key={m.num} className="rounded bg-[rgba(124,106,255,0.08)] p-1.5 text-center">
                  <div className="font-display text-[11px] font-bold text-[var(--accent)]">{m.num}</div>
                  <div className="text-[7px] text-[var(--text-muted)]">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-md bg-white/[0.04] p-2.5 space-y-1.5">
            <div className="h-1.5 rounded-full bg-white/[0.08]" />
            <div className="h-1.5 w-[50%] rounded-full bg-[rgba(0,229,200,0.3)]" />
          </div>
          <div className="rounded-md bg-white/[0.04] p-2.5 space-y-1.5">
            <div className="h-1.5 w-[40%] rounded-full bg-white/[0.08]" />
            <div className="h-1.5 rounded-full bg-white/[0.06]" />
          </div>
        </div>
      </div>
    </div>
  );
}
