import { formatDateToYYYYMMDD } from "@/helpers/dateHelper"
import GetOrdersModel from "@/types/getOrdersModel"
import { CellContext, ColumnDef } from "@tanstack/react-table"
import OrdersDataTableOrderNumber from "./OrdersDataTableOrderNumber"
import ArtistStatus from "@/enums/artistStatus"

const getOrdersColumnDef = (actionCell: ({ row }: CellContext<GetOrdersModel, unknown>) => JSX.Element): ColumnDef<GetOrdersModel>[] => [
  {
    accessorKey: "orderNumber",
    header: "Order Number",
    cell: (({ row }) => OrdersDataTableOrderNumber({ row, canView: false }))
  },
  {
    id: "date",
    accessorFn: (order) => formatDateToYYYYMMDD(order.date),
    header: "Date",
  },
  {
    id: "artistStatus",
    accessorFn: (order) => order.artistStatus ?? '-',
    header: "Artist Status",
  },
  {
    id: "checkerStatus",
    accessorFn: (order) => order.checkerStatus ?? '-',
    header: "Checker Status",
  },
  {
    id: "actions",
    cell: actionCell
  },
]

const priorityOrdersKey = "/api/orders?priority=true"
const normalOrdersKey = "/api/orders?priority=false"
const priorityCheckerAvailableOrdersKey = `${priorityOrdersKey}&noChecker=true&artistStatus=${ArtistStatus.DesignSubmitted}`
const normalCheckerAvailableOrdersKey = `${normalOrdersKey}&noChecker=true&artistStatus=${ArtistStatus.DesignSubmitted}`

export {
  getOrdersColumnDef,
  priorityOrdersKey,
  normalOrdersKey,
  priorityCheckerAvailableOrdersKey,
  normalCheckerAvailableOrdersKey,
}