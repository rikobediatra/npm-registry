import { Link, useLoaderData } from "react-router-dom";
import type { HomeLoaderResult } from "./homeLoader";

export default function HomePage() {
    const { featuredPackages } = useLoaderData() as HomeLoaderResult;

    const renderedPacakages = featuredPackages.map((_packages) => {
        return (
            <div key={_packages.name} className="flex flex-col justify-between gap-3 rounded shadow p-4" >
                <div className="flex flex-col gap-1 border-bottom border-gray-400">
                    <div className="font-bold text-center">{_packages.name}</div>
                    <div className="text-sm text-gray-500">{_packages.description}</div>
                    <div className="text-sm text-gray-500">{_packages.maintainers.length} Maintainers</div>
                </div>
                <Link to={`/packages/${_packages.name}`} className="border rounded border-gray-500 text-center">
                    View
                </Link>
            </div>
        );
    });

    return (
        <div className="container py-12 space-y-8">
            <div className="space-y-6 text-center">
                <h1 className="text-6xl font-bold">
                    The NPM Registry
                </h1>
                <p className="mx-auto max-w-[600px] text-gray-500">
                    The package manager for Javascript. Search and view Packages
                </p>
            </div>
            <div className="mx-auto grid grid-cols-4 max-w-[900px] items-stretch gap-4">
                {renderedPacakages}
            </div>
        </div>
    );
}