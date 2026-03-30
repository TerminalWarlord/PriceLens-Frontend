import { create } from "zustand";
import { SortBy, type ProductProvider, type SortOrder } from "../../types/product";

type SearchState = {
    sortBy: SortBy;
    sortOrder: SortOrder;
    minPrice: number | null;
    maxPrice: number | null;
    selectedProviders: ProductProvider[];
    updateSortBy: (s: SortBy) => void;
    updateSortOrder: (s: SortOrder) => void;
    updateProviders: (p: ProductProvider[]) => void;
    updatePrice: (prices: number[]) => void;
}

export const useSearchFilterStore = create<SearchState>((set) => ({
    providers: null,
    maxPrice: null,
    minPrice: null,
    sortBy: SortBy.PRODUCT_PRICE,
    sortOrder: "ASC",
    selectedProviders: [],
    updatePrice(prices) {
        set({
            minPrice: prices[0],
            maxPrice: prices[1]
        });
    },
    updateProviders(p) {
        set({ selectedProviders: p })
    },
    updateSortBy(s) {
        set({ sortBy: s })
    },
    updateSortOrder(s) {
        set({ sortOrder: s })
    }
}));