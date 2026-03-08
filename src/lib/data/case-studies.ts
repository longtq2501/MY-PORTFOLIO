export type CaseStudy = {
    id: string;
    title: string;
    tagline: { en: string; vi: string };
    role: { en: string; vi: string };
    period: { en: string; vi: string };
    status: { en: string; vi: string };
    statusColor: string;
    accentColor: string;
    stack: string[];
    liveUrl?: string;
    githubUrl: string;
    overview: { en: string; vi: string };
    sections: Section[];
};

export type Section =
    | { type: "features_list"; title: { en: string; vi: string }; content: { en: string; vi: string }; features: Feature[] }
    | { type: "benchmarks"; title: { en: string; vi: string }; content: { en: string; vi: string }; rows: BenchmarkRow[] }
    | { type: "decisions"; title: { en: string; vi: string }; content: { en: string; vi: string }; decisions: Decision[] }
    | { type: "security"; title: { en: string; vi: string }; content: { en: string; vi: string }; rows: SecurityRow[] }
    | { type: "roadmap"; title: { en: string; vi: string }; content: { en: string; vi: string }; quarters: RoadmapQuarter[] }
    | { type: "code"; title: { en: string; vi: string }; content: { en: string; vi: string }; codeSnippet: CodeSnippet }
    | { type: "problem" | "solution" | "result"; title: { en: string; vi: string }; content: { en: string; vi: string }; features?: Feature[]; metrics?: Metric[] };

type Feature = { title: { en: string; vi: string }; problem?: { en: string; vi: string }; solution: { en: string; vi: string }; result: { en: string; vi: string }; media?: string };
type BenchmarkRow = { module: { en: string; vi: string }; metric: { en: string; vi: string }; before: string; after: string };
type Decision = { title: { en: string; vi: string }; chosen: { en: string; vi: string }; rejected: { en: string; vi: string }; reason: { en: string; vi: string } };
type SecurityRow = { layer: { en: string; vi: string }; impl: { en: string; vi: string } };
type RoadmapQuarter = { quarter: { en: string; vi: string }; items: { en: string; vi: string }[] };
type CodeSnippet = { lang: string; label: string; code: string };
type Metric = { value: string; label: { en: string; vi: string } };

