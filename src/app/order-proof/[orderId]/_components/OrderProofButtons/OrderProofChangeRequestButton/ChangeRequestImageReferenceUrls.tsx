import { ArrayPath, Control, FieldArray, useFieldArray } from "react-hook-form"
import { ChangeRequestFormType } from "./OrderProofChangeRequestButton"
import { FormDescription, FormLabel } from "@/components/ui/form"
import { TypographyMuted } from "@/components/ui/typography"
import ImageReferenceCarousel from "@/components/modules/orders/form/OrderForm/ImageReferenceUrls/ImageReferenceCarousel"
import UploadImageButton from "@/components/modules/orders/form/OrderForm/ImageReferenceUrls/UploadImageButton"
import AddLinkInput from "@/components/modules/orders/form/OrderForm/ImageReferenceUrls/AddLinkInput"

export default function ChangeRequestImageReferenceUrls({
  control,
  className,
}: {
  control: Control<ChangeRequestFormType>
  className?: string
}) {
  const { fields, append, remove } = useFieldArray({
    name: "imageReferences",
    control: control,
  })

  const handleRemove = (index: number) => {
    remove(index)
  }

  const handleAdd = (
    value: FieldArray<ChangeRequestFormType, ArrayPath<ChangeRequestFormType>>
  ) => {
    append(value)
  }

  return (
    <div className={className}>
      <FormLabel className="text-[#3A3A3A]">
        Image References (Optional)
      </FormLabel>
      <FormDescription>Add more image references.</FormDescription>
      <div className="py-3">
        {fields.length > 0 && (
          <ImageReferenceCarousel
            imageReferences={fields}
            onRemove={handleRemove}
          />
        )}
      </div>
      <div className="mt-2 flex gap-2 items-center">
        <UploadImageButton onSubmit={handleAdd} />
        <TypographyMuted>or</TypographyMuted>
        <AddLinkInput onSubmit={handleAdd} />
      </div>
    </div>
  )
}
