import { Property } from "@/services/properties/types"
import { PropertyGallery } from "./PropertyGallery"
import { PropertyHeader } from "./PropertyHeader"
import { PropertyFeatures } from "./PropertyFeatures"
import { PropertyDescription } from "./PropertyDescription"
import { PropertySidebar } from "./PropertySidebar"

interface Props {
  property: Property
}

export function PropertyDetails({ property }: Props) {
  return (
    <div className=" mx-auto py-8">

      <PropertyGallery property={property} />

      <div className="grid md:grid-cols-[1fr_360px] gap-10 mt-8">

        <div>
          <PropertyHeader property={property} />
          <PropertyFeatures property={property} />
          <PropertyDescription property={property} />
        </div>

        <PropertySidebar property={property} />

      </div>
    </div>
  )
}