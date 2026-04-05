export function formatPrice(price: bigint) {
    const inTaka = (price / 100n);
    return inTaka.toLocaleString("en-BD", {
        maximumFractionDigits: 2,
    })
}