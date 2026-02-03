"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Upload } from "lucide-react"
import { AssetUploader } from "./asset-uploader"
import { useRouter } from "next/navigation"

export function AssetUploadDialog() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const handleAssetUpload = () => {
    router.refresh()
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={(
        <Button variant="outline" size="sm" className="gap-2">
          <Upload className="size-4" />
          New Upload
        </Button>
      )} />
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Upload New Asset</DialogTitle>
          <DialogDescription>Upload a new asset to the library.</DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <AssetUploader onAssetUpload={handleAssetUpload} />
        </div>
      </DialogContent>
    </Dialog>
  )
}
