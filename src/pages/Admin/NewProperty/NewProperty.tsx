import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import spinner from "../../../icons/spinner.svg";
import { formSchema, FormValues } from "./schema";
import { useNavigate, useParams } from "react-router-dom";
import { usePropertieId } from "@/application/useProperties";

export type CloudinaryImageProps = {
  url: string;
  publicId: string;
};

const NewProperty: React.FC = () => {
  const params = useParams();
  const { data: property } = usePropertieId(params?.id || "");

  // SEguindo para pegar as propriedades quando tiver valor e passar para o defaultValues
  console.log(property);

  const navigate = useNavigate();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tipoPropriedade: "Aluguel",
      vagasGaragem: "Não",
    },
  });

  const onSubmit = (values: FormValues) => {
    console.log(values);
  };

  return (
    <div className="max-w-3xl mx-auto mt-8 ">
      <div className="text-center text-2xl font-semibold">Editar Imóvel</div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="titulo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Título</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite o título do imóvel" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="descricao"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Descrição</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Descrição detalhada..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="endereco"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Endereço</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="cidade"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">Cidade</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bairro"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">Bairro</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="quartos"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">Quartos</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="suites"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">Suítes</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="area"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">Área m²</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="valor"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">Valor</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="valorComplementar"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">
                      Valor (complemento opcional)
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="vagasGaragem"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">
                      Vagas na garagem
                    </FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Não">Não</SelectItem>
                        <SelectItem value="Sim">Sim</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="condominio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">Condomínio</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="iptu"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">IPTU</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="tipoPropriedade"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">
                    Tipo de Propriedade
                  </FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Aluguel">Aluguel</SelectItem>
                      <SelectItem value="Venda">Venda</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="arquivos"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">
                    Upload de Imagens
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      multiple
                      onChange={(e) => field.onChange(e.target.files)}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-end gap-4 mt-6">
            <Button
              variant="outline"
              type="button"
              className="px-9"
              onClick={() => navigate("/admin/property-list")}
            >
              Cancelar
            </Button>
            <Button className="px-10" type="submit">
              Enviar
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
export default NewProperty;
