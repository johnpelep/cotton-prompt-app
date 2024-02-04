"use client"

import useSession from "@/hooks/useSession"
import {
  ArtistStatus,
  CheckerStatus,
  CustomerStatus,
} from "../../_lib/constants"
import YourOrdersPage from "../../_components/YourOrdersPage"

export default function YourOrdersAsArtistForCustomerReviewPage() {
  const { session } = useSession()
  const url = `/api/orders?artistId=${session?.userId}&artistStatus=${ArtistStatus.DesignSubmitted}&checkerStatus=${CheckerStatus.Approved}&customerStatus=${CustomerStatus.ForReview}`

  return <YourOrdersPage title="Waiting for Customer Review" url={url} />
}
