import Cookies from "js-cookie";
import axios from "axios";

const url = `https://mxqzvskylsmjrgksyuyn.supabase.co/storage/v1/object/`;
export const supabaseUploaderImg = {
  supabaseUploader: async (file: File) => {
    const formdData = new FormData();
    const fileName = `${Date.now()}-${file.name}`;
    formdData.append("file", file);
    const response = await axios.post(
      `${url}properties/${fileName}?upsert=true`,
      formdData,
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
          apikey: import.meta.env.VITE_SUPABASE_ANON_KEY,
        },
      }
    );

    if (response.status !== 200) {
      throw new Error("Erro ao enviar imagem");
    }
    return `${url}public/properties/${fileName}`;
  },
};
// TESTAR SE ESTA COMPILANDO A IMG
