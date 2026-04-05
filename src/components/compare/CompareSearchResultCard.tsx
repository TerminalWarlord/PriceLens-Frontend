import type { Product } from "../../../types/product"
import { formatPrice } from "../../lib/price_formatter"
import ProviderLogo from "../ProviderLogo"

const CompareSearchResultCard = ({ product, selectProduct }: {
    product: Product,
    selectProduct: (p: Product) => void
}) => {
    const price = formatPrice(BigInt(product.product_price));

    return (
        <div
            className=" rounded-md py-1 px-2 cursor-pointer hover:bg-neutral-950/5"
            onClick={() => {
                selectProduct(product);
            }}
            style={{
                animation: "slideUpFade 0.25s ease-out",
                animationDelay: `60ms`,
                animationFillMode: "both",
            }}
        >
            < div className="flex space-x-3 items-start" >
                <img
                    src={product.product_image}
                    alt={product.product_name}
                    className="w-12 h-12 rounded-xl"
                />
                <div>
                    <h4 className="font-medium line-clamp-3">{product.product_name}</h4>
                    <div className="text-xs flex items-center space-x-1">
                        <ProviderLogo
                            provider={product.product_provider}
                            className="w-10 h-auto!"
                        />
                        <p className="text-neutral-600 font-medium">
                            <span>৳</span>
                            <span>{price}</span>
                        </p>
                    </div>
                    <p className="flex space-x-1 items-center">

                    </p>
                </div>
            </div >
        </div >
    )
}

export default CompareSearchResultCard