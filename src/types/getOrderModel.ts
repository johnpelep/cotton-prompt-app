import DesignBracket from "./designBracket"
import DesignModel from "./designModel"
import ImageReferenceModel from "./imageReferenceModel"
import OutputSize from "./outputSize"
import PrintColor from "./printColor"

type GetOrderModel = {
  id: number
  orderNumber: string
  priority: boolean
  concept: string
  printColor: PrintColor
  designBracket: DesignBracket
  outputSize: OutputSize
  userGroupId: number,
  customerEmail: string
  imageReferences: ImageReferenceModel[]
  design?: DesignModel
  previousDesigns: DesignModel[]
  artistStatus?: string
  checkerStatus?: string
  customerStatus?: string
  artistId?: string
  checkerId?: string
  userGroup: string
  isChangeRequest: boolean
}

export default GetOrderModel