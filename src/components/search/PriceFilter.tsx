"use client"

import { Slider } from "../ui/slider"
import { useSearchFilterStore } from "../../store/search_store";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const maxPrice = 1000000;
const minPrice = 100;
export function PriceFilter() {
    const curMinPrice = useSearchFilterStore((state) => state.minPrice) || minPrice;
    const curMaxPrice = useSearchFilterStore((state) => state.maxPrice) || maxPrice;
    const updatePrice = useSearchFilterStore((state) => state.updatePrice);
    const [searchParams, setSearchParams] = useSearchParams();
    const params = new URLSearchParams(searchParams);
    useEffect(() => {
        const minPriceFromSp = parseInt(searchParams.get("min_price") || "100");
        const maxPriceFromSp = parseInt(searchParams.get("max_price") || "1000000");
        updatePrice([minPriceFromSp, maxPriceFromSp]);
    }, [searchParams, updatePrice]);

    const updatePriceWithSearchParams = (p: number[]) => {
        params.set('min_price', p[0].toString());
        params.set('max_price', p[1].toString());
        updatePrice(p);
        setSearchParams(params);
    }

    return (
        <div className="w-full md:w-52 my-4">
            <p className="text-sm font-medium my-2">Price Range</p>
            { }
            <Slider
                value={[curMinPrice, curMaxPrice]}
                onValueChange={updatePriceWithSearchParams}
                min={minPrice}
                max={maxPrice}
                step={100}
            />
            <div className="flex items-center justify-between gap-2 my-2">
                <span className="text-sm text-muted-foreground">
                    ৳{curMinPrice}
                </span>
                <span className="text-sm text-muted-foreground">
                    ৳{curMaxPrice}
                </span>
            </div>
        </div>
    )
}
