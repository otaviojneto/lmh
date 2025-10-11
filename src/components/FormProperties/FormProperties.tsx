import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import spinner from "../../icons/spinner.svg";

import { useNavigate } from "react-router-dom";
import { formSchema, FormValues } from "@/pages/Admin/NewProperty/schema";
import { Properties } from "@/services/properties/types";

export type FormPropertiesProps = {
  property?: Properties;
};

const FormProperties: React.FC<FormPropertiesProps> = ({ property }) => {
  const navigate = useNavigate();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title_property: property?.title_property || "",
      description: property?.description || "",
      address: property?.address || "",
      city: property?.city || "",
      neighborhood: property?.neighborhood || "",
      number_rooms: property?.number_rooms?.toString() || "",
      suites: property?.suites?.toString() || "",
      area: property?.area?.toString() || "",
      value: property?.value?.toString() || "",
      complementary_value_text: property?.complementary_value_text || "",
      condominium: property?.condominium?.toString() || "",
      iptu: property?.iptu?.toString() || "",
      type_propertie: "Aluguel",
      has_garage: "Não",
      sale_or_rent: property?.sale_or_rent || "rent",
    },
  });
  console.log(property);

  const { reset } = form;
  useEffect(() => {
    if (property) {
      reset({
        ...property,
        number_rooms: property.number_rooms?.toString() || "",
        suites: property.suites?.toString() || "",
        area: property.area?.toString() || "",
        value: property.value?.toString() || "",
        condominium: property.condominium?.toString() || "",
        iptu: property.iptu?.toString() || "",
      });
    }
  }, [property, reset]);

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
              name="title_property"
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
              name="description"
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
              name="address"
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
                name="city"
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
                name="neighborhood"
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
                name="number_rooms"
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
                name="value"
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
                name="complementary_value_text"
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
                name="has_garage"
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
                        <SelectItem value="no">Não</SelectItem>
                        <SelectItem value="yes">Sim</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="condominium"
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
              name="sale_or_rent"
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
                      <SelectItem value="rent">Aluguel</SelectItem>
                      <SelectItem value="sale">Venda</SelectItem>
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
              Enviar <img src={spinner} alt="" />
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default FormProperties;
