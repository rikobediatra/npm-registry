import { useLoaderData } from "react-router-dom";
import type { SearchLoaderResult } from './searchLoader';
import PackageListItem from "../../Components/PackageListItem";

export default function SearchPage() {
    const { searchResult } = useLoaderData() as SearchLoaderResult;

    const renderedResult = searchResult.map((result) => {
        return <PackageListItem _package={result} key={result.name}/>  
    });

    return(
        <div>
            <h1 className="text-xl font-bold my-6">Search Result </h1>
            <div className="space-y-4 mt-4">
                {renderedResult}
            </div>
        </div>
    );
}