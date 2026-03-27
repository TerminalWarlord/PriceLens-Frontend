import { create } from "zustand";
import { SortBy, type ProductProvider, type SortOrder } from "../../types/product";

type SearchState = {
    providers: ProductProvider[] | null;
    sortBy: SortBy;
    sortOrder: SortOrder;
    minPrice: number | null;
    maxPrice: number | null;
    updateSortBy: (s: SortBy) => void;
    updateSortOrder: (s: SortOrder) => void;
    updateProviders: (p: ProductProvider[] | null) => void;
    updatePrice: (prices: number[]) => void;
}

export const useSearchFilterStore = create<SearchState>((set) => ({
    providers: null,
    maxPrice: null,
    minPrice: null,
    sortBy: SortBy.PRODUCT_PRICE,
    sortOrder: "ASC",
    updatePrice(prices) {
        set({
            minPrice: prices[0],
            maxPrice: prices[1]
        });
    },
    updateProviders(p) {
        set({ providers: p })
    },
    updateSortBy(s) {
        set({ sortBy: s })
    },
    updateSortOrder(s) {
        set({ sortOrder: s })
    },
}));