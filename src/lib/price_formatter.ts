export function formatPrice(price: number | bigint) {
    const inTaka = (Number(price) / 100);
    return inTaka.toLocaleString("en-BD", {
        maximumFractionDigits: 2,
    })
}