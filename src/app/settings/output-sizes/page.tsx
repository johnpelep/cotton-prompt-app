import { getOutputSizes } from "@/components/modules/settings/output-size/outputSizeService"
import { TypographyH3, TypographyH4 } from "@/components/ui/typography"
import OutputSizeItem from "@/components/modules/settings/output-size/OutputSizeItem"
import OutputSizeDisabledItem from "@/components/modules/settings/output-size/OutputSizeDisabledItem"
import OutputSizeCreate from "@/components/modules/settings/output-size/OutputSizeCreate"

export default async function OutputSizesPage() {
  const activeOutputSizesData = getOutputSizes(true, true)
  const inactiveOutputSizesData = getOutputSizes(true, false)
  const [activeOutputSizes, inactiveOutputSizes] = await Promise.all([
    activeOutputSizesData,
    inactiveOutputSizesData,
  ])

  return (
    <div className="px-8 max-w-3xl">
      <TypographyH3 withSeparator>Print Colors</TypographyH3>
      <ul className=" space-y-2 py-4">
        {activeOutputSizes.map((db, i) => (
          <OutputSizeItem
            key={db.id}
            data={db}
            {...(i > 0 && {
              leftId: activeOutputSizes[i - 1].id,
            })}
            {...(i < activeOutputSizes.length - 1 && {
              rightId: activeOutputSizes[i + 1].id,
            })}
          />
        ))}
      </ul>
      <OutputSizeCreate />
      {inactiveOutputSizes.length > 0 && (
        <>
          <TypographyH4 className="mt-4">Disabled</TypographyH4>
          <ul className=" space-y-2 py-4">
            {inactiveOutputSizes.map((ib) => (
              <OutputSizeDisabledItem key={ib.id} data={ib} />
            ))}
          </ul>
        </>
      )}
    </div>
  )
}
