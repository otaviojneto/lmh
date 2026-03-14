import { Bed, Bath, RulerDimensionLine } from "lucide-react"
import { Property } from "@/services/properties/types"

interface Props {
  property: Property
}

export function PropertyFeatures({ property }: Props) {
  return (
    <div className="flex flex-wrap gap-6 mt-4 text-sm text-muted-foreground">
      <div className="flex items-center gap-2">
        <Bed size={18} />
        {property.number_rooms} quartos
      </div>

      <div className="flex items-center gap-2">
        <Bath size={18} />
        {property.suites} suítes
      </div>

      <div className="flex items-center gap-2">
        <RulerDimensionLine size={18} />
        {property.area}m²
      </div>
    </div>
  )
}