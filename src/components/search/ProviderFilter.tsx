import { useSearchParams } from "react-router-dom"
import { Checkbox } from "../ui/checkbox"
import { Field, FieldContent, FieldLabel } from "../ui/field"

const PROVIDERS = [
    {
        name: "Star Tech",
        value: "STARTECH"
    },
    {
        name: "Ryans",
        value: "RYANS"
    },
    {
        name: "Tech Land",
        value: "TECHLAND"
    },
    {
        name: "Computer Village",
        value: "COMPUTER_VILLAGE"
    },
    {
        name: "Tech Marvels",
        value: "TECH_MARVELS"
    },
    {
        name: "Apple Gadgets",
        value: "APPLE_GADGETS"
    },
    {
        name: "Vertech",
        value: "VERTECH"
    },
]
const ProviderFilter = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const params = new URLSearchParams(searchParams);
    return (
        <div>
            <p className="text-sm font-medium my-2">Provider</p>
            {PROVIDERS.map(provider => {
                return <Field orientation="horizontal" key={provider.value} className="my-1.5">
                    <Checkbox
                        id="terms-checkbox-2"
                        name={provider.value}
                        checked={searchParams.getAll('providers').includes(provider.value)}
                        onCheckedChange={(checked) => {
                            let updatedProviders = params.getAll('providers');
                            if (updatedProviders.includes(provider.value) && !checked) {
                                updatedProviders = updatedProviders.filter(p => p !== provider.value)
                            }
                            else if (!updatedProviders.includes(provider.value) && checked) {
                                updatedProviders.push(provider.value);
                            }
                            params.delete('providers');
                            updatedProviders.forEach(p => params.append("providers", p));
                            setSearchParams(params);
                        }}
                    />
                    <FieldContent>
                        <FieldLabel htmlFor="terms-checkbox-2" className="font-light">
                            {provider.name}
                        </FieldLabel>
                    </FieldContent>
                </Field>
            })}

        </div>
    )
}

export default ProviderFilter