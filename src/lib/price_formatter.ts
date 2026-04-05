export function formatPrice(price: bigint) {
    const inTaka = (price / 100n);
    return inTaka.toLocaleString("en-BD", {
        maximumFractionDigits: 2,
    })
}


export function getPriceChangePercentage(price: string, priceChange: string) {
    return (BigInt(priceChange) * 100n) / BigInt(price);
}