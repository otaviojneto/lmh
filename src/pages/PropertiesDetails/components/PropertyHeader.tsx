import { Property } from "@/services/properties/types"

interface Props {
  property: Property
}

export function PropertyHeader({ property }: Props) {
  return (
    <div className="space-y-2 mt-6">
      <h1 className="text-2xl font-semibold">
        {property.title_property}
      </h1>

      <p className="text-muted-foreground">
        {property.neighborhood}, {property.city}
      </p>
    </div>
  )
}