import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/data/case-studies";
import CaseStudyClient from "./CaseStudyClient";

export function generateStaticParams() {
    return caseStudies.map((cs) => ({ id: cs.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const cs = caseStudies.find((c) => c.id === id);
    if (!cs) return {};
    return {
        title: `${cs.title} — Case Study · Tôn Quỳnh Long`,
        description: cs.tagline.en,
    };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const cs = caseStudies.find((c) => c.id === id);
    if (!cs) notFound();
    return <CaseStudyClient cs={cs} />;
}