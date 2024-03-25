import type { PackageSummary } from "../types/packageSummary";

interface SearchResponse {
    objects: {
        package: {
            name: string,
            description: string,
            version: string,
            keywords: string[]
        }
    }[]
}

export async function  searchPacakages(term: string): Promise<PackageSummary[]> {
    const response = await fetch(
        `https://registry.npmjs.org/-/v1/search?text=${term}`
    );

    const data: SearchResponse = await response.json();

    return data.objects.map((searchResult) => {
        return {
            name: searchResult.package.name,
            description: searchResult.package.description,
            version: searchResult.package.version,
            keyword: searchResult.package.keywords
        }
    });
}