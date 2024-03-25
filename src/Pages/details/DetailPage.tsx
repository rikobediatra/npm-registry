import { useLoaderData } from "react-router-dom";
import type { DetailLoaderResult } from "./detailLoader";


export default function DetailPage() {
    const { details } = useLoaderData() as DetailLoaderResult;
    console.log(details)
   
    return(
        <div className="space-y-4">
            <h1 className="text-3xl font-bold my-4">
                {details.name}
            </h1>

            <div>
                <h3 className="text-lg font-bold">Description</h3>
                <div className="p-3 bg-gray-200 rounded">{details.description}</div>
            </div>

            <div>
                <h3 className="text-lg font-bold">License</h3>
                <div className="p-3 bg-gray-200 rounded">{details.license}</div>
            </div>

            <div>
                <h3 className="text-lg font-bold">Homepage</h3>
                <div className="p-3 bg-gray-200 rounded">{details.homepage}</div>
            </div>
        </div>
    );
}