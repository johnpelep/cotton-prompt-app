import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import {
  TypographyH3,
  TypographyH4,
  TypographyMuted,
} from "@/components/ui/typography"
import DesignModel from "@/types/designModel"
import FullscreenableImage from "@/components/ui/fullscreenable-image"
import OrderViewDesignCommentPreview from "../OrderViewDesignCommentPreview"
import ArtistStatus from "@/enums/artistStatus"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function OrderViewPreviousDesigns({
  designs,
  artistStatus,
}: {
  designs: DesignModel[]
  artistStatus?: string
}) {
  return (
    <Card className="py-6 container shadow flex flex-col gap-4">
      <TypographyH3>
        Previous Designs
        <TypographyMuted>View previous designs</TypographyMuted>
      </TypographyH3>
      <Accordion
        type="single"
        collapsible
        className="w-full"
        {...(artistStatus !== ArtistStatus.Completed && {
          defaultValue: designs[designs.length - 1].name,
        })}
      >
        {designs.map((d, i) => (
          <AccordionItem value={d.name} key={d.id}>
            <AccordionTrigger>{`#${i + 1}`}</AccordionTrigger>
            <AccordionContent className="p-4 gap-2 flex flex-col">
              <div className="relative aspect-video w-full">
                <FullscreenableImage src={d.url} alt="design preview" />
              </div>
              <div className="text-right mt-2">
                <Button variant="outline" asChild>
                  <Link
                    href={`${process.env.NEXT_PUBLIC_API_URL}/api/Designs/${d.id}/download`}
                    target="_blank"
                    prefetch={false}
                  >
                    Download
                  </Link>
                </Button>
              </div>
              {d.comments.length > 0 && (
                <>
                  <TypographyH4>Comments</TypographyH4>
                  {d.comments.map((c, i) => (
                    <OrderViewDesignCommentPreview key={i} comment={c} />
                  ))}
                </>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Card>
  )
}
