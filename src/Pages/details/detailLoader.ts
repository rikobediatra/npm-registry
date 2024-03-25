import type { Params } from "react-router-dom";
import { getPackage } from "../../api/queries/getPackages";
import { PackageDetail } from "../../api/types/packageDetail";

interface loaderArgs {
    params: Params;
}

export interface DetailLoaderResult {
    details: PackageDetail
}

export async function detailLoader({ params }: loaderArgs): Promise<DetailLoaderResult>{
    const { name } = params;

    if(!name) {
        throw new Error('Name must be provided');
    }

    const details = await getPackage(name);

    return {
        details 
    }
}