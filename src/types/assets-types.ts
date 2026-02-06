export type Asset = {
    id: string
    fileName: string
    filePath: string
    url: string
    alt: string
    title: string
    contentType: string
    size: number
    tags: string[]
    folder: string
    userId: string
    createdAt: string
    updatedAt: string
}

export type AssetUploadParams = {
    file: File
    folder?: string
    tags?: string
    alt?: string
    title?: string
}
