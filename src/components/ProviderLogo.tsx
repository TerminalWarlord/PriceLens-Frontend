import { ProductProvider } from "../../types/product"
import { cn } from "../lib/utils";


const ProviderImgMap = {
    "STARTECH": "./star_tech.png",
    "RYANS": "./ryans.png",
    "TECHLAND": "./techland.png",
    "COMPUTER_VILLAGE": "./computer_village.png",
    "TECH_MARVELS": "./tech_marvels.png",
    "APPLE_GADGETS": "./apple_gadgets.png",
    "VERTECH": "./apple_gadgets.png",
    "UCC": "./ucc.png",
    "DAZZLE": "./dazzle.png",
    "SKYLANDBD": "./skylandbd.png",
    "POTAKAIT": "./potaka_it.png",
    "ULTRATECH": "./ultra_tech.png",
    "VIBEGAMING": "./vibe_gaming"
} as const;
const ProviderLogo = ({ provider, className }: { provider: ProductProvider, className?: string }) => {
    const logo = ProviderImgMap[provider]
    const providerClassName = () => {
        if (provider === ProductProvider.TECHLAND) {
            return "dark:invert-100 invert-0";
        }
        else if (provider === ProductProvider.COMPUTER_VILLAGE) {
            return "invert-100 dark:invert-0";
        }
    }
    return (
        <img
            src={logo}
            className={cn(`h-3 md:h-5 my-2 `, providerClassName(), className)}
        />
    )
}

export default ProviderLogo