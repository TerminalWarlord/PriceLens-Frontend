import { Button } from "../ui/button"
import { PriceFilter } from "./PriceFilter"
import ProviderFilter from "./ProviderFilter"

const SearchFilterBox = () => {
    return (
        <div className="my-6 rounded-md bg-transparent md:border p-4 w-full md:w-fit h-fit md:bg-neutral-50 md:dark:bg-neutral-50/5">
            <p className="text-xs uppercase tracking-wider">Filters</p>
            <PriceFilter />
            <ProviderFilter />
        </div>
    )
}

export default SearchFilterBox