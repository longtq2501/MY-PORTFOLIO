export type CaseStudy = {
    id: string;
    title: string;
    tagline: string;
    role: string;
    period: string;
    status: string;
    statusColor: string;
    accentColor: string;
    stack: string[];
    liveUrl?: string;
    githubUrl: string;
    overview: string;
    sections: Section[];
};

export type Section =
    | { type: "features_list"; title: string; content: string; features: Feature[] }
    | { type: "benchmarks"; title: string; content: string; rows: BenchmarkRow[] }
    | { type: "decisions"; title: string; content: string; decisions: Decision[] }
    | { type: "security"; title: string; content: string; rows: SecurityRow[] }
    | { type: "roadmap"; title: string; content: string; quarters: RoadmapQuarter[] }
    | { type: "code"; title: string; content: string; codeSnippet: CodeSnippet }
    | { type: "problem" | "solution" | "result"; title: string; content: string; features?: Feature[]; metrics?: Metric[] };

type Feature = { title: string; problem?: string; solution: string; result: string; media?: string };
type BenchmarkRow = { module: string; metric: string; before: string; after: string };
type Decision = { title: string; chosen: string; rejected: string; reason: string };
type SecurityRow = { layer: string; impl: string };
type RoadmapQuarter = { quarter: string; items: string[] };
type CodeSnippet = { lang: string; label: string; code: string };
type Metric = { value: string; label: string };

