import { Toaster } from "@/components/ui/sonner"

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="min-h-screen bg-background">
            {children}
            <Toaster />
        </main>
    );
}
