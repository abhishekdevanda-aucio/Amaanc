import { getIndustryBySlug } from "@/lib/data/industries";
import { notFound } from "next/navigation";
import { IndustryForm } from "../_components/industry-form";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const industry = await getIndustryBySlug(slug);
    if (!industry) {
        return {
            title: "Industry Not Found",
        };
    }
    return {
        title: `${industry.name} | Amaanc`,
        description: industry.description,
    };
}

export default async function EditIndustryPage({ params }: PageProps) {
    const { slug } = await params;
    const industry = await getIndustryBySlug(slug);

    if (!industry) {
        notFound();
    }
    return (
        <div className="flex flex-col gap-8 p-6 max-w-7xl mx-auto w-full">
            <IndustryForm initialData={industry} />
        </div>);
}