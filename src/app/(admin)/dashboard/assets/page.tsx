"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Asset } from "@/lib/data/assets";
import Image from "next/image";
import { AssetUploader } from "./_components/asset-uploader";

export default function AssetsPage() {
  const [uploadedAssets, setUploadedAssets] = useState<Asset[]>([]);

  const handleAssetUpload = (asset: Asset) => {
    setUploadedAssets((prev) => [asset, ...prev]);
  };

  return (
    <div className="flex flex-col gap-8 p-6 max-w-7xl mx-auto w-full">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Assets</h1>
        <p className="text-muted-foreground">
          Manage your images and media files
        </p>
      </div>

      <Tabs defaultValue="library">
        <TabsList className="grid w-full grid-cols-2 md:w-[400px]">
          <TabsTrigger value="library">Asset Library</TabsTrigger>
          <TabsTrigger value="upload">Upload New</TabsTrigger>
        </TabsList>

        <TabsContent value="library" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Asset Library</CardTitle>
              <CardDescription>
                Browse and manage all your uploaded assets
              </CardDescription>
            </CardHeader>
            <CardContent>
              {uploadedAssets.length === 0 ? (
                <div className="h-64 flex items-center justify-center border rounded-md">
                  <div className="text-center">
                    <p className="text-muted-foreground mb-2">
                      No assets found
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Upload assets using the &quot;Upload New&quot; tab or they
                      will appear here after being uploaded.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {uploadedAssets.map((asset) => (
                    <div
                      key={asset.fileId}
                      className="border rounded-md overflow-hidden group relative"
                    >
                      <div className="aspect-square overflow-hidden bg-gray-100 dark:bg-gray-800">
                        <Image
                          src={
                            asset.url || "/placeholder.svg?height=200&width=200"
                          }
                          alt={asset.alt || asset.title || "Asset preview"}
                          width={200}
                          height={200}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-2">
                        <p className="text-sm font-medium truncate">
                          {asset.title || asset.fileName}
                        </p>
                        <p className="text-xs text-muted-foreground truncate">
                          {asset.folder || "Root folder"}
                        </p>
                      </div>
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                        <Button size="sm" variant="secondary">
                          View
                        </Button>
                        <Button size="sm" variant="destructive">
                          Delete
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="upload" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Upload New Assets</CardTitle>
              <CardDescription>
                Upload images to use in your services and courses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <AssetUploader
                onAssetSelect={handleAssetUpload}
                folder="assets"
              />
            </CardContent>
          </Card>

          {uploadedAssets.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Recently Uploaded</CardTitle>
                <CardDescription>
                  Assets you&apos;ve uploaded in this session
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {uploadedAssets.map((asset) => (
                    <div
                      key={asset.fileId}
                      className="border rounded-md overflow-hidden"
                    >
                      <div className="aspect-square overflow-hidden bg-gray-100 dark:bg-gray-800">
                        <Image
                          src={
                            asset.url || "/placeholder.svg?height=200&width=200"
                          }
                          alt={asset.alt || asset.title || "Asset preview"}
                          width={200}
                          height={200}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-2">
                        <p className="text-sm font-medium truncate">
                          {asset.title || asset.fileName}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {new Date(asset.createdAt).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
