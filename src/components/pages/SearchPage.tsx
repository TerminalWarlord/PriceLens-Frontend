import { useSearchParams } from "react-router-dom"
import SearchFilterBox from "../search/SearchFilterBox"
import SearchBar from "../SearchBar"
import ProductCard from "../search/ProductCard"
import type { Product } from "../../../types/product"
import { IconAdjustmentsHorizontal, IconSortAscending2, IconSortDescending2 } from "@tabler/icons-react"
import { useState } from "react"
import { Button } from "../ui/button"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"

const DUMMY_DATA = [] as Product[];
const SearchPage = () => {
    const [searchParams] = useSearchParams();
    const [sortOrder, setSortOrder] = useState<string>("ASC");
    const toggleSortOrder = () => {
        setSortOrder(prev => prev === "ASC" ? "DESC" : "ASC");
    }
    return (
        <div>
            <SearchBar className="w-full mt-20" />
            <div className="grid grid-cols-1 md:grid-cols-[1fr_6fr] w-full">
                <div className="hidden md:block">
                    <SearchFilterBox />
                </div>
                <div className="my-6 px-4">
                    <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] lg:md:grid-cols-[4fr_1fr]">
                        <p className="text-sm tracking-tight mb-4 md:mb-0">Showing results for <span className="font-bold italic">{searchParams.get('query')}</span></p>
                        <div className="flex items-center space-x-2 justify-between">
                            <div className="flex md:hidden">
                                <Sheet>
                                    <SheetTrigger>
                                        <Button
                                            variant={'outline'}
                                            className="bg-neutral-50 dark:bg-neutral-50/5 text-xs"
                                        >
                                            <IconAdjustmentsHorizontal />
                                            <span>Filters</span>
                                        </Button>

                                    </SheetTrigger>
                                    <SheetContent side="left">
                                        <SearchFilterBox />
                                    </SheetContent>
                                </Sheet>
                            </div>
                            <select
                                name="sort_by"
                                className="bg-neutral-50 dark:bg-neutral-50/5 
                                focus-within:ring-1
                                focus-within:ring-primary
                                focus-within:outline
                                focus-within:outline-primary
                                border
                                px-2 py-1.5 rounded-md text-xs w-full"
                            >
                                <option value="PRICE">Price</option>
                                <option value="CREATED_AT">Date Added</option>
                                <option value="UPDATED_AT">Date Updated</option>
                            </select>
                            <div className="flex space-x-1">
                                <IconSortAscending2
                                    onClick={toggleSortOrder}
                                    className={`w-7 h-7 p-1 cursor-pointer ${sortOrder === 'ASC' ? 'border border-primary rounded p-1' : ''}`} />
                                <IconSortDescending2
                                    onClick={toggleSortOrder}
                                    className={`w-7 h-7 p-1 cursor-pointer ${sortOrder === 'DESC' ? 'border border-primary rounded' : ''}`} />
                            </div>
                        </div>
                    </div>

                    {DUMMY_DATA.map((product, idx) => {
                        return <ProductCard
                            product={product as unknown as Product}
                            isFirst={idx === 0}
                            key={product.id}
                        />
                    })}
                </div>
            </div>
        </div>
    )
}

export default SearchPage