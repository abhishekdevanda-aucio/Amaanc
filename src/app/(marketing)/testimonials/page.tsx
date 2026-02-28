import { Metadata } from "next";
import { TestimonialsHero } from "./_components/testimonials-hero";
import { TestimonialsGrid } from "./_components/testimonials-grid";

export const metadata: Metadata = {
    title: "Testimonials | Amaanc Limited",
    description:
        "Read reflections from global technology leaders on how Amaanc orchestrates resilient architectures and delivers measurable commercial impact.",
};

export default function TestimonialsPage() {
    return (
        <>
            <TestimonialsHero />
            <TestimonialsGrid />
        </>
    );
}
