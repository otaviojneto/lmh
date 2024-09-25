import { Property } from "../@types";
import {
  img1,
  img10,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
} from "../assets/salaLivingC1";
const imoveis: Property[] = [
  {
    title: "Sala living - 1 quadra da praia - Jose Menino/Santos (divisa)",
    description:
      "Apartamento tipo sala living (quarto, banheiro e cozinha). Não tem sala. O apartamento está com pintura nova na cor branca e possui piso frio. Bem arejado. 8º andar. Prédio com elevador e portaria 24 horas. Garagem coletiva para poucos veículos. Garantia: depósito caução de 3 meses. Contrato de locação residencial de 30 meses (não alugamos para temporada). Será realizada pesquisa em nome dos moradores.",
    room: 1,
    garage: "Sim (garagem coletiva, insuficiente para todos os apartamentos)",
    adress:
      "Rua Pedro Borges Gonçalves - José Menino - Santos/SP (1 quadra e meia da praia, próximo ao Habibs).",
    price:
      "R$ 1.400,00 o pacote (Aluguel + IPTU + Condomínio + água).À parte, apenas a conta de luz, de acordo com o consumo.",
    img: [
      { pic: img1 },
      { pic: img2 },
      { pic: img3 },
      { pic: img4 },
      { pic: img5 },
      { pic: img6 },
      { pic: img7 },
      { pic: img8 },
      { pic: img9 },
      { pic: img10 },
    ],
  },
];

export default imoveis;
