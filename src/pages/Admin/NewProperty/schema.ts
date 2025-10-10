import { z } from "zod";

export const formSchema = z.object({
  titulo: z.string().min(1, "Campo obrigatório"),
  descricao: z.string().optional(),
  endereco: z.string().optional(),
  cidade: z.string().optional(),
  bairro: z.string().optional(),
  quartos: z.string().optional(),
  suites: z.string().optional(),
  area: z.string().optional(),
  valor: z.string().optional(),
  valorComplementar: z.string().optional(),
  vagasGaragem: z.string().optional(),
  condominio: z.string().optional(),
  iptu: z.string().optional(),
  tipoPropriedade: z.string().optional(),
  arquivos: z.any().optional(),
});

export type FormValues = z.infer<typeof formSchema>;
