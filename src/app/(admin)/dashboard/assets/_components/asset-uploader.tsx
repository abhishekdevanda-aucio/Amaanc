"use client"

import type React from "react"
import { useState, useRef, useCallback } from "react"
import { uploadAsset} from "../_actions/upload-assets"
import { type Asset } from "@/types/assets-types"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { Loader2, Upload, X, ImageIcon, FileIcon, Tag, Type } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface AssetUploaderProps {
  onAssetUpload: (asset: Asset) => void
  folder?: string
  className?: string
}

export function AssetUploader({ onAssetUpload, folder = "uploads", className }: AssetUploaderProps) {
  const [isUploading, setIsUploading] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [alt, setAlt] = useState("")
  const [title, setTitle] = useState("")
  const [tags, setTags] = useState("")
  const [isDragging, setIsDragging] = useState(false)

  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFile = useCallback((selectedFile: File) => {
    // Check if file is an image
    if (!selectedFile.type.startsWith("image/")) {
      toast.error("Please select an Image")
      return
    }

    // Check file size (max 5MB)
    if (selectedFile.size > 5 * 1024 * 1024) {
      toast.error("Image size should be less than 5MB")
      return
    }

    setFile(selectedFile)
    setTitle(selectedFile.name.split(".")[0])

    const reader = new FileReader()
    reader.onload = (event) => {
      setPreview(event.target?.result as string)
    }
    reader.readAsDataURL(selectedFile)
  }, [])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0])
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0])
    }
  }

  const handleUpload = async () => {
    if (!file) {
      toast.error("Please select a file to upload")
      return
    }

    setIsUploading(true)

    try {
      const asset = await uploadAsset({
        file,
        folder,
        tags,
        alt,
        title,
      })

      toast.success("Asset uploaded successfully")
      onAssetUpload(asset)
      resetForm()
    } catch (error) {
      console.error("Error uploading asset:", error)
      toast.error("Failed to upload asset")
    } finally {
      setIsUploading(false)
    }
  }

  const resetForm = () => {
    setFile(null)
    setPreview(null)
    setAlt("")
    setTitle("")
    setTags("")
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <div className={cn("w-full h-full", className)}>
      {!file ? (
        <div
          className={cn(
            "flex flex-col items-center justify-center h-full min-h-[300px] border-2 border-dashed rounded-xl transition-all duration-200 cursor-pointer p-8 text-center",
            isDragging ? "border-primary bg-primary/5 scale-[0.99]" : "border-muted-foreground/25 hover:border-primary/50 hover:bg-muted/30"
          )}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <div className="bg-primary/10 p-4 rounded-full mb-6 ring-4 ring-primary/5 transition-transform duration-300 group-hover:scale-110">
            <Upload className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Upload an image</h3>
          <p className="text-sm text-muted-foreground mb-8 max-w-xs leading-relaxed">
            Drag and drop an image here, or click to browse. Supports JPG, PNG, WebP up to 5MB.
          </p>
          <Button variant="default" size="lg" className="px-8 shadow-sm">
            Select File
          </Button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
          />
        </div>
      ) : (
        <div className="flex flex-col md:flex-row gap-6 h-full">
          {/* Preview Section */}
          <div className="relative w-full md:w-2/5 aspect-square md:aspect-auto rounded-xl border bg-muted/30 overflow-hidden flex items-center justify-center group">
            <Button
              variant="destructive"
              size="icon"
              className="absolute top-2 right-2 z-10 h-8 w-8 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-sm"
              onClick={resetForm}
            >
              <X className="h-4 w-4" />
            </Button>

            {preview ? (
              <div className="relative w-full h-full">
                <Image
                  src={preview}
                  alt="Preview"
                  fill
                  className="object-contain p-4"
                />
              </div>
            ) : (
              <div className="flex flex-col items-center gap-3 text-muted-foreground">
                <FileIcon className="h-12 w-12 opacity-50" />
                <span className="text-sm font-medium">{file.name}</span>
              </div>
            )}
          </div>

          {/* Form Section */}
          <div className="flex-1 flex flex-col gap-5 p-1">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title" className="text-sm font-medium flex items-center gap-2">
                  <Type className="w-4 h-4 text-muted-foreground" />
                  Title
                </Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g., Hero Header Image"
                  className="h-10"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="alt" className="text-sm font-medium flex items-center gap-2">
                  <ImageIcon className="w-4 h-4 text-muted-foreground" />
                  Alt Text
                </Label>
                <Input
                  id="alt"
                  value={alt}
                  onChange={(e) => setAlt(e.target.value)}
                  placeholder="Describe the image for accessibility"
                  className="h-10"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tags" className="text-sm font-medium flex items-center gap-2">
                  <Tag className="w-4 h-4 text-muted-foreground" />
                  Tags
                </Label>
                <Input
                  id="tags"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  placeholder="e.g., service, education, banner"
                  className="h-10"
                />
              </div>
            </div>

            <div className="mt-auto pt-4">
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-4 px-1">
                <span>File size: {(file.size / 1024 / 1024).toFixed(2)} MB</span>
                <span>Type: {file.type.split('/')[1].toUpperCase()}</span>
              </div>
              <Button onClick={handleUpload} disabled={isUploading} className="w-full shadow-sm" size="lg">
                {isUploading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {isUploading ? "Uploading..." : "Upload Asset"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
