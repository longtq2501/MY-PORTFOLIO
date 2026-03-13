export default function FloodRescueMock() {
  const pins = [
    { color: "#ff5050", top: "30%", left: "35%" },
    { color: "#00e5a0", top: "55%", left: "60%", pulse: true },
    { color: "#ffaa00", top: "40%", left: "75%" },
  ];

  const rows = [
    { color: "#ff5050", badge: "PENDING", badgeClass: "bg-[rgba(255,80,80,0.15)] text-[#ff5050]" },
    { color: "#00e5a0", badge: "VERIFIED", badgeClass: "bg-[rgba(0,229,160,0.15)] text-[#00e5a0]" },
    { color: "var(--accent)", badge: "DISPATCHED", badgeClass: "bg-[rgba(124,106,255,0.15)] text-[var(--accent)]" },
  ];

  return (
    <div className="relative w-full rounded-2xl border border-[rgba(0,229,160,0.12)] bg-[#050a08] shadow-[0_32px_80px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-500 hover:border-[rgba(0,229,160,0.3)]">
      {/* Background Glow */}
      <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[rgba(0,229,160,0.08)] blur-[80px]" />
      <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[rgba(124,106,255,0.05)] blur-[80px]" />

      {/* Topbar */}
      <div className="flex h-11 items-center gap-2 border-b border-[rgba(0,229,160,0.1)] bg-[#0a1410] px-5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
        </div>
        <div className="ml-4 h-1.5 w-24 rounded-full bg-white/[0.05]" />
      </div>

      {/* Map area */}
      <div className="relative h-[180px] overflow-hidden bg-[#08120e]">
        {/* Advanced Grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,229,160,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,160,0.2) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,229,160,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,160,0.1) 1px, transparent 1px)",
            backgroundSize: "6px 6px",
          }}
        />

        {/* Scan line effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(0,229,160,0.03)] to-transparent h-20 w-full animate-scan-slow pointer-events-none" />

        {/* Pins */}
        {pins.map((pin, i) => (
          <div key={i} className="absolute" style={{ top: pin.top, left: pin.left }}>
            <div
              className="h-3 w-3 rounded-full border-2 shadow-[0_0_12px_rgba(0,229,160,0.4)]"
              style={{ background: pin.color, borderColor: "white" }}
            />
            {pin.pulse && (
              <div
                className="absolute inset-0 rounded-full border-2"
                style={{
                  borderColor: pin.color,
                  animation: "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Dispatch list */}
      <div className="p-4 space-y-3">
        {rows.map((row, i) => (
          <div
            key={i}
            className="group flex items-center gap-3 rounded-lg border border-white/[0.03] bg-white/[0.02] p-3 transition-colors hover:bg-white/[0.04]"
          >
            <span className="h-2 w-2 flex-shrink-0 rounded-full" style={{ background: row.color, boxShadow: `0 0 8px ${row.color}` }} />
            <div className="flex-1 space-y-1.5">
              <div className="h-1 w-full max-w-[140px] rounded-full bg-white/[0.1]" />
              <div className="h-1 w-full max-w-[80px] rounded-full bg-white/[0.05]" />
            </div>
            <span className={`rounded-md px-2 py-1 text-[9px] font-bold tracking-wider ${row.badgeClass}`}>
              {row.badge}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
