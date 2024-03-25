import { searchPacakages } from "../../api/queries/searchpackages";
import type { PackageSummary } from "../../api/types/packageSummary";

export interface SearchLoaderResult {
    searchResult: PackageSummary[]
}

export async function searchLoader({ request }: {request: Request}): Promise<SearchLoaderResult> {
    const { searchParams } = new URL(request.url);
    const term = searchParams.get('term');
    
    if (!term) {
      throw new Error('Serch term must be provided');
    }

    const results = await searchPacakages(term);

    return{
        searchResult: results
    };
}