import { Checkbox } from "../ui/checkbox"
import { Field, FieldContent, FieldLabel } from "../ui/field"

const PROVIDERS = [
    {
        name: "Star Tech",
        value: "STARTECH"
    },
    {
        name: "Ryans",
        Value: "RYANS"
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
    return (
        <div>
            <p className="text-sm font-medium my-2">Provider</p>
            {PROVIDERS.map(provider => {
                return <Field orientation="horizontal" key={provider.value} className="my-1.5">
                    <Checkbox
                        id="terms-checkbox-2"
                        name={provider.value}
                        defaultChecked
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