"use client";

import type React from "react";

import { useState, useRef } from "react";
import { uploadAsset, type Asset } from "@/lib/data/assets";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { Loader2, Upload, X, ImageIcon } from "lucide-react";
import Image from "next/image";

interface AssetUploaderProps {
  onAssetSelect: (asset: Asset) => void;
  folder?: string;
  className?: string;
}

export function AssetUploader({
  onAssetSelect,
  folder = "services",
  className,
}: AssetUploaderProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [alt, setAlt] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];

      // Check if file is an image
      if (!selectedFile.type.startsWith("image/")) {
        toast.error("Please select an image file");
        return;
      }

      setFile(selectedFile);
      setTitle(selectedFile.name.split(".")[0]); // Set default title from filename

      // Create preview
      const reader = new FileReader();
      reader.onload = (event) => {
        setPreview(event.target?.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      toast.error("Please select a file to upload");
      return;
    }

    setIsUploading(true);

    try {
      const asset = await uploadAsset({
        file,
        folder,
        tags,
        alt,
        title,
      });

      toast.success("Asset uploaded successfully");
      onAssetSelect(asset);

      // Reset form
      setFile(null);
      setPreview(null);
      setAlt("");
      setTitle("");
      setTags("");
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      console.error("Error uploading asset:", error);
      toast.error("Failed to upload asset");
    } finally {
      setIsUploading(false);
    }
  };

  const handleCancel = () => {
    setFile(null);
    setPreview(null);
    setAlt("");
    setTitle("");
    setTags("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className={className}>
      {!file ? (
        <div className="flex flex-col items-center justify-center gap-4 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          <ImageIcon className="h-10 w-10 text-gray-400" />
          <div>
            <p className="text-sm text-gray-600 mb-2">
              Drag and drop an image, or click to browse
            </p>
            <p className="text-xs text-gray-500">
              Supported formats: JPG, PNG, GIF, WebP
            </p>
          </div>
          <Button
            variant="outline"
            onClick={() => fileInputRef.current?.click()}
          >
            <Upload className="mr-2 h-4 w-4" />
            Select Image
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
        <Card>
          <CardContent className="p-4 space-y-4">
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 bg-background/80 hover:bg-background/90 z-10"
                onClick={handleCancel}
              >
                <X className="h-4 w-4" />
              </Button>
              {preview && (
                <div className="overflow-hidden rounded-md border">
                  <Image
                    src={preview || "/placeholder.svg"}
                    alt="Preview"
                    width={400}
                    height={200}
                    className="h-auto w-full max-h-[200px] object-contain"
                  />
                </div>
              )}
            </div>

            <div className="space-y-3">
              <div className="space-y-1">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Image title"
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="alt">Alt Text</Label>
                <Input
                  id="alt"
                  value={alt}
                  onChange={(e) => setAlt(e.target.value)}
                  placeholder="Image description for accessibility"
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="tags">Tags (comma-separated)</Label>
                <Input
                  id="tags"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  placeholder="service, education, etc."
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <Button
                  variant="outline"
                  onClick={handleCancel}
                  disabled={isUploading}
                >
                  Cancel
                </Button>
                <Button onClick={handleUpload} disabled={isUploading}>
                  {isUploading && (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Upload
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
