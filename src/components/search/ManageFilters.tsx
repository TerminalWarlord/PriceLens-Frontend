import { IconX } from '@tabler/icons-react';
import { useSearchParams } from 'react-router-dom'

type Filters = "min_price" | "max_price" | "providers";
const FilterNames = {
    "min_price": "Min Price",
    "max_price": "Max Price",
    "providers": "Provider",
} as const;

const ManageFilters = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const items: { key: Filters, val: string }[] = [];
    searchParams.forEach((val, key) => {
        if (Object.keys(FilterNames).includes(key as Filters)) {
            items.push({
                key: key as Filters,
                val
            })
        }
    });

    const handleRemoveFilter = (key: string, val: string) => {
        searchParams.delete(key, val);
        setSearchParams(searchParams);
    }
    return (
        <div className='flex flex-wrap space-x-1 my-2 space-y-2'>
            {items && items.length > 0 && items.map(v => {
                return <div className='flex space-x-1 border px-2 py-1.5 bg-neutral-300/30 rounded-2xl w-fit text-xs items-center h-fit'>
                    <p>{FilterNames[v.key]}: </p>
                    <p>{v.val.replace("_", " ")}</p>
                    <IconX
                        className='w-4 h-4 hover:text-primary cursor-pointer'
                        onClick={() => handleRemoveFilter(v.key, v.val)}
                    />
                </div>
            })}
            {items && items.length > 0 && <div className='flex space-x-1 border px-2 py-1.5  text-white bg-red-500/80 rounded-2xl w-fit text-xs items-center h-fit'>
                <p>Reset</p>
                <IconX
                    className='w-4 h-4 hover:text-primary cursor-pointer'
                    onClick={() => {
                        searchParams.delete('providers');
                        searchParams.delete('min_price');
                        searchParams.delete('max_price');
                        setSearchParams(searchParams);
                    }}
                />
            </div>}

        </div>
    )
}

export default ManageFilters