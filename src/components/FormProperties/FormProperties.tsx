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
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import spinner from "../../icons/spinner.svg";

import { useNavigate } from "react-router-dom";

import { onlyNumbers } from "@/lib/keyboartNumberInput";
import { Properties } from "@/services/properties/types";
import { X } from "lucide-react";
import { formSchema, FormValues } from "./schema";

export type FormPropertiesProps = {
  property?: Properties;
  onSubmit: (data: FormValues) => void;
  isPending?: boolean;
};

const FormProperties: React.FC<FormPropertiesProps> = ({
  property,
  onSubmit,
  isPending,
}) => {
  const [previewImages, setPreviewImages] = useState<string[]>([]);
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
      garage: property?.garage || "",
      complementary_value_text: property?.complementary_value_text || "",
      condominium: property?.condominium?.toString() || "",
      iptu: property?.iptu?.toString() || "",
      type_propertie: property?.type_propertie || "Casa",
      has_garage: property?.has_garage || "no",
      sale_or_rent: property?.sale_or_rent || "rent",
      property_images: property?.property_images || [{ id: "", url: "" }],
    },
  });

  useEffect(() => {
    if (property?.property_images?.length) {
      setPreviewImages(property.property_images.map((img) => img.url));
    }
  }, [property]);

  // 🔹 Gera previews das novas imagens
  const handleImagePreview = (files: FileList | null) => {
    if (!files) return;
    const newPreviews = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    setPreviewImages((prev) => [...prev, ...newPreviews]);
  };

  // 🔹 Remove imagem individualmente
  const handleRemoveImage = (index: number) => {
    setPreviewImages((prev) => prev.filter((_, i) => i !== index));
  };

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
                      <Input
                        onKeyDown={onlyNumbers}
                        inputMode="numeric"
                        pattern="[0-9]*"
                        {...field}
                      />
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
                      <Input
                        onKeyDown={onlyNumbers}
                        inputMode="numeric"
                        pattern="[0-9]*"
                        {...field}
                      />
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
                      <Input
                        onKeyDown={onlyNumbers}
                        inputMode="numeric"
                        pattern="[0-9]*"
                        {...field}
                      />
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
                      <Input
                        onKeyDown={onlyNumbers}
                        inputMode="numeric"
                        pattern="[0-9]*"
                        {...field}
                      />
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
                      <Input
                        onKeyDown={onlyNumbers}
                        inputMode="numeric"
                        pattern="[0-9]*"
                        {...field}
                      />
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
                      <Input
                        onKeyDown={onlyNumbers}
                        inputMode="numeric"
                        pattern="[0-9]*"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            {form.watch("has_garage") === "yes" && (
              <FormField
                control={form.control}
                name="garage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">
                      Descrição garagem
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Descrição detalhada..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="sale_or_rent"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">
                      Venda/Aluguel
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
                name="type_propertie"
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
                        <SelectItem value="Casa">Casa</SelectItem>
                        <SelectItem value="Apartamento">Apartamento</SelectItem>
                        <SelectItem value="Terreno">Terreno</SelectItem>
                        <SelectItem value="Lote">Lote</SelectItem>
                        <SelectItem value="Chácara">Chácara</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="property_images"
              render={() => (
                <FormItem>
                  <FormLabel className="font-semibold">
                    Upload de Imagens
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={(e) => {
                        handleImagePreview(e.target.files);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/*  Preview das imagens */}
          {previewImages.length > 0 && (
            <div className="mt-4 grid grid-cols-3 gap-3">
              {previewImages.map((src, index) => (
                <div
                  key={index}
                  className="relative w-full h-32 border rounded-lg overflow-hidden group"
                >
                  <img
                    src={src}
                    alt={`Preview ${index}`}
                    className="object-cover w-full h-full"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(index)}
                    className="absolute top-1 right-1 bg-white/80 hover:bg-red-100 rounded-full p-1 opacity-0 group-hover:opacity-100 transition"
                  >
                    <X className="w-4 h-4 text-red-500" />
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="flex justify-end gap-4 mt-6">
            <Button
              variant="outline"
              type="button"
              className="px-9"
              onClick={() => navigate("/admin/property-list")}
            >
              Cancelar
            </Button>
            <Button
              variant={isPending ? "outline" : "default"}
              className="px-10"
              type="submit"
            >
              {isPending ? <img src={spinner} alt="" /> : "Enviar"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default FormProperties;
