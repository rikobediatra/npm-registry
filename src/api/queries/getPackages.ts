import { PackageDetail } from "../types/packageDetail";

export async function getPackage(name: string): Promise<PackageDetail> {
    const res = await fetch(`https://registry.npmjs.org/${name}`);
    const data = await res.json();

    return data as PackageDetail;
}