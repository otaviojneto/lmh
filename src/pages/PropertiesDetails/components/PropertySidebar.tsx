import { Button } from "@/components/ui/button"
import { Property } from "@/services/properties/types"



export function PropertySidebar({ property }: { property: Property }) {

  const message = encodeURIComponent(
    `Olá! Quero agendar uma visita para o imóvel: ${property.title_property}`
  )

  const messageTalkBroker= encodeURIComponent(
    `Olá! Quero falar com um corretor para o imóvel: ${property.title_property}`
  )

  const whatsappLinkTalkroker = `https://api.whatsapp.com/send?phone=5513988626005&text=${messageTalkBroker}`

  const whatsappLink = `https://api.whatsapp.com/send?phone=5513988626005&text=${message}`


  return (
    <div className="py-6 space-y-2 sticky top-20">
      <div className="text-2xl font-bold">
        R$ {property.value.toLocaleString()}
      </div>

      <p className="text-sm text-muted-foreground">
        {property.complementary_value_text}
      </p>

      <Button asChild className="w-full">
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          Agendar visita
        </a>
      </Button>

      <Button asChild variant="outline" className="w-full">
        <a
          href={whatsappLinkTalkroker}
          target="_blank"
          rel="noopener noreferrer"
        >
          Falar com corretor
        </a>
      </Button>


    </div>
  )
}