import { AssetManager } from "./_components/asset-manager";
import { AssetUploadDialog } from "./_components/asset-dialog";
import { getAssets } from "./_actions/get-assets";

export default async function AssetsPage() {
  const assets = await getAssets();

  return (
    <div className="flex flex-col gap-8 p-6 max-w-7xl mx-auto w-full">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Assets</h1>
          <p className="text-muted-foreground mt-2">Manage your images and media files.</p>
        </div>
        <AssetUploadDialog />
      </div>
      <AssetManager assets={assets} />
    </div>
  );
}
