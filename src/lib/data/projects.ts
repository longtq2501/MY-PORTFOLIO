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
      { value: "<800", accent: "ms", key: { en: "300+ sessions batch", vi: "Xử lý 300+ buổi học" } },
      { value: "<500", accent: "ms", key: { en: "SSE delivery", vi: "Phân phối SSE" } },
      { value: "<300", accent: "ms", key: { en: "AI inference", vi: "Suy luận AI" } },
    ],
    stack: ["Next.js 15", "React 19", "TypeScript", "Spring Boot 3.4", "Java 21", "MySQL", "WebRTC", "Groq AI", "Docker"],
    links: [
      { label: { en: "Live Demo", vi: "Trải nghiệm" }, href: "https://tutorpro.id.vn", variant: "primary" },
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
      en: "A microservices platform for real flood emergency scenarios — from GPS-tagged citizen rescue requests to live team dispatching, relief supply management, and real-time operations monitoring. Optimized for low-resource VPS deployment.",
      vi: "Nền tảng microservices cho các kịch bản cứu hộ khẩn cấp — từ yêu cầu cứu hộ gắn thẻ định vị đến điều phối đội ngũ, quản lý nhu yếu phẩm và giám sát vận hành thời gian thực. Được tối ưu hóa cho triển khai VPS cấu hình thấp.",
    },
    metrics: [
      { value: "7", accent: "×", key: { en: "Microservices", vi: "Dịch vụ" } },
      { value: "10", accent: "s", key: { en: "GPS interval", vi: "Tần suất GPS" } },
      { value: "5", accent: "+", key: { en: "Actor roles", vi: "Vai trò người dùng" } },
    ],
    stack: ["Spring Boot", "Next.js", "MySQL", "RabbitMQ", "Spring Cloud Gateway", "Docker", "GitHub Actions"],
    links: [
      {
        label: { en: "GitHub", vi: "GitHub" },
        href: "https://github.com/longtq2501/Flood-Rescue-Coordination-and-Relief-Management-System",
        variant: "primary",
      },
    ],
  },
  {
    id: "next-spring-skills",
    num: "03",
    tag: { en: "Open Source · Tooling", vi: "Mã nguồn mở · Công cụ" },
    tagColor: "#f7df1e",
    statusDot: "live",
    title: "Next Spring Skills CLI",
    description: {
      en: "A CLI tool package published on npm to standardize best practices and code patterns for Next.js + Spring Boot integration. Helps developers scaffold professional-grade fullstack projects quickly.",
      vi: "Gói công cụ CLI trên npm giúp chuẩn hóa các thực hành tốt nhất và mẫu code cho tích hợp Next.js + Spring Boot. Hỗ trợ khởi tạo nhanh các dự án fullstack chuyên nghiệp.",
    },
    metrics: [
      { value: "800", accent: "+", key: { en: "Downloads", vi: "Lượt tải" } },
      { value: "100", accent: "%", key: { en: "Standardized", vi: "Chuẩn hóa" } },
    ],
    stack: ["Node.js", "TypeScript", "NPM", "Commander.js"],
    links: [
      { label: { en: "View on NPM", vi: "Xem trên NPM" }, href: "https://www.npmjs.com/package/@longtq2501/next-spring-skills", variant: "primary" },
    ],
  },
];
