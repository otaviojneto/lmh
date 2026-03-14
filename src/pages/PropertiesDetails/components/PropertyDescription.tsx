import { Property } from "@/services/properties/types"

export function PropertyDescription({ property }: { property: Property }) {
  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold mb-3">
        Sobre este imóvel
      </h2>

      <p className="text-muted-foreground whitespace-pre-line">
        {property.description}
      </p>
    </div>
  )
}