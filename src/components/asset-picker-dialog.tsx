"use client"

import { useState, useEffect, useTransition } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Upload, Image as ImageIcon, Check, Search, X } from "lucide-react"
import { AssetUploader } from "@/app/(admin)/dashboard/assets/_components/asset-uploader"
import { getAssets, type Asset } from "@/lib/data/assets"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface AssetPickerDialogProps {
    value: string
    onSelect: (url: string) => void
    folder?: string
    trigger?: React.ReactNode
}

export function AssetPickerDialog({
    value,
    onSelect,
    folder = "industries",
    trigger
}: AssetPickerDialogProps) {
    const [open, setOpen] = useState(false)
    const [activeTab, setActiveTab] = useState<"upload" | "select">("select")
    const [assets, setAssets] = useState<Asset[]>([])
    const [isPending, startTransition] = useTransition()
    const [searchQuery, setSearchQuery] = useState("")

    // Fetch assets when dialog opens
    useEffect(() => {
        if (open) {
            startTransition(async () => {
                const fetchedAssets = await getAssets(100, 0)
                setAssets(fetchedAssets)
            })
        }
    }, [open])

    const filteredAssets = assets.filter(asset =>
        asset.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        asset.fileName.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const handleAssetUpload = (asset: Asset) => {
        onSelect(asset.url)
        setOpen(false)
    }

    const handleAssetSelect = (url: string) => {
        onSelect(url)
        setOpen(false)
    }

    const handleClear = () => {
        onSelect("")
    }

    return (
        <div className="space-y-3">
            {/* Preview of current selection */}
            {value && (
                <div className="relative group w-full h-40 rounded-lg border bg-muted/30 overflow-hidden">
                    <Image
                        src={value}
                        alt="Selected image"
                        fill
                        className="object-contain p-2"
                    />
                    <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        className="absolute top-2 right-2 h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={handleClear}
                    >
                        <X className="h-4 w-4" />
                    </Button>
                </div>
            )}

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger render={
                    trigger ? (
                        trigger as React.ReactElement
                    ) : (
                        <Button variant="outline" type="button" className="w-full gap-2">
                            <ImageIcon className="size-4" />
                            {value ? "Change Image" : "Select Image"}
                        </Button>
                    )
                } />
                <DialogContent className="sm:max-w-[700px] max-h-[85vh] flex flex-col">
                    <DialogHeader>
                        <DialogTitle>Select Image</DialogTitle>
                        <DialogDescription>
                            Upload a new image or select from existing assets.
                        </DialogDescription>
                    </DialogHeader>

                    <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as "upload" | "select")} className="flex-1 flex flex-col min-h-0">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="select" className="gap-2">
                                <ImageIcon className="size-4" />
                                Select Existing
                            </TabsTrigger>
                            <TabsTrigger value="upload" className="gap-2">
                                <Upload className="size-4" />
                                Upload New
                            </TabsTrigger>
                        </TabsList>

                        {/* Select Existing Tab */}
                        <TabsContent value="select" className="flex-1 flex flex-col min-h-0 mt-4">
                            <div className="relative mb-4">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                                <Input
                                    placeholder="Search assets..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pl-9"
                                />
                            </div>

                            <div className="flex-1 overflow-y-auto min-h-[300px] max-h-[400px]">
                                {isPending ? (
                                    <div className="flex items-center justify-center h-full">
                                        <div className="animate-pulse text-muted-foreground">Loading assets...</div>
                                    </div>
                                ) : filteredAssets.length === 0 ? (
                                    <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                                        <ImageIcon className="size-12 mb-3 opacity-50" />
                                        <p className="text-sm">
                                            {searchQuery ? "No assets match your search" : "No assets found"}
                                        </p>
                                        <Button
                                            variant="link"
                                            className="mt-2"
                                            onClick={() => setActiveTab("upload")}
                                        >
                                            Upload a new image
                                        </Button>
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                                        {filteredAssets.map((asset) => (
                                            <button
                                                key={asset.id}
                                                type="button"
                                                onClick={() => handleAssetSelect(asset.url)}
                                                className={cn(
                                                    "relative aspect-square rounded-lg border-2 overflow-hidden transition-all hover:border-primary group",
                                                    value === asset.url
                                                        ? "border-primary ring-2 ring-primary/20"
                                                        : "border-muted hover:border-muted-foreground/50"
                                                )}
                                            >
                                                <Image
                                                    src={asset.url}
                                                    alt={asset.alt || asset.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                                {value === asset.url && (
                                                    <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                                                        <div className="bg-primary text-primary-foreground rounded-full p-1">
                                                            <Check className="size-4" />
                                                        </div>
                                                    </div>
                                                )}
                                                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <p className="text-xs text-white truncate">
                                                        {asset.title || asset.fileName}
                                                    </p>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </TabsContent>

                        {/* Upload New Tab */}
                        <TabsContent value="upload" className="flex-1 mt-4">
                            <AssetUploader
                                onAssetUpload={handleAssetUpload}
                                folder={folder}
                                className="min-h-[350px]"
                            />
                        </TabsContent>
                    </Tabs>
                </DialogContent>
            </Dialog>
        </div>
    )
}
