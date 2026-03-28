import { useSearchParams } from "react-router-dom"
import SearchFilterBox from "../search/SearchFilterBox"
import SearchBar from "../SearchBar"
import ProductCard from "../search/ProductCard"
import type { Product } from "../../../types/product"
import { useEffect } from "react"
import useSWR from 'swr'
import { toast } from "sonner"
import { Skeleton } from "../ui/skeleton"
import SortResults from "../search/SortResults"
import { PackageOpen } from "lucide-react"
import ManageFilters from "../search/ManageFilters"
import Pagination from "../Pagination"

const BACKEND_URL = 'https://api-pricelens.joybiswas.com'

const fetcher = async (urlPath: string) => {
    try {
        const r = await fetch(BACKEND_URL + urlPath);
        if (!r.ok) {
            throw new Error("Failed to fetch data")
        }
        const resData = await r.json();
        return resData as {
            totalResults: number,
            hasNextPage: boolean,
            products: Product[]
        };
    }
    catch (err) {
        if (err instanceof Error) {
            toast.error(err.message);
        }
        else {
            toast.error("Failed to fetch data");
        }
    }
}
const SearchPage = () => {
    const [searchParams] = useSearchParams();
    const { data, isLoading, error } = useSWR(`/search?${searchParams.toString()}`, fetcher);
    useEffect(() => {
        if (error) {
            toast.error(error.message || "Failed to fetch data");
        }
    }, [error]);
    return (
        <div>
            <SearchBar className="w-full! mt-20" />
            <div className="grid grid-cols-1 md:grid-cols-[1fr_6fr] w-full">
                <div className="hidden md:block">
                    <SearchFilterBox />
                </div>
                <div className="my-6 px-4">
                    <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] lg:md:grid-cols-[4fr_1fr]">
                        <p className="text-sm tracking-tight mb-4 md:mb-0">{data ? "Found " + data.totalResults : 'Showing'} results for <span className="font-bold italic">{searchParams.get('query')}</span></p>
                        <SortResults />

                    </div>
                    <ManageFilters />
                    {isLoading && Array(5).fill(0).map(() => {
                        return <Skeleton className="h-44 w-full rounded-2xl border my-3" />
                    })}
                    {data && data.products.length > 0 && data.products.map((product, idx) => {
                        return <ProductCard
                            product={product as unknown as Product}
                            isFirst={idx === 0}
                            key={product.id}
                        />
                    })}
                    {!isLoading && !data?.products.length && <div className="flex flex-col items-center my-8">
                        <PackageOpen className="w-10 h-10 text-neutral-400" />
                        <p className="text-sm text-neutral-700 dark:text-neutral-200 tracking-wide my-2">No products found</p>
                    </div>}

                    <Pagination hasNextPage={data?.hasNextPage ?? false} />
                </div>
            </div>
        </div>
    )
}

export default SearchPage