import Select from "react-select"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"
import { Control, FieldValues, Path } from "react-hook-form"

type Option = {
  value: string
  label: string
}

export default function MultiSelect<T extends FieldValues>({
  options,
  label,
  control,
  name,
  loading,
}: {
  options: Option[]
  label: string
  control: Control<T>
  name: Path<T>
  loading?: boolean
}) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Select
              // defaultValue={[colourOptions[2], colourOptions[3]]}
              isMulti
              options={options}
              onChange={(newValue) =>
                field.onChange(newValue.map((o) => o.value))
              }
              isLoading={loading}
              loadingMessage={(obj) => {
                console.log(obj)
                return "Fetching users..."
              }}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}