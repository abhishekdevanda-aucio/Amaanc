import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoProps {
    className?: string
    showText?: boolean
    showSubText?: boolean
    subtext?: string
}

export function Logo({ className, showText = true, showSubText = true, subtext }: LogoProps) {
    return (
        <div className={cn("flex items-center", className)}>
            <Image
                src="/logo/amaanc-logo.png"
                alt="Amaanc Logo"
                width={40}
                height={40}
                className="h-8 w-auto object-contain"
                priority
            />
            {showText && (
                <span className="ml-1 text-2xl font-bold text-primary">Amaanc</span>
            )}
            {showSubText && (
                <span className="ml-2 text-xs text-muted-foreground hidden sm:block">{subtext || "Since 2012"}</span>)}
        </div>
    )
}
