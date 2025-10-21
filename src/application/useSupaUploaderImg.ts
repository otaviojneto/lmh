import { supabaseUploaderImg } from "@/services/supabaseUploaderImg/supabaseUploaderImg";
import { useMutation } from "@tanstack/react-query";

export const useUploadImages = () => {
  return useMutation<string[], Error, File[]>({
    mutationFn: async (files) => {
      const uploads = await Promise.all(
        files.map((file) => supabaseUploaderImg.supabaseUploader(file))
      );
      return uploads;
    },
  });
};
