import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="flex min-h-[80vh] flex-col items-center justify-center p-4 text-center animate-in fade-in zoom-in duration-500">
            <h1 className="text-9xl font-extrabold tracking-tighter text-primary/10 select-none">
                404
            </h1>
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-2">
                Page not found
            </h1>
            <p className="text-muted-foreground mb-8 max-w-[500px] text-lg">
                Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been
                removed, renamed, or doesn&apos;t exist.
            </p>
            <div className="flex gap-2">
                <Link href="/" className="inline-flex">
                    <Button size="lg">
                        <MoveLeft className="mr-2 h-4 w-4" />
                        Back to Home
                    </Button>
                </Link>
            </div>
        </div>
    );
}
