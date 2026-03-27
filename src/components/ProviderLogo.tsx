import { ProductProvider } from "../../types/product"


const ProviderImgMap = {
    "STARTECH": "./star_tech.png",
    "RYANS": "./ryans.png",
    "TECHLAND": "./techland.png",
    "COMPUTER_VILLAGE": "./computer_village.png",
    "TECH_MARVELS": "./tech_marvels.png",
    "APPLE_GADGETS": "./apple_gadgets.png",
    "VERTECH": "./apple_gadgets.png"
} as const;
const ProviderLogo = ({ provider }: { provider: ProductProvider }) => {
    const logo = ProviderImgMap[provider]
    return (
        <img
            src={logo}
            className="h-3 md:h-5 my-2"
        />
    )
}

export default ProviderLogo