export type Project = {
  id: string;
  num: string;
  tag: string;
  tagColor: string;
  statusDot: "live" | "active" | "inactive";
  title: string;
  description: string;
  metrics: { value: string; accent?: string; key: string }[];
  stack: string[];
  links: { label: string; href: string; variant: "primary" | "ghost" }[];
};

export const projects: Project[] = [
  {
    id: "tutor-pro",
    num: "01",
    tag: "Solo · Production",
    tagColor: "var(--accent)",
    statusDot: "live",
    title: "Tutor Pro",
    description:
      "A complete EdTech ecosystem built to automate every burden of running a tutoring business. Real-time scheduling, live WebRTC classrooms, AI-generated feedback in Vietnamese, and financial-grade VietQR invoicing — all in one platform I use daily.",
    metrics: [
      { value: "<800", accent: "ms", key: "300+ sessions bulk" },
      { value: "<500", accent: "ms", key: "SSE notification" },
      { value: "<300", accent: "ms", key: "AI feedback (Groq)" },
    ],
    stack: ["Next.js 15", "React 19", "TypeScript", "Spring Boot 3.4", "Java 21", "MySQL", "WebRTC", "Groq AI", "Docker"],
    links: [
      { label: "Live Demo", href: "https://tutor-pro-app.vercel.app", variant: "primary" },
      { label: "GitHub", href: "https://github.com/longtq2501/Tutor-Pro", variant: "ghost" },
    ],
  },
  {
    id: "flood-rescue",
    num: "02",
    tag: "Tech Lead · 6-person Team · Active",
    tagColor: "#00e5a0",
    statusDot: "active",
    title: "Flood Rescue Coordination",
    description:
      "A microservices platform for real flood emergency scenarios — from GPS-tagged citizen rescue requests to live team dispatching, relief supply management, and real-time operations monitoring across 5 actor roles.",
    metrics: [
      { value: "6", accent: "×", key: "Microservices" },
      { value: "10", accent: "s", key: "GPS interval" },
      { value: "5", accent: "+", key: "Actor roles" },
    ],
    stack: ["Spring Boot", "Next.js", "PostgreSQL", "RabbitMQ", "Kafka", "Nginx", "Docker", "GitHub Actions"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/longtq2501/Flood-Rescue-Coordination-and-Relief-Management-System",
        variant: "primary",
      },
      { label: "Case Study", href: "#", variant: "ghost" },
    ],
  },
];
