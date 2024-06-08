type GetOrdersModel = {
  id: number
  orderNumber: string
  priority: boolean
  date: string
  artistStatus?: string
  checkerStatus?: string
  artistId?: string
  artistName?: string
  checkerId?: string
  checkerName?: string
  customerStatus: string
  customerName: string
  originalOrderId?: number
  changeRequestOrderId?: number
  reason?: string
  reporterName?: string
  userGroupId: number
  userGroupName: string
}

export default GetOrdersModel