export const caseStudies: CaseStudy[] = [
    {
        id: "tutor-pro",
        title: "Tutor Pro",
        tagline: "Built by a tutor, for tutors. A full-stack production system that automates every operational burden.",
        role: "Solo Fullstack Developer",
        period: "Dec 2024 – Present",
        status: "Live · 10+ active users",
        statusColor: "#00e5a0",
        accentColor: "#7c6aff",
        stack: [
            "Next.js 15", "React 19", "TypeScript 5", "Tailwind CSS 4", "Shadcn/UI",
            "TanStack Query v5", "Zustand", "Framer Motion", "@dnd-kit", "React Hook Form", "Zod",
            "Spring Boot 3.4", "Java 21", "JPA/Hibernate", "MySQL 8", "Caffeine Cache",
            "Spring Events", "JasperReports", "Bucket4j", "Groq AI (Llama 3.3 70B)",
            "VietQR/NAPAS-247", "WebRTC", "STOMP WebSocket",
            "Docker Compose", "Railway", "Vercel", "Cloudinary",
        ],
        liveUrl: "https://tutor-pro-app.vercel.app",
        githubUrl: "https://github.com/longtq2501/Tutor-Pro",
        overview:
            "Most tutors juggle spreadsheets, messaging apps, and manual bank transfers to run their classes. Tutor Pro replaces all of that with a single cohesive platform: automated scheduling, real-time notifications, live WebRTC teaching rooms, AI-generated feedback, and financial-grade invoicing — deployed and running in production. This is not a tutorial project. It solves real problems I faced as a part-time tutor, built to a standard I'd be comfortable deploying for other tutors to use.",
        sections: [
            {
                type: "features_list",
                title: "Engineering Highlights",
                content: "",
                features: [
                    {
                        title: "High-Performance Bulk Calendar Engine",
                        problem: "Initializing an entire month of sessions for 30+ students one-by-one is unusable in practice.",
                        solution: "Optimistic Batch Processing with In-Memory Deduplication (O(1) conflict detection), Single-Pass Database Query, and JDBC Batch Inserts for transactional integrity.",
                        result: "300+ sessions generated across a full student roster in < 800ms.",
                        media: "https://github.com/user-attachments/assets/7fb02678-e74b-4e42-83cd-2875e505fa63",
                    },
                    {
                        title: "Event-Driven Real-Time Notifications",
                        problem: "Students need to know instantly when a session is rescheduled, a grade is posted, or an exam is assigned — without polling.",
                        solution: "Server-Sent Events over Spring Application Events. SseEmittersManager maintains a thread-safe ConcurrentHashMap of emitters per user, with a heartbeat protocol to survive Docker/proxy connection drops and auto-reconnect on the client.",
                        result: "End-to-end delivery in < 500ms. idx_recipient_read index keeps unread-count queries at < 10ms regardless of volume.",
                        media: "https://github.com/user-attachments/assets/da784f98-f862-4ee5-89ee-33a970762bec",
                    },
                    {
                        title: "AI Feedback Engine (Groq + Llama 3.3 70B)",
                        problem: "Writing individualized, contextually appropriate feedback in Vietnamese for every student after every class is time-consuming and repetitive.",
                        solution: "Groq's inference API with prompt engineering that enforces Vietnamese tone, cultural context, and length constraints based on the student's performance data passed in at runtime.",
                        result: "Context-aware, culturally appropriate Vietnamese feedback in < 300ms — replacing static templates with genuine intelligence.",
                        media: "https://github.com/user-attachments/assets/cc767ced-400f-4840-9c84-795e8b0d2582",
                    },
                    {
                        title: "Financial-Grade VietQR Invoicing",
                        problem: "Manual payment tracking creates reconciliation errors and time spent chasing parents for confirmation.",
                        solution: "Dynamic VietQR generation embedded directly in PDF invoices, built to the NAPAS-247 standard. CRC-16 checksum validation ensures transaction data integrity end-to-end.",
                        result: "100% automated reconciliation flow. Error rate reduced from ~15% to near zero.",
                        media: "https://github.com/user-attachments/assets/d6724bbe-c88e-420b-8638-807e011052e1",
                    },
                    {
                        title: "Interactive Live Teaching Room (WebRTC + WebSocket)",
                        problem: "Teaching online requires more than video — synchronized whiteboard, session recording, and graceful hardware fallback.",
                        solution: "Full-Mesh WebRTC for P2P media (server never touches the video stream). STOMP over WebSocket for state sync. Whiteboard throttled at 50ms cuts congestion 80%. Media Access Guard catches NotReadableError and surfaces human-readable guidance. Composite Stream Recording merges screen, webcam, and audio into a single .webm — entirely in-browser.",
                        result: "< 200ms interactive latency. One-click recording. No crash on hardware conflicts.",
                        media: "https://github.com/user-attachments/assets/b5e35a55-435d-4468-8dea-5fac8ff1f934",
                    },
                    {
                        title: "Drag-and-Drop Calendar with Prefetching",
                        problem: "Calendar UIs feel slow when navigating months, and drag interactions drop frames on re-renders.",
                        solution: "@dnd-kit with Optimistic Rollback. React.memo + useCallback eliminate 95% of unnecessary re-renders. Adjacent months prefetched automatically on load.",
                        result: "Month navigation instant (~0ms). Drag interactions at 60fps.",
                        media: "https://github.com/user-attachments/assets/27cea769-dafc-45cf-82f7-4f6b06e2da1c",
                    },
                    {
                        title: "Intelligent Assessment & Auto-Grading",
                        problem: "Digitizing exam questions from Word/PDF is tedious. Exam data loss from browser crashes or accidental navigation is unacceptable.",
                        solution: "ExerciseParserService uses a Hybrid Regex Parsing Engine to bulk-ingest MCQ and Essay questions from plain text. Exam Player implements debounced auto-save (~500ms), timer sync, and auto-submit on expiry — fault-tolerant by design.",
                        result: "Question digitization time reduced by 90%. Zero data loss architecture.",
                        media: "https://github.com/user-attachments/assets/13a7e1fb-2126-4722-be4a-5c368b719f1d",
                    },
                    {
                        title: "Bulk Lesson Assignment (50+ Students)",
                        problem: "Assigning lessons one student at a time doesn't scale.",
                        solution: "Sticky Action Toolbar with multi-select UI and Optimistic UI Updates. Batch API requests collapse N individual calls into one. React Query cache invalidation keeps the UI consistent after bulk operations.",
                        result: "Assign or unassign lessons for 50+ students in < 2 seconds.",
                        media: "https://github.com/user-attachments/assets/d2901191-7c90-4f64-a0a7-d0b29ec77794",
                    },
                    {
                        title: "Sequential Learning with Server-Side Gating",
                        problem: "Client-side lesson locking can be bypassed by anyone with DevTools.",
                        solution: "Access control enforced at both the Service Layer and Database Level. Lesson progression validated server-side — no client-side state can unlock a lesson the student hasn't earned.",
                        result: "Pedagogical integrity that cannot be circumvented.",
                        media: "https://github.com/user-attachments/assets/61d815e0-a6df-4f0b-84da-5f57e915f919",
                    },
                    {
                        title: "Custom Video Player with Resizable Split-View",
                        problem: "Students switch between video and lesson materials constantly — fixed layouts are painful.",
                        solution: "Custom video player (0.5x–2x speed) in a resizable CSS Grid split-view alongside lesson materials. Layout ratio persisted in LocalStorage. JOIN FETCH + DTO projection optimized the lesson detail query.",
                        result: "60–70% query time reduction. API payload cut 60% (~5KB → ~2KB).",
                        media: "https://github.com/user-attachments/assets/51dfbcc0-d5f5-41e0-811c-9011912a2ac7",
                    },
                ],
            },
            {
                type: "benchmarks",
                title: "Performance Benchmarks",
                content: "Measured in production against real usage:",
                rows: [
                    { module: "Calendar", metric: "Initial load", before: "~1.8s", after: "< 0.8s" },
                    { module: "Calendar", metric: "Month navigation", before: "~500ms", after: "~0ms" },
                    { module: "Finance", metric: "Page load", before: "~2.5s", after: "< 0.8s" },
                    { module: "Finance", metric: "Data consistency", before: "Desync issues", after: "100% accurate" },
                    { module: "Learning", metric: "Lesson detail query", before: "3 queries (N+1)", after: "1 query" },
                    { module: "Learning", metric: "API payload", before: "~5KB", after: "~2KB" },
                    { module: "Notifications", metric: "Delivery latency", before: "—", after: "< 500ms" },
                    { module: "Notifications", metric: "Unread count query", before: "—", after: "< 10ms" },
                    { module: "Bulk Calendar", metric: "300+ session init", before: "—", after: "< 800ms" },
                ],
            },
            {
                type: "decisions",
                title: "Architecture Decisions",
                content: "Three choices that shaped every other decision in the codebase.",
                decisions: [
                    {
                        title: "Modular Monolith over Microservices",
                        chosen: "Single deployable unit with clear module boundaries",
                        rejected: "Microservices from day 1",
                        reason: "Solo project — microservices would mean 10× the DevOps overhead with no team to justify it. Clear module boundaries make extraction straightforward if scale ever demands it.",
                    },
                    {
                        title: "SSE over WebSocket for notifications",
                        chosen: "Server-Sent Events (SSE)",
                        rejected: "WebSocket for all real-time",
                        reason: "Notifications flow in one direction. SSE is HTTP-native, proxy-transparent, and requires no handshake upgrade. WebSocket is reserved for the live room where true bidirectionality is actually needed.",
                    },
                    {
                        title: "React Query over Redux",
                        chosen: "TanStack Query v5",
                        rejected: "Redux Toolkit",
                        reason: "All async state is server state. React Query's stale-while-revalidate, optimistic updates, and cache invalidation handle this natively. Redux would be ceremonial overhead with no real benefit.",
                    },
                ],
            },
            {
                type: "security",
                title: "Security",
                content: "Defense-in-depth across every layer:",
                rows: [
                    { layer: "Authentication", impl: "JWT + Refresh Token via HttpOnly cookies" },
                    { layer: "Authorization", impl: "Dynamic RBAC — RoleEntity + Permission enum, @PreAuthorize per endpoint" },
                    { layer: "Rate Limiting", impl: "Bucket4j on login and session creation endpoints" },
                    { layer: "Input Validation", impl: "Zod (frontend) + Jakarta Validation (backend)" },
                    { layer: "File Access", impl: "Cloudinary signed uploads, per-student document access control" },
                    { layer: "Audit Trail", impl: "AuditLogController records every sensitive mutation" },
                ],
            },
            {
                type: "roadmap",
                title: "Roadmap",
                content: "",
                quarters: [
                    {
                        quarter: "Q2 2026",
                        items: [
                            "Multi-tenancy — expand to support multiple tutors (SaaS model)",
                            "Bank API integration — auto-confirm payments when funds arrive",
                            "Google Calendar two-way sync",
                        ],
                    },
                    {
                        quarter: "Q3 2026",
                        items: [
                            "Zalo/Telegram bot for automated debt reminders",
                            "Learning analytics dashboard with progress trend prediction",
                            "Voice-to-text session notes",
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "flood-rescue",
        title: "Flood Rescue Coordination",
        tagline: "Designed the architecture. Set up the infrastructure. Led the team.",
        role: "Tech Lead · 6-person Team",
        period: "2025 – Present",
        status: "Active · Sprint 1",
        statusColor: "#ffaa00",
        accentColor: "#00e5a0",
        stack: [
            "Spring Boot (Java 17)", "Next.js", "PostgreSQL (per service)",
            "RabbitMQ", "Apache Kafka", "Nginx",
            "Docker Compose", "GitHub Actions", "VPS (Ubuntu)", "SSE", "REST",
        ],
        githubUrl: "https://github.com/longtq2501/Flood-Rescue-Coordination-and-Relief-Management-System",
        overview:
            "A 6-person team project to build a real-time coordination platform for flood rescue operations in Vietnam. As Tech Lead, my responsibility was architecture design, technology selection, full infrastructure setup, CI/CD pipeline, module skeleton (frontend + backend), and sprint management via Jira. The team builds features on top of the foundation I set up.",
        sections: [
            {
                type: "problem",
                title: "The Problem",
                content: "Flood rescue operations in Vietnam suffer from coordination failures: rescue requests get lost, teams can't be tracked in real-time, relief supplies are distributed without visibility, and there's no unified operations view for coordinators.",
                features: [
                    { title: "No request visibility", solution: "", result: "", problem: "Citizens have no way to submit structured rescue requests or track status. Coordinators receive requests through informal channels (phone, Zalo) with no geographic data." },
                    { title: "No live team tracking", solution: "", result: "", problem: "Coordinators can't see where rescue teams are in real-time. Assignment is done by phone call without proximity awareness." },
                    { title: "Supply blindness", solution: "", result: "", problem: "Relief supply managers have no visibility into inventory levels, distribution, or when to restock." },
                ],
            },
            {
                type: "decisions",
                title: "Key Architectural Decisions",
                content: "Three decisions that defined the entire system design:",
                decisions: [
                    {
                        title: "Modular Monolith first, Microservices after",
                        chosen: "Modular Monolith in Sprint 1",
                        rejected: "Full microservices from day 1",
                        reason: "A 6-person team starting with 6 independent microservices means 6× the DevOps complexity before any business logic is validated. We validate domain boundaries in Sprint 1 as a modular monolith, then extract services once the seams are clear.",
                    },
                    {
                        title: "RabbitMQ + Kafka — not one or the other",
                        chosen: "RabbitMQ for task events, Kafka for streaming/audit",
                        rejected: "Kafka only or RabbitMQ only",
                        reason: "RabbitMQ gives exactly-once delivery for rescue task assignments — we need guaranteed delivery. Kafka gives a replayable audit log of all GPS positions and status changes — critical for post-incident analysis. They solve different problems.",
                    },
                    {
                        title: "Database per Service from day 1",
                        chosen: "PostgreSQL per microservice",
                        rejected: "Shared database, split later",
                        reason: "Sharing a database across services creates invisible coupling that's painful to remove later. Dedicated PostgreSQL per service enforces the contract at the infrastructure level from the start.",
                    },
                ],
            },
            {
                type: "solution",
                title: "System Design — 6 Microservices",
                content: "Each service owns its domain, its database, and its API. Communication via RabbitMQ (task events) and Kafka (audit streams). Nginx as reverse proxy. GitHub Actions → Docker Hub → SSH VPS on push to main.",
                features: [
                    { title: "user-service :8081", solution: "Auth, JWT, role management.", result: "5 actor roles: Citizen, Rescue Team, Coordinator, Manager, Admin." },
                    { title: "rescue-request-service :8082", solution: "GPS-tagged request submission, status FSM.", result: "PENDING → VERIFIED → DISPATCHED → COMPLETED with citizen SSE notifications." },
                    { title: "dispatch-service :8083", solution: "Map-based team assignment, proximity calculation.", result: "10s GPS auto-reporting, live coordinator tracking view." },
                    { title: "resource-service :8084", solution: "Relief supply warehouse, allocation tracking.", result: "Low-stock alerts, distribution records." },
                    { title: "notification-service :8085", solution: "SSE emitter pool consuming RabbitMQ events.", result: "Real-time status updates to all actor types." },
                    { title: "reporting-service :8086", solution: "KPI aggregation, team performance reports.", result: "Operational analytics for Manager/Admin roles." },
                ],
            },
            {
                type: "code",
                title: "CI/CD Pipeline",
                content: "Every push to main triggers build → Docker image push → SSH deploy to VPS. Zero manual steps.",
                codeSnippet: {
                    lang: "yaml",
                    label: ".github/workflows/deploy.yml",
                    code: `name: Deploy to VPS

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Build & push Docker image
        run: |
          docker build -t \${{ secrets.DOCKERHUB_USERNAME }}/flood-rescue:latest .
          echo \${{ secrets.DOCKERHUB_TOKEN }} | docker login \\
            -u \${{ secrets.DOCKERHUB_USERNAME }} --password-stdin
          docker push \${{ secrets.DOCKERHUB_USERNAME }}/flood-rescue:latest

      - name: Deploy to VPS via SSH
        uses: appleboy/ssh-action@master
        with:
          host: \${{ secrets.VPS_HOST }}
          username: \${{ secrets.VPS_USER }}
          key: \${{ secrets.VPS_SSH_KEY }}
          script: |
            cd /opt/flood-rescue
            docker compose pull
            docker compose up -d --remove-orphans`,
                },
            },
            {
                type: "result",
                title: "My Contribution as Tech Lead",
                content: "What I personally designed and built before the team started feature development:",
                metrics: [
                    { value: "6×", label: "Microservices architected" },
                    { value: "100%", label: "Infra setup (Docker, Nginx, Kafka, RabbitMQ)" },
                    { value: "CI/CD", label: "GitHub Actions → VPS pipeline" },
                    { value: "FE+BE", label: "Module skeleton for entire team" },
                    { value: "Jira", label: "Sprint planning + task delegation" },
                    { value: "Sprint 1", label: "Active development now" },
                ],
            },
        ],
    },
];