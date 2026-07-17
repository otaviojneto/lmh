import { Property } from "@/services/properties/types"
import { PropertyGallery } from "./PropertyGallery"
import { PropertyHeader } from "./PropertyHeader"
import { PropertyFeatures } from "./PropertyFeatures"
import { PropertyDescription } from "./PropertyDescription"
import { PropertySidebar } from "./PropertySidebar"
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
interface Props {
  property: Property
}

export function PropertyDetails({ property }: Props) {
  const navigate = useNavigate();
  return (
    <div className=" mx-auto py-8">
      <div className='mb-4 ml-[-14px]'>
        <Button variant='link' onClick={() => navigate('/properties')} className='font-semibold'><ArrowLeft className='w-4 h-4' /> Voltar</Button>
      </div>

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