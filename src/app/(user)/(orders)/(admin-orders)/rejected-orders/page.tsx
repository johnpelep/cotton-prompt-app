import { TypographyH2 } from "@/components/ui/typography"
import AdminOrdersDataTable from "../_components/AdminOrdersDataTable"

export default function RejectedOrdersPage() {
  return (
    <div className="flex flex-col gap-4">
      <TypographyH2 withSeparator>Rejected Orders</TypographyH2>
      <AdminOrdersDataTable adminStatus="rejected" />
    </div>
  )
}