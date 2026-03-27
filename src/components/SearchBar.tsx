import { IconSearch } from "@tabler/icons-react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { cn } from "../lib/utils"
import { useEffect, useRef } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"

type Props = {
    className?: string
}
const SearchBar = ({ className }: Props) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    useEffect(() => {
        if (!inputRef.current) return;
        inputRef.current.value = searchParams.get('query') || "";
    }, []);

    const handleSearch = () => {
        if (!inputRef || !inputRef.current) {
            // toas
            return;
        }
        navigate(`/search?query=${inputRef.current.value}`)
    }

    return (
        <div
            className={cn(`
            rounded-4xl flex 
            h-14 w-2/6
            bg-white dark:bg-black
            focus-within:ring-1
            focus-within:ring-blue-400
            shadow
            items-center px-4`, className)}>
            <IconSearch className="hidden md:block" />
            <Input
                ref={inputRef}
                placeholder="Search for product..."
                className="border-0 focus-visible:outline-none 
                bg-transparent!
                focus-visible:ring-0 text-sm md:text-base"
                onKeyUp={(e) => {
                    if (e.key === "Enter") {
                        handleSearch();
                    }
                }}
            />
            <Button
                className="bg-primary rounded-2xl! px-3 hidden md:block"
                onClick={handleSearch}
            >Search</Button>
            <Button
                className="bg-primary rounded-2xl! px-3 block md:hidden"
                onClick={handleSearch}
            >
                <IconSearch />
            </Button>
        </div>
    )
}

export default SearchBar