import { usePropertieId } from "@/application/useProperties";
import { useUploadImages } from "@/application/useSupaUploaderImg";
import FormProperties from "@/components/FormProperties/FormProperties";
import { FormValues } from "@/components/FormProperties/schema";
import Loader from "@/components/Loader/Loader";
import { useParams } from "react-router-dom";

const EditProperty: React.FC = () => {
  const params = useParams();
  const { data: property, isLoading } = usePropertieId(params?.id || "");
  const { mutateAsync: uploadImage } = useUploadImages();

  const onSubmit = async (values: FormValues) => {
    const fileInput =
      document.querySelector<HTMLInputElement>('input[type="file"]');
    const files = fileInput?.files;

    if (!files || files.length === 0) {
      alert("Selecione uma imagem primeiro");
      return;
    }
    const fileArray = Array.from(files);
    console.log(values);

    try {
      const urls = await uploadImage(fileArray);
      console.log("✅ Imagem enviada com sucesso:", urls);
    } catch (error) {
      console.error("❌ Erro ao enviar imagem:", error);
    }
  };
  // se tiver o id no params mandar um patch se nao tiver o id e um novo imovel mandar um post
  if (isLoading) {
    return <Loader />;
  }

  return <FormProperties onSubmit={onSubmit} property={property} />;
};
export default EditProperty;
