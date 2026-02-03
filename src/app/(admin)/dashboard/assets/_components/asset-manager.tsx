"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { deleteAsset, type Asset } from "@/lib/data/assets"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import {
    Trash2,
    Copy,
    Loader2,
    ExternalLink,
    Folder,
    Image as ImageIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { EmptyPlaceholder } from "@/components/empty-placeholder"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

interface AssetManagerProps {
    assets: Asset[]
}

export function AssetManager({ assets: initialAssets }: AssetManagerProps) {
    const router = useRouter()
    // Local state for optimistic updates
    const [optimisticDeletedIds, setOptimisticDeletedIds] = useState<Set<string>>(new Set())
    const [deletingId, setDeletingId] = useState<string | null>(null)

    const displayAssets = initialAssets.filter(a => !optimisticDeletedIds.has(a.id))

    const handleDelete = async (asset: Asset) => {
        setDeletingId(asset.id)
        try {
            await deleteAsset(asset.id, asset.filePath)
            setOptimisticDeletedIds(prev => new Set(prev).add(asset.id))
            toast.success("Asset deleted successfully")
            router.refresh()
        } catch (error) {
            console.error("Failed to delete asset:", error)
            toast.error("Failed to delete asset")
        } finally {
            setDeletingId(null)
        }
    }

    const handleCopyLink = (url: string) => {
        navigator.clipboard.writeText(url)
        toast.success("Link copied to clipboard")
    }

    const formatSize = (bytes: number) => {
        if (bytes === 0) return "0 B"
        const k = 1024
        const sizes = ["B", "KB", "MB", "GB", "TB"]
        const i = Math.floor(Math.log(bytes) / Math.log(k))
        return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i]
    }

    if (displayAssets.length === 0) {
        return (
            <EmptyPlaceholder
                title="No assets found"
                description="Upload assets to get started."
                icon={ImageIcon}
            />
        )
    }

    return (
        <div className="space-y-6">
            <div className="rounded-md border bg-card">
                {displayAssets.map((asset, index) => (
                    <div
                        key={asset.id}
                        className={cn(
                            "flex items-center gap-4 p-3 hover:bg-muted/50 transition-colors group",
                            index !== displayAssets.length - 1 && "border-b"
                        )}
                    >
                        <div className="relative h-20 w-30 rounded-md overflow-hidden shrink-0 bg-muted/30 border">
                            <Image
                                src={asset.url || "/placeholder.svg"}
                                alt={asset.alt}
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="flex-1 min-w-0 grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                            <div className="md:col-span-2">
                                <p className="font-medium truncate" title={asset.title}>{asset.title || asset.fileName}</p>
                            </div>
                            <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
                                <Folder className="size-4" />
                                <span className="font-medium text-foreground">{asset.folder}</span>
                            </div>
                            <div className="hidden md:block text-sm text-muted-foreground">
                                {formatSize(asset.size)} • {asset.contentType?.split("/")[1]?.toUpperCase()}
                            </div>
                        </div>

                        <div className="flex items-center gap-1">
                            <Button variant="ghost" size="icon" onClick={() => window.open(asset.url, "_blank")} title="Open in new tab">
                                <ExternalLink className="size-4" />
                            </Button>
                            <Button variant="ghost" size="icon" onClick={() => handleCopyLink(asset.url)} title="Copy Link">
                                <Copy className="size-4" />
                            </Button>

                            <AlertDialog>
                                <AlertDialogTrigger render={<Button variant="ghost" size="icon" className="text-destructive hover:text-destructive hover:bg-destructive/10" disabled={deletingId === asset.id}>
                                    {deletingId === asset.id ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trash2 className="h-4 w-4" />}
                                </Button>} />
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Delete Asset</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            Are you sure you want to delete <strong>{asset.title || asset.fileName}</strong>? This action cannot be undone.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                        <AlertDialogAction onClick={() => handleDelete(asset)} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                                            Delete
                                        </AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
