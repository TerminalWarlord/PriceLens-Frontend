import { IconClock, IconRefresh } from "@tabler/icons-react";
import type { Product } from "../../../types/product"
import { formatPrice } from "../../lib/price_formatter";
import ProviderLogo from "../ProviderLogo"

const CompareItem = ({ product }: { product: Product }) => {
    const formattedPrice = formatPrice(BigInt(product.product_price));
    return (
        <div className="px-4 overflow-y-auto h-full min-h-0">
            <div className="flex items-center justify-center">
                <img src={product.product_image} className="w-40 h-40" />
            </div>
            <h2 className="text-md font-semibold font-sans mt-2">{product.product_name}</h2>
            <div>
                <p className="whitespace-pre-line text-xs text-neutral-500">{product.product_description}</p>
            </div>
            <div className="my-2">

                <p className="font-mono text-[rgba(0,166,122,1)]">
                    <span>৳</span>
                    <span className="text-lg md:text-xl lg:text-2xl">{formattedPrice}</span>
                </p>
                <p className="flex items-center space-x-1">
                    <span className="font-light text-neutral-500">by</span>
                    <ProviderLogo
                        provider={product.product_provider}
                    />
                </p>
            </div>
            <div>
                <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 space-x-0 md:space-x-4">
                    <p className="text-xs text-neutral-500 flex items-center">
                        <IconClock className="w-4 h-4 pr-1" />
                        <span>{new Date(product.created_at).toDateString()}</span>
                    </p>
                    <p className="text-xs text-neutral-500 flex items-center">
                        <IconRefresh className="w-4 h-4 pr-1" />
                        <span>{new Date(product.updated_at).toDateString()}</span>
                    </p>
                </div>
            </div>
        </div>

    )
}

export default CompareItem