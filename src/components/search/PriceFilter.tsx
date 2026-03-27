"use client"

import * as React from "react"
import { Slider } from "../ui/slider"

const maxPrice = 10000000;
const minPrice = 100;
export function PriceFilter() {
    const [value, setValue] = React.useState([minPrice, maxPrice])

    return (
        <div className="w-full md:w-52 my-4">
            <p className="text-sm font-medium my-2">Price Range</p>
            <Slider
                value={value}
                onValueChange={setValue}
                min={minPrice}
                max={maxPrice}
                step={1000}
            />
            <div className="flex items-center justify-between gap-2 my-2">
                <span className="text-sm text-muted-foreground">
                    ৳{value[0]}
                </span>
                <span className="text-sm text-muted-foreground">
                    ৳{value[1]}
                </span>
            </div>
        </div>
    )
}
