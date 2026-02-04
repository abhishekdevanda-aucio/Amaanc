import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getIndustriesForNav } from "@/lib/data/get-industries-nav";

export default async function MarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const industries = await getIndustriesForNav();

    return (
        <>
            <Header industries={industries} />
            <main className="flex-1 relative">{children}</main>
            <Footer industries={industries} />
        </>
    );
}
