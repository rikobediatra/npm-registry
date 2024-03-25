import type { PackageDetail } from "../../api/types/packageDetail";
import { getFeaturedPackages } from "../../api/queries/getFeaturedPackages";

export interface HomeLoaderResult {
    featuredPackages: PackageDetail[];
}

export async function homeLoader(): Promise<HomeLoaderResult> {
    const featuredPackages = await getFeaturedPackages();

    return {
        featuredPackages,
    }
}