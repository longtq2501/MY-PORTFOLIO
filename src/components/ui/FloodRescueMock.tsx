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
    <div className="w-full max-w-[420px] rounded-xl border border-[rgba(0,229,160,0.15)] bg-[#0a0f0d] shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden">
      {/* Topbar */}
      <div className="flex h-9 items-center gap-1.5 border-b border-[rgba(0,229,160,0.08)] bg-[#0d1a14] px-3.5">
        <span className="h-2 w-2 rounded-full bg-[#ff5f56]" />
        <span className="h-2 w-2 rounded-full bg-[#ffbd2e]" />
        <span className="h-2 w-2 rounded-full bg-[#27c93f]" />
      </div>

      {/* Map area */}
      <div className="relative h-[130px] overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0d1a14 0%, #091510 100%)" }}>
        {/* Grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,229,160,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,160,0.05) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        {/* Pins */}
        {pins.map((pin, i) => (
          <div key={i} className="absolute" style={{ top: pin.top, left: pin.left }}>
            <div
              className="h-2.5 w-2.5 rounded-full border-2"
              style={{ background: pin.color + "cc", borderColor: pin.color }}
            />
            {pin.pulse && (
              <div
                className="absolute inset-0 rounded-full border"
                style={{
                  borderColor: "rgba(0,229,160,0.4)",
                  animation: "mapPulse 2s ease-out infinite",
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Dispatch list */}
      <div className="p-3">
        {rows.map((row, i) => (
          <div
            key={i}
            className="flex items-center gap-2 border-b border-white/[0.04] py-2 last:border-none"
          >
            <span className="h-2 w-2 flex-shrink-0 rounded-full" style={{ background: row.color }} />
            <div className="flex-1 h-1.5 rounded-full bg-white/[0.07]" />
            <span className={`rounded px-1.5 py-0.5 text-[8px] font-semibold ${row.badgeClass}`}>
              {row.badge}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
