import { z } from "zod";

export const formSchema = z.object({
  title_property: z.string().min(1, "Campo obrigatório"),
  description: z.string().min(1, "Campo obrigatório"),
  address: z.string().optional(),
  city: z.string().min(1, "Campo obrigatório"),
  neighborhood: z.string().optional(),
  number_rooms: z.string().optional(),
  suites: z.string().optional(),
  area: z.string().optional(),
  value: z.string().min(1, "Campo obrigatório"),
  complementary_value_text: z.string().optional(),
  sale_or_rent: z.string().optional(),
  has_garage: z.string().optional(),
  condominium: z.string().optional(),
  iptu: z.string().optional(),
  type_propertie: z.string().optional(),
  arquivos: z.any().optional(),
});

export type FormValues = z.infer<typeof formSchema>;
