import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getNavData } from "@/lib/navigation";
import { getIndustriesForNav, getServicesForNav } from "@/data/navigation";

export default async function MarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // Parallel fetch for better performance
    const [industries, services] = await Promise.all([
        getIndustriesForNav(),
        getServicesForNav()
    ]);

    const navData = getNavData(industries, services);

    return (
        <>
            <Header navData={navData} />
            <main className="relative pt-8 sm:pt-16">{children}</main>
            <Footer industries={industries} services={services} />
        </>
    );
}
