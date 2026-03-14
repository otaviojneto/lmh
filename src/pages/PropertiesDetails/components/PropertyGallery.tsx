import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Property } from "@/services/properties/types"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"



interface Props {
  property: Property
}

export function PropertyGallery({ property }: Props) {
  const images = property.property_images

  if (!images?.length) return null

  return (
    <Dialog>
      <div className="grid gap-2 md:grid-cols-4 relative">
        <div className="md:col-span-3">
          <img
            src={images[0].url}
            className="w-full h-[420px] object-cover rounded-xl"
          />
        </div>

        <div className="hidden md:grid grid-rows-2 gap-2">
          {images.slice(1, 3).map((img) => (
            <img
              key={img.id}
              src={img.url}
              className="h-[205px] w-full object-cover rounded-xl"
            />
          ))}
        </div>

        <DialogTrigger asChild>
          <button className="absolute bottom-4 right-4 bg-black/70 text-white px-4 py-2 rounded-lg text-sm hover:bg-black">
            Ver todas as fotos
          </button>
        </DialogTrigger>
      </div>

      <DialogContent className="max-w-5xl md:px-60 px-35 bg-white dark:bg-gray-900">

        <Carousel className="w-full">
          <CarouselContent>

            {images.map((img) => (
              <CarouselItem key={img.id}>
                <div className="flex items-center justify-center ">
                  <img
                    src={img.url}
                    className="max-h-[75vh] w-auto rounded-lg object-contain"
                  />
                </div>
              </CarouselItem>
            ))}

          </CarouselContent>

          <div className="hidden md:block">
            <CarouselPrevious />
            <CarouselNext />
          </div>


          <div className="flex justify-center py-6 md:hidden">
            <div className="relative">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </div>

        </Carousel>

      </DialogContent>
    </Dialog>
  )
}