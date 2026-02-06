import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";

export default function ServicesNotFound() {
    return (
        <section className="min-h-[70vh] flex items-center justify-center">
            <div className="container px-4 text-center">
                <div className="max-w-md mx-auto">
                    <div className="text-8xl font-bold text-primary/20 mb-4">404</div>
                    <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
                    <p className="text-muted-foreground mb-8">
                        The service you&apos;re looking for doesn&apos;t exist or may have been moved.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/services">
                            <Button variant="default" className="inline-flex items-center gap-2">
                                <ArrowLeft className="h-4 w-4" />
                                Back to Services
                            </Button>
                        </Link>
                        <Link href="/">
                            <Button variant="outline" className="inline-flex items-center gap-2">
                                <Home className="h-4 w-4" />
                                Go Home
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