export const caseStudies: CaseStudy[] = [
    {
        id: "tutor-pro",
        title: "Tutor Pro",
        tagline: {
            en: "Built by a tutor, for tutors. A full-stack production system that automates every operational burden.",
            vi: "Xây dựng bởi gia sư, dành cho gia sư. Một hệ thống sản phẩm hoàn chỉnh tự động hóa mọi gánh nặng vận hành."
        },
        role: { en: "Solo Fullstack Developer", vi: "Lập trình viên Fullstack Độc lập" },
        period: { en: "Dec 2024 – Present", vi: "Tháng 12/2024 – Hiện tại" },
        status: { en: "Live · 10+ active users", vi: "Đang vận hành · 10+ người dùng hoạt động" },
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
        overview: {
            en: "Most tutors juggle spreadsheets, messaging apps, and manual bank transfers to run their classes. Tutor Pro replaces all of that with a single cohesive platform: automated scheduling, real-time notifications, live WebRTC teaching rooms, AI-generated feedback, and financial-grade invoicing — deployed and running in production. This is not a tutorial project. It solves real problems I faced as a part-time tutor, built to a standard I'd be comfortable deploying for other tutors to use.",
            vi: "Hầu hết gia sư phải xoay xở với bảng tính, ứng dụng nhắn tin và chuyển khoản ngân hàng thủ công để vận hành lớp học. Tutor Pro thay thế tất cả bằng một nền tảng thống nhất: lập lịch tự động, thông báo thời gian thực, phòng học trực tuyến WebRTC, phản hồi do AI tạo và xuất hóa đơn chuẩn tài chính — đã triển khai và đang vận hành thực tế. Đây không phải là một dự án bài tập. Nó giải quyết những vấn đề thực tế mà tôi gặp phải khi làm gia sư bán thời gian, được xây dựng với tiêu chuẩn có thể triển khai thực tế cho các gia sư khác sử dụng."
        },
        sections: [
            {
                type: "features_list",
                title: { en: "Engineering Highlights", vi: "Điểm nhấn Kỹ thuật" },
                content: { en: "", vi: "" },
                features: [
                    {
                        title: { en: "High-Performance Bulk Calendar Engine", vi: "Công cụ Lập lịch Hàng loạt Hiệu năng cao" },
                        problem: {
                            en: "Initializing an entire month of sessions for 30+ students one-by-one is unusable in practice.",
                            vi: "Khởi tạo từng buổi học cho hơn 30 học sinh trong cả tháng một cách thủ công là điều không khả thi trong thực tế."
                        },
                        solution: {
                            en: "Optimistic Batch Processing with In-Memory Deduplication (O(1) conflict detection), Single-Pass Database Query, and JDBC Batch Inserts for transactional integrity.",
                            vi: "Xử lý hàng loạt (Batch Processing) với cơ chế khử trùng lặp trong bộ nhớ (O(1)), Truy vấn cơ sở dữ liệu một lần và JDBC Batch Insert để đảm bảo tính toàn vẹn giao dịch."
                        },
                        result: {
                            en: "300+ sessions generated across a full student roster in < 800ms.",
                            vi: "Tạo hơn 300 buổi học cho toàn bộ danh sách học sinh trong chưa đầy 800ms."
                        },
                        media: "https://github.com/user-attachments/assets/7fb02678-e74b-4e42-83cd-2875e505fa63",
                    },
                    {
                        title: { en: "Event-Driven Real-Time Notifications", vi: "Thông báo Thời gian thực Hướng sự kiện" },
                        problem: {
                            en: "Students need to know instantly when a session is rescheduled, a grade is posted, or an exam is assigned — without polling.",
                            vi: "Học sinh cần biết ngay lập tức khi buổi học bị dời lịch, có điểm mới hoặc bài kiểm tra được giao — mà không cần tải lại trang."
                        },
                        solution: {
                            en: "Server-Sent Events over Spring Application Events. SseEmittersManager maintains a thread-safe ConcurrentHashMap of emitters per user, with a heartbeat protocol to survive Docker/proxy connection drops and auto-reconnect on the client.",
                            vi: "Sử dụng Server-Sent Events (SSE) dựa trên Spring Application Events. SseEmittersManager duy trì một ConcurrentHashMap thread-safe cho mỗi người dùng, cùng với giao thức heartbeat để duy trì kết nối qua Docker/proxy và tự động kết nối lại ở phía client."
                        },
                        result: {
                            en: "End-to-end delivery in < 500ms. idx_recipient_read index keeps unread-count queries at < 10ms regardless of volume.",
                            vi: "Giao nhận thông báo dưới 500ms. Chỉ mục idx_recipient_read giúp truy vấn số lượng chưa đọc dưới 10ms bất kể khối lượng dữ liệu."
                        },
                        media: "https://github.com/user-attachments/assets/da784f98-f862-4ee5-89ee-33a970762bec",
                    },
                    {
                        title: { en: "AI Feedback Engine (Groq + Llama 3.3 70B)", vi: "Hệ thống Phản hồi AI (Groq + Llama 3.3 70B)" },
                        problem: {
                            en: "Writing individualized, contextually appropriate feedback in Vietnamese for every student after every class is time-consuming and repetitive.",
                            vi: "Việc viết nhận xét cá nhân hóa, phù hợp ngữ cảnh bằng tiếng Việt cho mỗi học sinh sau mỗi buổi học rất tốn thời gian và lặp đi lặp lại."
                        },
                        solution: {
                            en: "Groq's inference API with prompt engineering that enforces Vietnamese tone, cultural context, and length constraints based on the student's performance data passed in at runtime.",
                            vi: "Sử dụng API của Groq với prompt engineering để đảm bảo văn phong tiếng Việt, ngữ cảnh văn hóa và giới hạn độ dài dựa trên dữ liệu hiệu suất của học sinh được truyền vào lúc runtime."
                        },
                        result: {
                            en: "Context-aware, culturally appropriate Vietnamese feedback in < 300ms — replacing static templates with genuine intelligence.",
                            vi: "Nhận xét tiếng Việt thông minh, phù hợp ngữ cảnh trong chưa đầy 300ms — thay thế các mẫu soạn sẵn bằng trí tuệ nhân tạo thực thụ."
                        },
                        media: "https://github.com/user-attachments/assets/cc767ced-400f-4840-9c84-795e8b0d2582",
                    },
                    {
                        title: { en: "Financial-Grade VietQR Invoicing", vi: "Hóa đơn VietQR Chuẩn Tài chính" },
                        problem: {
                            en: "Manual payment tracking creates reconciliation errors and time spent chasing parents for confirmation.",
                            vi: "Theo dõi thanh toán thủ công gây ra lỗi đối soát và tốn thời gian yêu cầu phụ huynh xác nhận."
                        },
                        solution: {
                            en: "Dynamic VietQR generation embedded directly in PDF invoices, built to the NAPAS-247 standard. CRC-16 checksum validation ensures transaction data integrity end-to-end.",
                            vi: "Tạo mã VietQR động nhúng trực tiếp vào hóa đơn PDF, xây dựng theo tiêu chuẩn NAPAS-247. Kiểm tra mã lỗi CRC-16 đảm bảo tính toàn vẹn của dữ liệu giao dịch."
                        },
                        result: {
                            en: "100% automated reconciliation flow. Error rate reduced from ~15% to near zero.",
                            vi: "Quy trình đối soát tự động 100%. Tỷ lệ sai sót giảm từ ~15% xuống gần bằng 0."
                        },
                        media: "https://github.com/user-attachments/assets/d6724bbe-c88e-420b-8638-807e011052e1",
                    },
                    {
                        title: { en: "Interactive Live Teaching Room (WebRTC + WebSocket)", vi: "Phòng học Trực tuyến Tương tác (WebRTC + WebSocket)" },
                        problem: {
                            en: "Teaching online requires more than video — synchronized whiteboard, session recording, and graceful hardware fallback.",
                            vi: "Dạy học trực tuyến cần nhiều hơn là chỉ video — cần bảng trắng đồng bộ, ghi âm buổi học và xử lý lỗi phần cứng linh hoạt."
                        },
                        solution: {
                            en: "Full-Mesh WebRTC for P2P media (server never touches the video stream). STOMP over WebSocket for state sync. Whiteboard throttled at 50ms cuts congestion 80%. Media Access Guard catches NotReadableError and surfaces human-readable guidance. Composite Stream Recording merges screen, webcam, and audio into a single .webm — entirely in-browser.",
                            vi: "Sử dụng Full-Mesh WebRTC cho truyền tải media P2P (server không can thiệp vào luồng video). STOMP qua WebSocket để đồng bộ trạng thái. Bảng trắng được giới hạn ở mức 50ms giúp giảm 80% tắc nghẽn. Media Access Guard phát hiện lỗi NotReadableError và đưa ra hướng dẫn dễ hiểu. Ghi lại luồng kết hợp (Composite Stream) trộn màn hình, webcam và âm thanh vào một file .webm duy nhất ngay trên trình duyệt."
                        },
                        result: {
                            en: "< 200ms interactive latency. One-click recording. No crash on hardware conflicts.",
                            vi: "Độ trễ tương tác dưới 200ms. Ghi hình một chạm. Không gặp lỗi khi xung đột phần cứng."
                        },
                        media: "https://github.com/user-attachments/assets/b5e35a55-435d-4468-8dea-5fac8ff1f934",
                    },
                    {
                        title: { en: "Drag-and-Drop Calendar with Prefetching", vi: "Lịch Kéo-thả với cơ chế Tải trước (Prefetching)" },
                        problem: {
                            en: "Calendar UIs feel slow when navigating months, and drag interactions drop frames on re-renders.",
                            vi: "Giao diện lịch thường có cảm giác chậm khi chuyển tháng, và các tương tác kéo thả bị giật do render lại nhiều lần."
                        },
                        solution: {
                            en: "@dnd-kit with Optimistic Rollback. React.memo + useCallback eliminate 95% of unnecessary re-renders. Adjacent months prefetched automatically on load.",
                            vi: "Sử dụng @dnd-kit với cơ chế Optimistic Rollback. React.memo và useCallback loại bỏ 95% các lần render lại không cần thiết. Các tháng liền kề được tải trước tự động khi tải trang."
                        },
                        result: {
                            en: "Month navigation instant (~0ms). Drag interactions at 60fps.",
                            vi: "Chuyển tháng tức thì (~0ms). Tương tác kéo thả đạt 60fps mượt mà."
                        },
                        media: "https://github.com/user-attachments/assets/27cea769-dafc-45cf-82f7-4f6b06e2da1c",
                    },
                    {
                        title: { en: "Intelligent Assessment & Auto-Grading", vi: "Đánh giá Thông minh & Tự động Chấm điểm" },
                        problem: {
                            en: "Digitizing exam questions from Word/PDF is tedious. Exam data loss from browser crashes or accidental navigation is unacceptable.",
                            vi: "Số hóa câu hỏi thi từ Word/PDF rất tốn công. Việc mất dữ liệu bài làm do sập trình duyệt hoặc vô tình chuyển trang là điều không thể chấp nhận."
                        },
                        solution: {
                            en: "ExerciseParserService uses a Hybrid Regex Parsing Engine to bulk-ingest MCQ and Essay questions from plain text. Exam Player implements debounced auto-save (~500ms), timer sync, and auto-submit on expiry — fault-tolerant by design.",
                            vi: "ExerciseParserService sử dụng công cụ Hybrid Regex để nhập hàng loạt câu hỏi trắc nghiệm và tự luận từ văn bản thuần túy. Trình làm bài thi thực hiện tự động lưu (auto-save) sau 500ms, đồng bộ bộ đếm thời gian và tự động nộp bài khi hết giờ — thiết kế chống lỗi."
                        },
                        result: {
                            en: "Question digitization time reduced by 90%. Zero data loss architecture.",
                            vi: "Thời gian số hóa câu hỏi giảm 90%. Kiến trúc đảm bảo không bao giờ mất dữ liệu."
                        },
                        media: "https://github.com/user-attachments/assets/13a7e1fb-2126-4722-be4a-5c368b719f1d",
                    },
                ],
            },
            {
                type: "benchmarks",
                title: { en: "Performance Benchmarks", vi: "Chỉ số Hiệu năng" },
                content: { en: "Measured in production against real usage:", vi: "Đo lường trong môi trường vận hành thực tế:" },
                rows: [
                    { module: { en: "Calendar", vi: "Lịch học" }, metric: { en: "Initial load", vi: "Tải trang đầu" }, before: "~1.8s", after: "< 0.8s" },
                    { module: { en: "Calendar", vi: "Lịch học" }, metric: { en: "Month navigation", vi: "Chuyển tháng" }, before: "~500ms", after: "~0ms" },
                    { module: { en: "Finance", vi: "Tài chính" }, metric: { en: "Page load", vi: "Tải trang" }, before: "~2.5s", after: "< 0.8s" },
                    { module: { en: "Finance", vi: "Tài chính" }, metric: { en: "Data consistency", vi: "Tính nhất quán dữ liệu" }, before: "Desync issues", after: "100% accurate" },
                    { module: { en: "Learning", vi: "Học tập" }, metric: { en: "Lesson detail query", vi: "Truy vấn bài học" }, before: "3 queries (N+1)", after: "1 query" },
                    { module: { en: "Notifications", vi: "Thông báo" }, metric: { en: "Delivery latency", vi: "Độ trễ giao nhận" }, before: "—", after: "< 500ms" },
                    { module: { en: "Bulk Calendar", vi: "Lập lịch hàng loạt" }, metric: { en: "300+ session init", vi: "Khởi tạo 300+ buổi học" }, before: "—", after: "< 800ms" },
                ],
            },
            {
                type: "decisions",
                title: { en: "Architecture Decisions", vi: "Quyết định Kiến trúc" },
                content: { en: "Three choices that shaped every other decision in the codebase.", vi: "Ba lựa chọn định hình toàn bộ cấu trúc mã nguồn." },
                decisions: [
                    {
                        title: { en: "Modular Monolith over Microservices", vi: "Modular Monolith thay vì Microservices" },
                        chosen: { en: "Single deployable unit with clear module boundaries", vi: "Một đơn vị triển khai duy nhất với ranh giới mô-đun rõ ràng" },
                        rejected: { en: "Microservices from day 1", vi: "Microservices ngay từ đầu" },
                        reason: {
                            en: "Solo project — microservices would mean 10× the DevOps overhead with no team to justify it. Clear module boundaries make extraction straightforward if scale ever demands it.",
                            vi: "Dự án độc lập — microservices sẽ tăng gánh nặng DevOps gấp 10 lần mà không có đội ngũ để vận hành. Ranh giới mô-đun rõ ràng giúp việc tách service dễ dàng nếu sau này cần mở rộng."
                        },
                    },
                    {
                        title: { en: "SSE over WebSocket for notifications", vi: "SSE thay vì WebSocket cho thông báo" },
                        chosen: { en: "Server-Sent Events (SSE)", vi: "Server-Sent Events (SSE)" },
                        rejected: { en: "WebSocket for all real-time", vi: "WebSocket cho mọi tính năng thời gian thực" },
                        reason: {
                            en: "Notifications flow in one direction. SSE is HTTP-native, proxy-transparent, and requires no handshake upgrade. WebSocket is reserved for the live room where true bidirectionality is actually needed.",
                            vi: "Thông báo chỉ luân chuyển một chiều từ server. SSE chạy trên nền HTTP, đi xuyên qua proxy và không cần nâng cấp kết nối (handshake). WebSocket chỉ dành cho phòng học trực tuyến nơi cần tương tác hai chiều thực thụ."
                        },
                    },
                    {
                        title: { en: "React Query over Redux", vi: "React Query thay vì Redux" },
                        chosen: { en: "TanStack Query v5", vi: "TanStack Query v5" },
                        rejected: { en: "Redux Toolkit", vi: "Redux Toolkit" },
                        reason: {
                            en: "All async state is server state. React Query's stale-while-revalidate, optimistic updates, and cache invalidation handle this natively. Redux would be ceremonial overhead with no real benefit.",
                            vi: "Mọi trạng thái không đồng bộ đều là dữ liệu từ server. React Query xử lý tốt các cơ chế caching, cập nhật tức thì (optimistic updates) một cách tự nhiên. Dùng Redux sẽ rườm rà mà không mang lại lợi ích thực tế cho dự án này."
                        },
                    },
                ],
            },
            {
                type: "security",
                title: { en: "Security", vi: "Bảo mật" },
                content: { en: "Defense-in-depth across every layer:", vi: "Bảo vệ đa lớp trên mọi tầng dữ liệu:" },
                rows: [
                    { layer: { en: "Authentication", vi: "Xác thực" }, impl: { en: "JWT + Refresh Token via HttpOnly cookies", vi: "JWT + Refresh Token qua HttpOnly cookies" } },
                    { layer: { en: "Authorization", vi: "Phân quyền" }, impl: { en: "Dynamic RBAC — RoleEntity + Permission enum, @PreAuthorize per endpoint", vi: "RBAC động — RoleEntity + Permission enum, @PreAuthorize cho từng endpoint" } },
                    { layer: { en: "Rate Limiting", vi: "Giới hạn Tốc độ" }, impl: { en: "Bucket4j on login and session creation endpoints", vi: "Sử dụng Bucket4j cho các endpoint đăng nhập và tạo buổi học" } },
                    { layer: { en: "Input Validation", vi: "Kiểm tra Đầu vào" }, impl: { en: "Zod (frontend) + Jakarta Validation (backend)", vi: "Zod (frontend) + Jakarta Validation (backend)" } },
                ],
            },
            {
                type: "roadmap",
                title: { en: "Roadmap", vi: "Lộ trình Phát triển" },
                content: { en: "", vi: "" },
                quarters: [
                    {
                        quarter: { en: "Q2 2026", vi: "Quý 2/2026" },
                        items: [
                            { en: "Multi-tenancy — expand to support multiple tutors (SaaS model)", vi: "Hỗ trợ đa người dùng (Multi-tenancy) — mở rộng cho nhiều gia sư cùng lúc (mô hình SaaS)" },
                            { en: "Bank API integration — auto-confirm payments when funds arrive", vi: "Tích hợp Bank API — tự động xác nhận thanh toán khi nhận được tiền" },
                        ],
                    },
                    {
                        quarter: { en: "Q3 2026", vi: "Quý 3/2026" },
                        items: [
                            { en: "Zalo/Telegram bot for automated debt reminders", vi: "Bot Zalo/Telegram tự động nhắc nợ học phí" },
                            { en: "Learning analytics dashboard with progress trend prediction", vi: "Bảng phân tích học tập dự báo xu hướng tiến bộ của học sinh" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "flood-rescue",
        title: "Flood Rescue Coordination",
        tagline: {
            en: "Designed the architecture. Set up the infrastructure. Led the team.",
            vi: "Thiết kế kiến trúc. Thiết lập hạ tầng. Dẫn dắt đội ngũ."
        },
        role: { en: "Tech Lead · 6-person Team", vi: "Tech Lead · Đội ngũ 6 người" },
        period: { en: "2025 – Present", vi: "2025 – Hiện tại" },
        status: { en: "Active · Sprint 1", vi: "Đang hoạt động · Sprint 1" },
        statusColor: "#ffaa00",
        accentColor: "#00e5a0",
        stack: [
            "Spring Boot (Java 17)", "Next.js", "PostgreSQL (per service)",
            "RabbitMQ", "Apache Kafka", "Nginx",
            "Docker Compose", "GitHub Actions", "VPS (Ubuntu)", "SSE", "REST",
        ],
        githubUrl: "https://github.com/longtq2501/Flood-Rescue-Coordination-and-Relief-Management-System",
        overview: {
            en: "A 6-person team project to build a real-time coordination platform for flood rescue operations in Vietnam. As Tech Lead, my responsibility was architecture design, technology selection, full infrastructure setup, CI/CD pipeline, module skeleton (frontend + backend), and sprint management via Jira. The team builds features on top of the foundation I set up.",
            vi: "Dự án nhóm 6 người nhằm xây dựng nền tảng điều phối thời gian thực cho các hoạt động cứu hộ lũ lụt tại Việt Nam. Với vai trò Tech Lead, trách nhiệm của tôi là thiết kế kiến trúc, lựa chọn công nghệ, thiết lập toàn bộ hạ tầng, quy trình CI/CD, khung dự án (frontend + backend) và quản lý sprint qua Jira. Nhóm sẽ xây dựng các tính năng dựa trên nền tảng mà tôi đã thiết lập."
        },
        sections: [
            {
                type: "problem",
                title: { en: "The Problem", vi: "Vấn đề" },
                content: {
                    en: "Flood rescue operations in Vietnam suffer from coordination failures: rescue requests get lost, teams can't be tracked in real-time, relief supplies are distributed without visibility, and there's no unified operations view for coordinators.",
                    vi: "Các hoạt động cứu hộ lũ lụt ở Việt Nam thường gặp khó khăn trong việc điều phối: yêu cầu cứu hộ bị thất lạc, không thể theo dõi các đội cứu hộ trong thời gian thực, hàng cứu trợ được phân phối thiếu minh bạch và không có cái nhìn tổng thể cho các nhà điều phối."
                },
                features: [
                    {
                        title: { en: "No request visibility", vi: "Thiếu minh bạch trong yêu cầu" },
                        problem: {
                            en: "Citizens have no way to submit structured rescue requests or track status. Coordinators receive requests through informal channels (phone, Zalo) with no geographic data.",
                            vi: "Người dân không có cách nào gửi yêu cầu cứu hộ có cấu trúc hoặc theo dõi trạng thái. Điều phối viên nhận yêu cầu qua các kênh không chính thống (điện thoại, Zalo) và thiếu dữ liệu vị trí."
                        },
                        solution: { en: "", vi: "" },
                        result: { en: "", vi: "" },
                    },
                    {
                        title: { en: "No live team tracking", vi: "Không theo dõi được vị trí đội cứu hộ" },
                        problem: {
                            en: "Coordinators can't see where rescue teams are in real-time. Assignment is done by phone call without proximity awareness.",
                            vi: "Điều phối viên không thể thấy vị trí các đội cứu hộ trong thời gian thực. Việc phân công thực hiện qua điện thoại mà không biết rõ khoảng cách thực tế."
                        },
                        solution: { en: "", vi: "" },
                        result: { en: "", vi: "" },
                    },
                    { 
                        title: { en: "Supply blindness", vi: "Thiếu thông tin nhu yếu phẩm" }, 
                        solution: { en: "", vi: "" }, 
                        result: { en: "", vi: "" }, 
                        problem: { en: "Relief supply managers have no visibility into inventory levels, distribution, or when to restock.", vi: "Quản lý hàng cứu trợ không biết rõ lượng tồn kho, tình hình phân phối hoặc khi nào cần nhập thêm hàng." } 
                    },
                ],
            },
            {
                type: "decisions",
                title: { en: "Key Architectural Decisions", vi: "Quyết định Kiến trúc Then chốt" },
                content: { en: "Three decisions that defined the entire system design:", vi: "Ba quyết định định hình toàn bộ thiết kế hệ thống:" },
                decisions: [
                    {
                        title: { en: "Modular Monolith first, Microservices after", vi: "Modular Monolith trước, Microservices sau" },
                        chosen: { en: "Modular Monolith in Sprint 1", vi: "Modular Monolith trong Sprint 1" },
                        rejected: { en: "Full microservices from day 1", vi: "Microservices hoàn chỉnh ngay từ đầu" },
                        reason: {
                            en: "A 6-person team starting with 6 independent microservices means 6× the DevOps complexity before any business logic is validated. We validate domain boundaries in Sprint 1 as a modular monolith, then extract services once the seams are clear.",
                            vi: "Một đội ngũ 6 người bắt đầu với 6 microservices độc lập sẽ gặp khó khăn về DevOps gấp 6 lần trước khi logic nghiệp vụ được xác thực. Chúng tôi xác định ranh giới miền (domain boundaries) trong Sprint 1 dưới dạng modular monolith, sau đó sẽ tách service khi cấu trúc đã ổn định."
                        },
                    },
                    {
                        title: { en: "RabbitMQ + Kafka — not one or the other", vi: "RabbitMQ + Kafka — sự kết hợp hoàn hảo" },
                        chosen: { en: "RabbitMQ for task events, Kafka for streaming/audit", vi: "RabbitMQ cho các sự kiện công việc, Kafka cho streaming/audit" },
                        rejected: { en: "Kafka only or RabbitMQ only", vi: "Chỉ chọn Kafka hoặc chỉ chọn RabbitMQ" },
                        reason: {
                            en: "RabbitMQ gives exactly-once delivery for rescue task assignments — we need guaranteed delivery. Kafka gives a replayable audit log of all GPS positions and status changes — critical for post-incident analysis. They solve different problems.",
                            vi: "RabbitMQ đảm bảo việc giao nhận chính xác một lần cho các nhiệm vụ cứu hộ. Kafka cung cấp nhật ký có thể phát lại của tất cả vị trí GPS và thay đổi trạng thái — quan trọng cho việc phân tích sau sự cố. Chúng giải quyết các vấn đề khác nhau."
                        },
                    },
                    {
                        title: { en: "Database per Service from day 1", vi: "Cơ sở dữ liệu riêng cho mỗi Service ngay từ đầu" },
                        chosen: { en: "PostgreSQL per microservice", vi: "PostgreSQL cho mỗi microservice" },
                        rejected: { en: "Shared database, split later", vi: "Dùng chung cơ sở dữ liệu rồi tách sau" },
                        reason: {
                            en: "Sharing a database across services creates invisible coupling that's painful to remove later. Dedicated PostgreSQL per service enforces the contract at the infrastructure level from the start.",
                            vi: "Sử dụng chung cơ sở dữ liệu tạo ra sự ràng buộc ngầm rất khó tách sau này. Việc dành riêng PostgreSQL cho mỗi service giúp thực thi các hợp đồng dữ liệu ở cấp độ hạ tầng ngay từ đầu."
                        },
                    },
                ],
            },
            {
                type: "solution",
                title: { en: "System Design — 6 Microservices", vi: "Thiết kế Hệ thống — 6 Microservices" },
                content: {
                    en: "Each service owns its domain, its database, and its API. Communication via RabbitMQ (task events) and Kafka (audit streams). Nginx as reverse proxy. GitHub Actions → Docker Hub → SSH VPS on push to main.",
                    vi: "Mỗi service sở hữu miền dữ liệu, cơ sở dữ liệu và API riêng. Giao tiếp qua RabbitMQ (sự kiện công việc) và Kafka (luồng audit). Nginx đóng vai trò reverse proxy. GitHub Actions → Docker Hub → SSH VPS tự động khi push vào nhánh main."
                },
                features: [
                    {
                        title: { en: "user-service :8081", vi: "user-service :8081" },
                        solution: { en: "Auth, JWT, role management.", vi: "Xác thực, JWT, quản lý vai trò." },
                        result: { en: "5 actor roles: Citizen, Rescue Team, Coordinator, Manager, Admin.", vi: "5 loại người dùng: Người dân, Đội cứu hộ, Điều phối viên, Quản lý, Admin." },
                        problem: { en: "", vi: "" },
                    },
                    {
                        title: { en: "rescue-request-service :8082", vi: "rescue-request-service :8082" },
                        solution: { en: "GPS-tagged request submission, status FSM.", vi: "Gửi yêu cầu kèm vị trí GPS, máy trạng thái (FSM)." },
                        result: { en: "PENDING → VERIFIED → DISPATCHED → COMPLETED with citizen SSE notifications.", vi: "PENDING → VERIFIED → DISPATCHED → COMPLETED kèm thông báo SSE cho người dân." },
                        problem: { en: "", vi: "" },
                    },
                    {
                        title: { en: "dispatch-service :8083", vi: "dispatch-service :8083" },
                        solution: { en: "Map-based team assignment, proximity calculation.", vi: "Phân công đội cứu hộ dựa trên bản đồ, tính toán khoảng cách." },
                        result: { en: "10s GPS auto-reporting, live coordinator tracking view.", vi: "Tự động báo cáo GPS mỗi 10 giây, chế độ xem theo dõi cho điều phối viên." },
                        problem: { en: "", vi: "" },
                    },
                    { 
                        title: { en: "resource-service :8084", vi: "resource-service :8084" }, 
                        solution: { en: "Relief supply warehouse, allocation tracking.", vi: "Quản lý kho hàng cứu trợ, theo dõi phân bổ." }, 
                        result: { en: "Low-stock alerts, distribution records.", vi: "Cảnh báo hết hàng, nhật ký phân phối." } 
                    },
                    { 
                        title: { en: "notification-service :8085", vi: "notification-service :8085" }, 
                        solution: { en: "SSE emitter pool consuming RabbitMQ events.", vi: "Pool SSE emitter tiêu thụ sự kiện từ RabbitMQ." }, 
                        result: { en: "Real-time status updates to all actor types.", vi: "Cập nhật trạng thái thời gian thực cho mọi vai trò." } 
                    },
                    { 
                        title: { en: "reporting-service :8086", vi: "reporting-service :8086" }, 
                        solution: { en: "KPI aggregation, team performance reports.", vi: "Tổng hợp KPI, báo cáo hiệu suất đội ngũ." }, 
                        result: { en: "Operational analytics for Manager/Admin roles.", vi: "Phân tích vận hành cho vai trò Quản lý/Admin." } 
                    },
                ],
            },
            {
                type: "code",
                title: { en: "CI/CD Pipeline", vi: "Quy trình CI/CD" },
                content: { en: "Every push to main triggers build → Docker image push → SSH deploy to VPS. Zero manual steps.", vi: "Mọi lần đẩy code lên main đều kích hoạt build → đẩy Docker image → triển khai lên VPS qua SSH. Hoàn toàn tự động." },
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
                title: { en: "My Contribution as Tech Lead", vi: "Đóng góp của tôi với vai trò Tech Lead" },
                content: { en: "What I personally designed and built before the team started feature development:", vi: "Những gì tôi đã trực tiếp thiết kế và xây dựng trước khi nhóm bắt đầu phát triển tính năng:" },
                metrics: [
                    { value: "FE+BE", label: { en: "Module skeleton for entire team", vi: "Khung dự án FE+BE cho cả nhóm" } },
                    { value: "Jira", label: { en: "Sprint planning + task delegation", vi: "Lập kế hoạch sprint + phân chia nhiệm vụ" } },
                    { value: "Sprint 1", label: { en: "Active development now", vi: "Đang phát triển" } },
                ],
            },
        ],
    },
];