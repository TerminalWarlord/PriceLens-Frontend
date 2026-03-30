import { useSearchParams } from "react-router-dom"
import { Checkbox } from "../ui/checkbox"
import { Field, FieldContent, FieldLabel } from "../ui/field"
import { ProductProvider } from "../../../types/product"
import { useSearchFilterStore } from "../../store/search_store"
import { useEffect } from "react"

const PROVIDERS = [
    {
        name: "Star Tech",
        value: ProductProvider.STARTECH
    },
    {
        name: "Ryans",
        value: ProductProvider.RYANS
    },
    {
        name: "Tech Land",
        value: ProductProvider.TECHLAND
    },
    {
        name: "Sky Land BD",
        value: ProductProvider.SKYLANDBD
    },
    {
        name: "Dazzle",
        value: ProductProvider.DAZZLE
    },
    {
        name: "Computer Village",
        value: ProductProvider.COMPUTER_VILLAGE
    },
    {
        name: "Tech Marvels",
        value: ProductProvider.TECH_MARVELS
    },
    {
        name: "Apple Gadgets",
        value: ProductProvider.APPLE_GADGETS
    },
    {
        name: "UCC",
        value: ProductProvider.UCC
    },
    {
        name: "Vertech",
        value: ProductProvider.VERTECH
    },
]
const ProviderFilter = () => {
    const [searchParams] = useSearchParams();
    const selectedProviders = useSearchFilterStore(state => state.selectedProviders);
    const updateProviders = useSearchFilterStore(state => state.updateProviders);
    useEffect(() => {
        const currentProviders = searchParams.getAll('providers').map(p => p as ProductProvider);
        updateProviders(currentProviders);
    }, [searchParams, updateProviders]);
    return (
        <div>
            <p className="text-sm font-medium my-2">Provider</p>
            {PROVIDERS.map(provider => {
                return <Field
                    orientation="horizontal"
                    key={provider.value}
                    className="my-1.5"
                >
                    <Checkbox
                        id={provider.value}
                        name={provider.value}
                        className="cursor-pointer"
                        checked={selectedProviders.includes(provider.value as ProductProvider)}
                        onCheckedChange={() => {
                            if (selectedProviders.includes(provider.value)) {
                                updateProviders(selectedProviders.filter(p => p !== provider.value));
                            }
                            else {
                                updateProviders([...selectedProviders, provider.value]);
                            }
                        }}
                    />
                    <FieldContent>
                        <FieldLabel htmlFor={provider.value} className="font-light cursor-pointer">
                            {provider.name}
                        </FieldLabel>
                    </FieldContent>
                </Field>
            })}
        </div>
    )
}

export default ProviderFilter