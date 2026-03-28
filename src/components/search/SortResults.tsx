import { IconAdjustmentsHorizontal, IconSortAscending2, IconSortDescending2 } from "@tabler/icons-react"
import { Button } from "../ui/button"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import SearchFilterBox from "./SearchFilterBox";
import { useSearchParams } from "react-router-dom";
import { SortBy } from "../../../types/product";
import { toast } from "sonner";

const SortResults = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const sortOrder = searchParams.get('sort_order') || "ASC";

    const toggleSortOrder = () => {
        if (sortOrder === "ASC") {
            searchParams.set("sort_order", "DESC");
        }
        else {
            searchParams.delete("sort_order");
        }
        setSearchParams(searchParams);
    }
    return (
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
                onChange={(e) => {
                    const val = e.currentTarget.value;
                    if (!val || !Object.values(SortBy).includes(val as SortBy)) {
                        toast.error("Invalid filter");
                        return;
                    }
                    searchParams.set('sort_by', val);
                    setSearchParams(searchParams);
                }}
                className="bg-neutral-50 dark:bg-neutral-50/5 
                                focus-within:ring-1
                                focus-within:ring-primary
                                focus-within:outline
                                focus-within:outline-primary
                                border
                                px-2 py-1.5 rounded-md text-xs w-full"
            >
                <option value={SortBy.PRODUCT_PRICE}>Price</option>
                <option value={SortBy.RELEVANCE}>Relevance</option>
                <option value={SortBy.CREATED_AT}>Date Added</option>
                <option value={SortBy.UPDATED_AT}>Date Updated</option>
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
    )
}

export default SortResults