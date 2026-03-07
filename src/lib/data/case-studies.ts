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

type Section = {
    type: "problem" | "solution" | "architecture" | "feature" | "result" | "code" | "decisions";
    title: string;
    content: string;
    metrics?: { value: string; label: string; accent?: string }[];
    codeSnippet?: { lang: string; label: string; code: string };
    decisions?: { title: string; chosen: string; rejected: string; reason: string }[];
    features?: { title: string; detail: string; metric?: string }[];
};

export const caseStudies: CaseStudy[] = [
    {
        id: "tutor-pro",
        title: "Tutor Pro",
        tagline: "I built this to solve my own problem. Then it became a platform.",
        role: "Solo Fullstack Developer",
        period: "Dec 2024 – Present",
        status: "Live · 10+ active users",
        statusColor: "#00e5a0",
        accentColor: "#7c6aff",
        stack: ["Next.js 15", "React 19", "TypeScript", "Spring Boot 3.4", "Java 21", "JPA/Hibernate", "MySQL 8", "Caffeine Cache", "Bucket4j", "WebRTC", "STOMP WebSocket", "Groq AI (Llama 3.3 70B)", "VietQR/NAPAS-247", "JasperReports", "Docker Compose", "Railway", "Vercel", "Cloudinary"],
        liveUrl: "https://tutor-pro-app.vercel.app",
        githubUrl: "https://github.com/longtq2501/Tutor-Pro",
        overview: "I run a part-time tutoring business while studying full-time. Every week I was drowning in manual work: scheduling 50+ sessions in spreadsheets, chasing payments via Zalo, writing feedback by hand, managing multiple students and parents across different subjects. No tool existed that fit the Vietnamese tutoring context. So I built one — and kept building until it actually solved the problem.",
        sections: [
            {
                type: "problem",
                title: "The Problem",
                content: "Running a tutoring business manually at scale is unsustainable. Three core pain points drove every architectural decision:",
                features: [
                    { title: "Scheduling at scale", detail: "Creating 300+ recurring sessions manually each semester took hours and was error-prone. One wrong recurrence rule corrupts the entire calendar.", metric: "~3 hours → <1 second" },
                    { title: "Payment chaos", detail: "Tracking which students had paid, sending manual bank transfers, and reconciling payments was taking 2+ hours per week. Errors were constant.", metric: "15% reconciliation error → ~0%" },
                    { title: "Feedback quality", detail: "Writing meaningful feedback for 20+ students after each session was exhausting and inconsistent. Generic feedback adds no value.", metric: "<300ms AI-generated Vietnamese feedback" },
                ],
            },
            {
                type: "solution",
                title: "Key Engineering Solutions",
                content: "Each feature was designed with a specific performance constraint in mind. Here are the decisions that mattered most.",
                features: [
                    { title: "Bulk Calendar Generation", detail: "JDBC batch inserts with O(1) BitSet deduplication instead of per-session JPA saves. A semester of 300+ sessions generates in under 800ms.", metric: "<800ms for 300+ sessions" },
                    { title: "SSE Notification Engine", detail: "ConcurrentHashMap emitter pool with heartbeat keepalive and composite idx_recipient_read index. Zero polling, sub-500ms delivery.", metric: "<500ms delivery" },
                    { title: "VietQR Invoice System", detail: "Full NAPAS-247 spec implementation with CRC-16 checksum, PDF-embedded QR, and auto-reconciliation. Eliminated manual payment tracking entirely.", metric: "Errors 15% → ~0%" },
                    { title: "WebRTC Live Classroom", detail: "Full-Mesh P2P topology with STOMP WebSocket signaling. Collaborative whiteboard with 50ms render throttle. Composite .webm session recording.", metric: "Full-mesh P2P · 50ms throttle" },
                    { title: "AI Feedback (Groq)", detail: "Vietnamese culturally-aware prompting via Groq Llama 3.3 70B. Rate-limited with Bucket4j per-user token bucket. Cached with Caffeine for identical prompts.", metric: "Avg <300ms inference" },
                    { title: "Finance Page Optimization", detail: "Identified N+1 query pattern loading student payments. Replaced with JOIN FETCH + DTO projection. Reduced data transfer from 5KB to 2KB per request.", metric: "2.5s → <0.8s (68% faster)" },
                ],
            },
            {
                type: "code",
                title: "Bulk Session Generation — Core Algorithm",
                content: "The naive approach (one JPA save per session) would take 15+ seconds for a semester. The solution uses JDBC batch inserts with BitSet-based O(1) duplicate detection.",
                codeSnippet: {
                    lang: "java",
                    label: "SessionBulkService.java",
                    code: `// O(1) deduplication using BitSet on epoch-day slots
public void bulkCreateSessions(BulkSessionRequest req) {
    // 1. Load existing slots in ONE query
    BitSet occupied = loadOccupiedSlots(req.tutorId, req.range);
    
    // 2. Generate candidates without touching DB
    List<SessionRow> toInsert = new ArrayList<>();
    for (LocalDate d = req.start; !d.isAfter(req.end); d = d.plusDays(1)) {
        if (!req.daysOfWeek.contains(d.getDayOfWeek())) continue;
        int slot = (int) d.toEpochDay();
        if (!occupied.get(slot)) {          // O(1) check
            toInsert.add(new SessionRow(d, req));
            occupied.set(slot);
        }
    }
    
    // 3. Single JDBC batch insert — 300 rows in <800ms
    jdbcTemplate.batchUpdate(INSERT_SQL,
        toInsert, 500,                      // chunk size
        (ps, row) -> row.bind(ps));
}`,
                },
            },
            {
                type: "architecture",
                title: "System Architecture",
                content: "19 backend modules organized around domain boundaries. Frontend-backend communication uses REST for CRUD and SSE for real-time events. WebRTC P2P bypasses the server entirely for live classroom media — the backend only handles signaling via STOMP WebSocket.",
            },
            {
                type: "result",
                title: "Results",
                content: "After 6+ months in production with real users:",
                metrics: [
                    { value: "10+", label: "Active users" },
                    { value: "<800ms", label: "300+ sessions bulk" },
                    { value: "~0%", label: "Payment reconciliation errors" },
                    { value: "68%", label: "Finance page faster" },
                    { value: "<300ms", label: "AI feedback latency" },
                    { value: "19", label: "Backend modules" },
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
        stack: ["Spring Boot (Java 17)", "Next.js", "PostgreSQL (per service)", "RabbitMQ", "Apache Kafka", "Nginx", "Docker Compose", "GitHub Actions", "VPS (Ubuntu)", "SSE", "REST"],
        githubUrl: "https://github.com/longtq2501/Flood-Rescue-Coordination-and-Relief-Management-System",
        overview: "A 6-person team project to build a real-time coordination platform for flood rescue operations in Vietnam. As Tech Lead, my responsibility was architecture design, technology selection, full infrastructure setup, CI/CD pipeline, module skeleton (frontend + backend), and sprint management via Jira. The team builds features on top of the foundation I set up.",
        sections: [
            {
                type: "problem",
                title: "The Problem",
                content: "Flood rescue operations in Vietnam suffer from coordination failures: rescue requests get lost, teams can't be tracked in real-time, relief supplies are distributed without visibility, and there's no unified operations view for coordinators. The system needed to handle concurrent real-time events across 5 actor types with geographic awareness.",
                features: [
                    { title: "No request visibility", detail: "Citizens have no way to submit structured rescue requests or track their status. Coordinators receive requests through informal channels (phone, Zalo) with no geographic data.", metric: "GPS-tagged requests via structured form" },
                    { title: "No live team tracking", detail: "Coordinators can't see where rescue teams are in real-time. Assignment is done by phone call without proximity awareness.", metric: "10s GPS auto-report interval" },
                    { title: "Supply blindness", detail: "Relief supply managers have no visibility into inventory levels, distribution, or when to restock.", metric: "Real-time inventory with low-stock alerts" },
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
                        reason: "A 6-person team starting with 6 independent microservices means 6x the DevOps complexity before any business logic is validated. We validate domain boundaries in Sprint 1 as a modular monolith, then extract services once the seams are clear. This is the strangler fig pattern applied to greenfield development.",
                    },
                    {
                        title: "RabbitMQ + Kafka — not one or the other",
                        chosen: "RabbitMQ for task events, Kafka for streaming/audit",
                        rejected: "Kafka only or RabbitMQ only",
                        reason: "RabbitMQ gives us exactly-once delivery and consumer acknowledgment for rescue task assignments — we need guaranteed delivery, not just best-effort. Kafka gives us a replayable audit log of all GPS positions and status changes — critical for post-incident analysis. They solve different problems.",
                    },
                    {
                        title: "Database per Service from day 1",
                        chosen: "PostgreSQL per microservice",
                        rejected: "Shared database, split later",
                        reason: "Sharing a database across services creates invisible coupling that's painful to remove later. By assigning a dedicated PostgreSQL instance per service boundary now, we enforce the contract at the infrastructure level. The cost is a few extra containers; the benefit is genuine service independence.",
                    },
                ],
            },
            {
                type: "solution",
                title: "System Design — 6 Microservices",
                content: "Each service owns its domain, its database, and its API. Communication via RabbitMQ (task events) and Kafka (audit streams). Nginx as reverse proxy. GitHub Actions → Docker Hub → SSH VPS deploy on push to main.",
                features: [
                    { title: "user-service :8081", detail: "Auth, JWT, role management. 5 actor roles: Citizen, Rescue Team, Coordinator, Manager, Admin." },
                    { title: "rescue-request-service :8082", detail: "GPS-tagged request submission, status FSM (PENDING → VERIFIED → DISPATCHED → COMPLETED), citizen SSE notifications." },
                    { title: "dispatch-service :8083", detail: "Map-based team assignment, proximity calculation, 10s GPS auto-reporting, live coordinator tracking view." },
                    { title: "resource-service :8084", detail: "Relief supply warehouse, allocation tracking, low-stock alerts, distribution records." },
                    { title: "notification-service :8085", detail: "SSE emitter pool consuming RabbitMQ events. Delivers real-time status updates to all actor types." },
                    { title: "reporting-service :8086", detail: "KPI aggregation, team performance reports, operational analytics for Manager/Admin roles." },
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
                    { value: "FE+BE", label: "Module skeleton for team" },
                    { value: "Jira", label: "Sprint planning + task delegation" },
                    { value: "Sprint 1", label: "Active development" },
                ],
            },
        ],
    },
];