export type Project = {
  id: string;
  num: string;
  tag: { en: string; vi: string };
  tagColor: string;
  statusDot: "live" | "active" | "inactive";
  title: string;
  description: { en: string; vi: string };
  metrics: { value: string; accent?: string; key: { en: string; vi: string } }[];
  stack: string[];
  links: { label: { en: string; vi: string }; href: string; variant: "primary" | "ghost" }[];
};

export const projects: Project[] = [
  {
    id: "tutor-pro",
    num: "01",
    tag: { en: "Solo · Production", vi: "Độc lập · Vận hành" },
    tagColor: "var(--accent)",
    statusDot: "live",
    title: "Tutor Pro",
    description: {
      en: "A complete EdTech ecosystem built to automate every burden of running a tutoring business. Real-time scheduling, live WebRTC classrooms, AI-generated feedback in Vietnamese, and financial-grade VietQR invoicing — all in one platform I use daily.",
      vi: "Tự động hóa quản lý gia sư. Lịch trình thời gian thực, lớp học WebRTC trực tuyến, phản hồi AI và hóa đơn VietQR — một nền tảng chuyển đổi số giáo dục tôi sử dụng hàng ngày.",
    },
    metrics: [
      { value: "<800", accent: "ms", key: { en: "300+ sessions bulk", vi: "Tạo 300+ buổi học" } },
      { value: "<500", accent: "ms", key: { en: "SSE notification", vi: "Thông báo SSE" } },
      { value: "<300", accent: "ms", key: { en: "AI feedback (Groq)", vi: "Phản hồi AI" } },
    ],
    stack: ["Next.js 15", "React 19", "TypeScript", "Spring Boot 3.4", "Java 21", "MySQL", "WebRTC", "Groq AI", "Docker"],
    links: [
      { label: { en: "Live Demo", vi: "Trải nghiệm" }, href: "https://tutor-pro-app.vercel.app", variant: "primary" },
      { label: { en: "GitHub", vi: "GitHub" }, href: "https://github.com/longtq2501/Tutor-Pro", variant: "ghost" },
    ],
  },
  {
    id: "flood-rescue",
    num: "02",
    tag: { en: "Tech Lead · 6-person Team · Active", vi: "Tech Lead · Nhóm 6 người · Đang phát triển" },
    tagColor: "#00e5a0",
    statusDot: "active",
    title: "Flood Rescue Coordination",
    description: {
      en: "A microservices platform for real flood emergency scenarios — from GPS-tagged citizen rescue requests to live team dispatching, relief supply management, and real-time operations monitoring across 5 actor roles.",
      vi: "Nền tảng microservices cho các kịch bản cứu hộ khẩn cấp — từ yêu cầu cứu hộ gắn thẻ định vị đến điều phối đội ngũ, quản lý nhu yếu phẩm và giám sát vận hành thời gian thực.",
    },
    metrics: [
      { value: "6", accent: "×", key: { en: "Microservices", vi: "Dịch vụ" } },
      { value: "10", accent: "s", key: { en: "GPS interval", vi: "Tần suất GPS" } },
      { value: "5", accent: "+", key: { en: "Actor roles", vi: "Vai trò người dùng" } },
    ],
    stack: ["Spring Boot", "Next.js", "PostgreSQL", "RabbitMQ", "Kafka", "Nginx", "Docker", "GitHub Actions"],
    links: [
      {
        label: { en: "GitHub", vi: "GitHub" },
        href: "https://github.com/longtq2501/Flood-Rescue-Coordination-and-Relief-Management-System",
        variant: "primary",
      },
    ],
  },
];
