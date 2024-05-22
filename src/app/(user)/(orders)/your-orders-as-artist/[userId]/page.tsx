import { redirect } from "next/navigation"
import { getNavItems } from "../_lib/constants"

export default function YourOrdersAsArtistPage({
  params,
}: {
  params: { userId: string }
}) {
  const navItems = getNavItems(params.userId, false)
  redirect(navItems[0].href)
}
