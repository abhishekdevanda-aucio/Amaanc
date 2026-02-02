import {
    Empty,
    EmptyContent,
    EmptyDescription,
    EmptyHeader,
    EmptyMedia,
    EmptyTitle,
} from "@/components/ui/empty"
import { LucideIcon } from "lucide-react"

interface EmptyPlaceholderProps {
    title: string
    description?: string
    icon?: LucideIcon
    children?: React.ReactNode
    className?: string
}

export function EmptyPlaceholder({
    title,
    description,
    icon: Icon,
    children,
    className,
}: EmptyPlaceholderProps) {
    return (
        <Empty className={`min-h-[400px] border-dashed ${className}`}>
            <EmptyHeader>
                {Icon && (
                    <EmptyMedia variant="icon" className="size-16 rounded-full bg-muted/50 mb-4">
                        <Icon className="size-8" />
                    </EmptyMedia>
                )}
                <EmptyTitle className="text-xl font-semibold mb-2">{title}</EmptyTitle>
                {description && <EmptyDescription className="text-base text-muted-foreground/80 max-w-sm mx-auto">{description}</EmptyDescription>}
            </EmptyHeader>
            {children && <EmptyContent>{children}</EmptyContent>}
        </Empty>
    )
}
