import { type Product } from "../../../types/product";
import { formatPrice } from "../../lib/price_formatter";
import { Separator } from "../ui/separator";
import { IconArrowUpRight, IconClock, IconRefresh, IconStarFilled } from "@tabler/icons-react";
import { cn } from "../../lib/utils";
import ProviderLogo from "../ProviderLogo";


type Props = {
  product: Product;
  className?: string;
  isFirst?: boolean;
}
const ProductCard = ({ product, className, isFirst }: Props) => {
  const formattedPrice = formatPrice(product.product_price);


  return (
    <a
      href={product.product_url}
      target="_black"
      className={cn(`
    group
    border my-4 p-4 rounded-2xl flex flex-col md:flex-row space-x-4 bg-neutral-50
    dark:bg-neutral-50/5 hover:scale-101 transform transition-all ease-in-out duration-300 relative
  `, className)}
    >
      <div>
        {isFirst && <p className="absolute top-3 left-3 flex space-x-1 px-2.5 py-0.5 border bg-primary rounded-xl items-center text-white tracking-wide">
          <IconStarFilled className="w-3 h-3" />
          <span className="text-xs uppercase">Best Match</span>
        </p>
        }
        <img
          id="product_img"
          className="object-contain w-full md:w-44 rounded-md"
          src={product.product_image}
        />
      </div>
      <div className="w-full px-2">
        <ProviderLogo provider={product.product_provider} />
        <h1 className="text-md font-medium hover:text-primary cursor-pointer">{product.product_name}</h1>
        <p className="text-xs text-neutral-500 whitespace-pre-line line-clamp-8 leading-5 tracking-tight">{product.product_description}</p>
        <Separator className="my-2 w-full" />
        <p className="font-mono text-[rgba(0,166,122,1)]">
          <span>৳</span>
          <span className="text-lg md:text-xl lg:text-2xl">{formattedPrice}</span>
        </p>
        <div className="flex w-full justify-between relative overflow-clip">
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
          <a
            href={product.product_url}
            target="_blank"
            className="
    flex space-x-1 text-xs items-center
    transform transition-all duration-300 ease-in-out
    translate-x-10 opacity-0
    group-hover:translate-x-0 group-hover:opacity-100
    group-hover:text-primary
  "
          >
            <span>View Store</span>
            <IconArrowUpRight />
          </a>
        </div>
      </div>
    </a>
  )
}

export default ProductCard