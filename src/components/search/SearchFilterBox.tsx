import { IconFilter } from "@tabler/icons-react"
import { Button } from "../ui/button"
import { PriceFilter } from "./PriceFilter"
import ProviderFilter from "./ProviderFilter"
import { useSearchParams } from "react-router-dom"
import { useSearchFilterStore } from "../../store/search_store"

const SearchFilterBox = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const selectedProviders = useSearchFilterStore(state => state.selectedProviders);
    const minPrice = useSearchFilterStore(state => state.minPrice);
    const maxPrice = useSearchFilterStore(state => state.maxPrice);
    const updateFilters = () => {
        searchParams.delete("providers");
        selectedProviders.map(p => {
            if (!searchParams.getAll('providers').includes(p)) {
                searchParams.append("providers", p);
            }
        });
        if (minPrice) searchParams.set("min_price", minPrice.toString());
        if (maxPrice) searchParams.set("max_price", maxPrice.toString());
        setSearchParams(searchParams);
    };
    return (
        <div className="my-6 rounded-md bg-transparent md:border p-4 w-full md:w-fit h-fit md:bg-neutral-50 md:dark:bg-neutral-50/5">
            <p className="text-xs uppercase tracking-wider">Filters</p>
            <PriceFilter />
            <ProviderFilter />
            <Button
                onClick={updateFilters}
                className="my-4 bg-neutral-800 dark:bg-neutral-100 cursor-pointer"
            >
                <IconFilter />
                <span>Filter Results</span>
            </Button>
        </div>
    )
}

export default SearchFilterBox