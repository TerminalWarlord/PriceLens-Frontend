import { ArrowLeftRight, Loader2 } from "lucide-react"
import { Button } from "../ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import type { Product } from "../../../types/product"
import { Separator } from "../ui/separator"
import { IconSearch } from "@tabler/icons-react"
import useSWR from "swr"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import CompareSearchResultCard from "./CompareSearchResultCard"
import CompareItem from "./CompareItem"



const BACKEND_URL = 'https://api-pricelens.joybiswas.com'

const fetcher = async (path: string) => {
    const res = await fetch(BACKEND_URL + path);
    if (!res.ok) {
        throw new Error("Failed to fetch results");
    }
    return (await res.json()).products as Product[];
}
const CompareDialog = ({ product }: { product: Product }) => {
    const [query, setQuery] = useState<string | null>(null);
    const [debouncedQuery, setDebouncedQuery] = useState<string | null>(null);
    const { data, isLoading, error } = useSWR(`/search?query=${debouncedQuery}&sort_by=relevance&limit=5`, debouncedQuery ? fetcher : null);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    useEffect(() => {
        const timer = setTimeout(() => setDebouncedQuery(query), 300);
        return () => clearTimeout(timer);
    }, [query]);

    useEffect(() => {
        if (error) {
            if (error instanceof Error) {
                toast.error(error.message);
            }
            else {
                toast.error("Failed to fetch data!");
            }
        }
    }, []);

    const handleProductSelection = (p: Product) => {
        setSelectedProduct(p);
    }



    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button variant="outline" className="w-full cursor-pointer">
                        <ArrowLeftRight />
                        <span className="text-xs md:text-sm">Compare</span>
                    </Button>
                </DialogTrigger>
                <DialogContent className="min-w-fit max-h-[calc(100vh-3rem)] flex flex-col z-1000">
                    <DialogHeader>
                        <DialogTitle>Compare Products</DialogTitle>
                    </DialogHeader>
                    <div className="grid grid-cols-1 md:grid-cols-[2fr_0.001fr_2fr] w-full flex-1 min-h-0">
                        <CompareItem product={product} />
                        <Separator orientation="vertical" className="w-fit" />
                        {selectedProduct ? <div className="flex flex-col h-full min-h-0 pt-5 md:py-0 border-t md:border-t-0">
                            <div className="flex justify-end mt-4 mb-6">
                                <Button
                                    variant={"outline"}
                                    className="cursor-pointer"
                                    onClick={() => setSelectedProduct(null)}
                                >
                                    <span>Change Product</span>
                                    <IconSearch />
                                </Button>
                            </div>
                            <CompareItem product={selectedProduct} />
                        </div> : <div className="px-4 relative pt-5 md:pt-0 border-t md:border-t-0">
                            <div className="flex items-center space-x-2">
                                <div className="flex space-x-1 outline outline-neutral-200 rounded-md items-center px-2 py-2  w-full">
                                    <IconSearch className="w-4 h-4" />
                                    <input
                                        onChange={(e) => setQuery(e.target.value)}
                                        type="text"
                                        placeholder="Search another product..."
                                        className="focus-visible:ring-0 border-0 focus-visible:outline-none w-full"
                                    />
                                </div>
                                {/* <div className="border p-1 rounded-md h-full">
                                    <IconAdjustmentsHorizontal className=" text-neutral-800" />
                                </div> */}
                            </div>
                            {isLoading && <div className="w-full h-full flex items-center justify-center">
                                <Loader2 className="animate-spin" />
                            </div>}

                            {data && data.length > 0 && (
                                <div className="flex flex-col w-full h-full  py-4 space-y-1">
                                    {data.map((p) => {
                                        if (p.id === product.id) return null;
                                        return <CompareSearchResultCard
                                            product={p}
                                            selectProduct={handleProductSelection}

                                        />
                                    })}
                                </div>
                            )}
                        </div>
                        }
                    </div>
                </DialogContent>
            </form>
        </Dialog>
    )
}

export default CompareDialog