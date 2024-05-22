import CustomerStatus from "@/enums/customerStatus"
import CheckerStatus from "@/enums/checkerStatus"
import ArtistStatus from "@/enums/artistStatus"
import YourOrdersPage from "../../../_components/YourOrdersPage"

export default function YourOrdersAsCheckerForCustomerReviewPage({
  params,
}: {
  params: { userId: string }
}) {
  const url = `/api/orders?checkerId=${params.userId}&artistStatus=${ArtistStatus.DesignSubmitted}&checkerStatus=${CheckerStatus.Approved}&customerStatus=${CustomerStatus.ForReview}`

  return <YourOrdersPage title="Waiting for Customer Review (CR)" url={url} />
}
