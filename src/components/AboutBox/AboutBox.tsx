import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { analiseDoc, analiseImovel } from "../../assets";

const AboutBox: React.FC = () => {
  const work = [
    <>
      <strong>Análise da Documentação:</strong> Verificamos todos os documentos
      do imóvel e também das partes envolvidas para garantir que não há
      impedimentos legais ou pendências que possam prejudicar a negociação.
    </>,
    <>
      <strong>Elaboração de Contratos:</strong> Redigimos e revisamos contratos
      de compra e venda, garantindo que todas as cláusulas estejam adequadas à
      legislação vigente e protejam os interesses do cliente.
    </>,
    <>
      <strong>Acompanhamento em Escrituras:</strong> Prestamos suporte em todas
      as etapas da assinatura da escritura pública e do registro do imóvel,
      assegurando que todos os procedimentos sejam seguidos corretamente.
    </>,
  ];

  const importanceProfessionalMonitoring = [
    {
      title: "Imóvel com dívida",
      text: "Pela lei, é DEVER DO COMPRADOR verificar as pendências financeiras do imóvel e dos vendedores. Se não verificar adequadamente, podem ocorrer",
    },
    {
      title: "Risco de Perda do Imóvel",
      text: "Se o imóvel estiver envolvido em processos judiciais, como penhora ou disputa de herança, a venda pode ser considerada nula, resultando na perda da propriedade sem direito à devolução do valor pago.",
      complement: [
        <>
          <strong>Anulação da venda:</strong> Se o imóvel adquirido ou o
          vendedor possuir dívidas, a transação pode ser anulada judicialmente.
        </>,
        <>
          <strong>Perda do imóvel:</strong> Se a venda for anulada, o imóvel
          será leiloado para pagamento das dívidas. O COMPRADOR perde o imóvel,
          ficando sem a propriedade que adquiriu.
        </>,
      ],
    },
    {
      title:
        "Ação judicial contra o vendedor para tentar recuperar o valor pago",
      text: "Ao anular a venda, o comprador perde o imóvel que comprou, cabendo a ele entrar com ação judicial contra o vendedor para receber o valor pago de volta. Ele precisará pagar advogado, custas processuais e aguardar anos ter uma decisão no processo, podendo não receber nenhum valor caso o VENDEDOR não tenha mais dinheiro na conta bancária, nem bens, pois se ele não pagar voluntariamente, não terá o que penhorar.  Quem comprou perde o imóvel e não recebe de volta o que pagou.",
    },
  ];

  const documentFraud = [
    {
      title: "Falsificação de Documentos",
      text: "Escrituras, matrículas e registros podem ser adulterados para vender imóveis que não pertencem ao vendedor ou que possuem pendências ocultas.",
    },
    {
      title: "Venda de Imóveis Inexistentes",
      text: "Alguns golpistas vendem propriedades que não existem ou que não lhes pertencem, enganando compradores desavisados.",
    },
    {
      title: "Duplicidade de Venda",
      text: "Um mesmo imóvel pode ser vendido para mais de um comprador, gerando disputas judiciais e prejuízos financeiros.",
    },
    {
      title: "Uso de Procurações Falsas",
      text: "Fraudadores podem utilizar documentos falsificados para assinar contratos de compra e venda sem o conhecimento do verdadeiro proprietário.",
    },
  ];

  const abusiveClauses = [
    {
      title: "Cláusulas Abusivas",
      text: "Algumas cláusulas podem impor condições desvantajosas para uma das partes, como multas excessivas, prazos desproporcionais ou restrições indevidas.",
    },
    {
      title: "Falta de Cláusulas Essenciais",
      text: "A ausência de disposições fundamentais, como prazos claros para pagamento e entrega do imóvel, penalidades para descumprimento ou a definição das obrigações das partes, pode gerar conflitos e insegurança jurídica.",
    },
    {
      title: "Risco de Inexecução",
      text: "Um contrato mal redigido pode deixar brechas para que uma das partes descumpra suas obrigações sem sofrer consequências legais adequadas.",
    },
  ];

  const irregularDocumentation = [
    {
      title: "Impossibilidade de Registro",
      text: "O comprador pode não conseguir registrar o imóvel em seu nome, tornando a posse precária.",
    },
    {
      title: "Risco de Perda do Imóvel",
      text: "Caso a propriedade tenha pendências judiciais, o comprador pode ser obrigado a devolvê-la sem direito a reembolso integral.",
    },
    {
      title: "Dívidas e Ônus Ocultos",
      text: "O imóvel pode estar vinculado a dívidas tributárias, ações judiciais ou hipotecas que podem recair sobre o novo proprietário.",
    },
    {
      title: "Dificuldade para Revenda",
      text: "Imóveis com documentação irregular são difíceis de vender, reduzindo seu valor de mercado e afastando possíveis compradores.",
    },
    {
      title: "Problemas na Transmissão da Propriedade",
      text: "Irregularidades na documentação podem impedir a correta transmissão da propriedade, resultando em disputas judiciais e insegurança jurídica para o comprador.",
    },
    {
      title: "Comprometimento do Patrimônio",
      text: "A compra de um imóvel irregular pode resultar na necessidade de desembolsos adicionais para regularização ou, em casos extremos, na impossibilidade de uso ou venda do bem.",
    },
  ];
  return (
    <div className="pb-12">
      <div className="grid lg:flex gap-4 justify-between mb-8 w-full cursor-default">
        {work.map((item, idx) => (
          <div
            className="border rounded-sm p-4 text-pretty  transition-all duration-300 hover:-translate-y-4 hover:bg-slate-50"
            key={idx}
          >
            <p>{item}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-6">
        <div className="grid lg:flex items-center gap-8">
          <h1 className="text-xl font-semibold max-w-[600px] text-balance">
            Comprar ou vender um imóvel é um processo que envolve diversos
            trâmites legais e documentação que precisam ser analisados com
            atenção.
          </h1>
          <img
            className="md:w-[540px] h-[300px] rounded-md"
            src={analiseImovel}
            alt="análise do imóvel"
          />
        </div>
        <div className="grid lg:flex flex-row-reverse items-center gap-8">
          <h1 className="text-xl text-balance font-semibold max-w-[600px]">
            Nosso serviço de consultoria para análise e acompanhamento da compra
            e venda do imóvel garante que toda a transação ocorra de forma
            segura, transparente e sem surpresas desagradáveis.
          </h1>
          <img
            className="md:w-[540px] h-[300px] rounded-md"
            src={analiseDoc}
            alt="análise de documento"
          />
        </div>
      </div>

      <div className="mt-8 grid lg:grid-cols-2 gap-10">
        <div>
          <h1 className="text-xl font-semibold">
            A Importância do Acompanhamento Profissional
          </h1>
          <p className="mt-6">
            Negociar um imóvel sem a devida assessoria pode trazer riscos e
            prejuízos graves, pois há diversos perigos que podem ocorrer na
            transação
          </p>

          <Accordion className="mt-6 grid gap-1" type="single" collapsible>
            {importanceProfessionalMonitoring.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger>{item.title}</AccordionTrigger>
                <AccordionContent>
                  <p>{item.text}</p>

                  {item.complement?.map((complement, index) => (
                    <li key={index} className="mt-2 pl-4">
                      {complement}
                    </li>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div>
          <h1 className="text-xl font-semibold">Fraudes Documentais</h1>
          <p className="mt-6">
            Fraudes imobiliárias são cada vez mais comuns e podem causar
            prejuízos irreparáveis. Algumas das principais fraudes incluem
          </p>
          <Accordion className="mt-6 grid gap-1" type="single" collapsible>
            {documentFraud.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger>{item.title}</AccordionTrigger>
                <AccordionContent>{item.text}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      <div className="mt-8 grid lg:grid-cols-2 gap-10">
        <div>
          <h1 className="text-xl font-semibold">Documentação irregular</h1>
          <p className="mt-6">
            Adquirir um imóvel com documentação irregular pode gerar uma série
            de problemas jurídicos e financeiros, como
          </p>
          <Accordion className="mt-6 grid gap-1" type="single" collapsible>
            {irregularDocumentation.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger>{item.title}</AccordionTrigger>
                <AccordionContent>{item.text}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div>
          <h1 className="text-lg font-semibold">
            Cláusulas abusivas e/ou a falta de cláusulas Essenciais em contratos
          </h1>
          <p className="mt-6">
            Contratos mal elaborados podem trazer sérios prejuízos para
            compradores e vendedores. Entre os principais riscos estão
          </p>

          <Accordion className="mt-6 grid gap-1" type="single" collapsible>
            {abusiveClauses.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger>{item.title}</AccordionTrigger>
                <AccordionContent>
                  <p>{item.text}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default AboutBox;
