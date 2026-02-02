import { notFound } from "next/navigation";
import { industries } from "@/lib/data/industries";
import { DetailHero } from "./_components/detail-hero";
import { DetailOverview } from "./_components/detail-overview";
import { DetailStats } from "./_components/detail-stats";
import { DetailChallenges } from "./_components/detail-challenges";
import { DetailProcess } from "./_components/detail-process";
import { DetailTestimonial } from "./_components/detail-testimonial";
import { DetailCTA } from "./_components/detail-cta";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return industries.map((industry) => ({
        slug: industry.slug,
    }));
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const industry = industries.find((i) => i.slug === slug);

    if (!industry) {
        return {
            title: "Industry Not Found",
        };
    }

    return {
        title: `${industry.title} | Amaanc`,
        description: industry.description,
    };
}

export default async function IndustryPage({ params }: PageProps) {
    const { slug } = await params;
    const industry = industries.find((i) => i.slug === slug);

    if (!industry) {
        notFound();
    }

    return (
        <>
            <DetailHero industry={industry} />
            <DetailOverview industry={industry} />
            <DetailStats industry={industry} />
            <DetailChallenges industry={industry} />
            <DetailProcess />
            <DetailTestimonial industry={industry} />
            <DetailCTA industry={industry} />
        </>
    );
}
