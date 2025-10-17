import {
  usePatchProperty,
  usePostPropertyImages,
  usePropertieId,
} from "@/application/useProperties";
import { useUploadImages } from "@/application/useSupaUploaderImg";
import FormProperties from "@/components/FormProperties/FormProperties";
import { FormValues } from "@/components/FormProperties/schema";
import Loader from "@/components/Loader/Loader";
import { CheckCircle2, X } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

const EditProperty: React.FC = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { data: property, isLoading } = usePropertieId(params?.id || "");
  const { mutateAsync: uploadImage } = useUploadImages();
  const { mutateAsync: patchPropertyImages } = usePostPropertyImages();
  const { mutateAsync: patchProperty } = usePatchProperty(params?.id || "");

  const onSubmit = async (values: FormValues) => {
    const fileInput =
      document.querySelector<HTMLInputElement>('input[type="file"]');
    const files = fileInput?.files;

    try {
      const data = await patchProperty({
        title_property: values.title_property,
        description: values.description,
        address: values.address,
        city: values.city,
        neighborhood: values.neighborhood,
        number_rooms: values.number_rooms,
        suites: values.suites,
        area: values.area,
        value: values.value,
        complementary_value_text: values.complementary_value_text,
        sale_or_rent: values.sale_or_rent,
        has_garage: values.has_garage,
        condominium: values.condominium,
        iptu: values.iptu,
        type_propertie: values.type_propertie,
      });

      if (files && files.length > 0) {
        const fileArray = Array.from(files);
        const urls = await uploadImage(fileArray);
        await patchPropertyImages({ id: params?.id || "", images: urls });
      }
      toast.custom(() => (
        <div className="flex items-center gap-3 bg-green-100 text-green-800 p-3 rounded-xl shadow">
          <CheckCircle2 className="w-5 h-5 text-green-800" />
          <span className="font-semibold text-sm">{data.message}</span>
        </div>
      ));
      navigate("/admin/property-list");
    } catch {
      toast.custom(() => (
        <div className="flex items-center gap-3 bg-red-100 text-red-800 p-3 rounded-xl shadow">
          <X className="w-5 h-5 text-red-600" />
          <span className="font-semibold">Erro ao criar imóvel</span>
        </div>
      ));
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return <FormProperties onSubmit={onSubmit} property={property} />;
};
export default EditProperty;
