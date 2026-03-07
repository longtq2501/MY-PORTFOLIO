import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Tôn Quỳnh Long — Fullstack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "1200px",
                    height: "630px",
                    background: "#08080f",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "80px",
                    fontFamily: "sans-serif",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* Grid background */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />

                {/* Glow orb top-right */}
                <div
                    style={{
                        position: "absolute",
                        top: "-100px",
                        right: "-100px",
                        width: "500px",
                        height: "500px",
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(124,106,255,0.25) 0%, transparent 70%)",
                        filter: "blur(60px)",
                    }}
                />

                {/* Glow orb bottom-left */}
                <div
                    style={{
                        position: "absolute",
                        bottom: "-80px",
                        left: "0px",
                        width: "400px",
                        height: "400px",
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(0,229,200,0.12) 0%, transparent 70%)",
                        filter: "blur(60px)",
                    }}
                />

                {/* Content */}
                <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "0px" }}>
                    {/* Eyebrow */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            marginBottom: "20px",
                        }}
                    >
                        <div style={{ width: "28px", height: "2px", background: "#7c6aff" }} />
                        <span
                            style={{
                                fontSize: "14px",
                                fontWeight: 600,
                                letterSpacing: "0.15em",
                                textTransform: "uppercase",
                                color: "#7c6aff",
                            }}
                        >
                            Fullstack Developer · Ho Chi Minh City
                        </span>
                    </div>

                    {/* Name */}
                    <div
                        style={{
                            fontSize: "88px",
                            fontWeight: 900,
                            lineHeight: 0.95,
                            letterSpacing: "-0.03em",
                            color: "#e8e6ff",
                            marginBottom: "28px",
                        }}
                    >
                        Tôn Quỳnh Long
                    </div>

                    {/* Tagline */}
                    <div
                        style={{
                            fontSize: "22px",
                            color: "#7a7891",
                            lineHeight: 1.5,
                            maxWidth: "700px",
                            marginBottom: "48px",
                        }}
                    >
                        I design the interface, architect the backend,{" "}
                        <span style={{ color: "#e8e6ff", fontWeight: 500 }}>and ship the whole thing.</span>
                    </div>

                    {/* Stats row */}
                    <div style={{ display: "flex", gap: "48px", alignItems: "center" }}>
                        {[
                            { num: "2×", label: "Production Projects" },
                            { num: "10+", label: "Active Users" },
                            { num: "6↑", label: "Team as Tech Lead" },
                        ].map((s, i) => (
                            <div key={i} style={{ display: "flex", alignItems: "center", gap: "48px" }}>
                                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                                    <span style={{ fontSize: "32px", fontWeight: 900, color: "#e8e6ff", lineHeight: 1 }}>
                                        {s.num}
                                    </span>
                                    <span style={{ fontSize: "13px", color: "#7a7891", letterSpacing: "0.04em" }}>
                                        {s.label}
                                    </span>
                                </div>
                                {i < 2 && (
                                    <div style={{ width: "1px", height: "40px", background: "rgba(255,255,255,0.1)" }} />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom right: URL */}
                <div
                    style={{
                        position: "absolute",
                        bottom: "40px",
                        right: "80px",
                        fontSize: "14px",
                        color: "#4a4866",
                        letterSpacing: "0.05em",
                    }}
                >
                    tonquynhlong.vercel.app
                </div>
            </div>
        ),
        { ...size }
    );
}