import {
  Button,
  FormControl,
  MenuItem,
  Modal,
  SelectChangeEvent,
} from "@mui/material";
import { getAuth } from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import checkAnimation from "../../../icons/checkAnimation.gif";
import { db } from "../../../services/firebase";
import * as S from "./styles";
import spinner from "../../../icons/spinner.svg";
import { FormProperty } from "../../../@types/FormProperty";
import Title from "../../../components/Admin/Title";
import ModalInfo from "../../../components/Admin/ModalInfo";

export type CloudinaryImageProps = {
  url: string;
  publicId: string;
};

const NewProperty: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormProperty>();
  const [withGarage, setWithGarage] = useState("nao");
  const [typeProperty, setTypeProperty] = useState("rent");
  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [properties, setProperties] = useState<FormProperty[]>([]);
  const [imageUrls, setImageUrls] = useState<CloudinaryImageProps[]>([]);
  const { id } = useParams();
  const isEditMode = !!id;
  const inputRef = useRef<HTMLInputElement>(null);
  const filteredProperties = properties
    .filter((item) => item.id === id)
    ?.map((item) => item.images);

  console.log(filteredProperties);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      setSelectedImages((prev) => [...prev, ...newFiles]);

      const newPreviewUrls = newFiles.map((file) => URL.createObjectURL(file));
      setPreviewUrls((prev) => [...prev, ...newPreviewUrls]);
    }
  };

  const uploadImagesToCloudinary = async (
    files: File[]
  ): Promise<CloudinaryImageProps[]> => {
    const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

    if (!CLOUD_NAME || !UPLOAD_PRESET) {
      throw new Error("Configuração do Cloudinary não encontrada!");
    }
    const uploadedImages = [];
    for (const file of Array.from(files)) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", UPLOAD_PRESET);

      try {
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
          { method: "POST", body: formData }
        );
        const data = await response.json();
        uploadedImages.push({
          url: data.secure_url,
          publicId: data.public_id,
        });
      } catch (error) {
        console.error("Erro ao enviar imagem:", error);
      }
    }
    return uploadedImages;
  };

  const removeImageSelected = async (index: number, url: string) => {
    try {
      const isExistingImage = imageUrls.some((img) => img.url === url);

      // Feedback visual imediato
      setPreviewUrls((prev) => prev.filter((_, i) => i !== index));
      setSelectedImages((prev) => prev.filter((_, i) => i !== index));

      if (isEditMode && id && isExistingImage) {
        const imageToDelete = imageUrls.find((img) => img.url === url);

        if (imageToDelete) {
          // 1. Deleta do Cloudinary
          await deleteImageFromCloudinary(imageToDelete.publicId);

          // 2. Atualiza Firestore
          const docRef = doc(db, "imoveis", id);
          const filteredImages = imageUrls.filter((img) => img.url !== url);

          await updateDoc(docRef, {
            images: filteredImages.map((img) => img.url),
            imagePublicIds: filteredImages.map((img) => img.publicId),
          });

          // 3. Atualiza estado
          setImageUrls(filteredImages);
        }
      }

      if (inputRef.current) inputRef.current.value = "";
    } catch (error) {
      // Rollback visual em caso de erro
      setPreviewUrls((prev) => [...prev]);
      setSelectedImages((prev) => [...prev]);

      console.error("Erro ao remover imagem:", error);
      alert("Erro ao remover imagem. Tente novamente.");
    }
  };

  const deleteImageFromCloudinary = async (publicId: string) => {
    try {
      const response = await fetch(
        `https://www.lmhconsultoria.com/api/v1/images/${publicId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
            "X-Requested-With": "XMLHttpRequest",
          },
          mode: "cors", // 👈 Garantir modo CORS
          credentials: "omit", // 👈 Não enviar cookies
        }
      );

      if (!response.ok) throw new Error("Falha na deleção");

      return await response.json();
    } catch (error) {
      console.error("Erro completo:", error);
      throw error;
    }
  };

  useEffect(() => {
    if (isEditMode && id) {
      const unsubscribe = onSnapshot(
        doc(db, "imoveis", id),
        (doc) => {
          if (doc.exists()) {
            const data = doc.data();
            setImageUrls(
              data.images.map((url: string, index: number) => ({
                url,
                publicId: data.imagePublicIds[index],
              }))
            );
          }
        },
        (error) => {
          console.error("Erro na sincronização:", error);
        }
      );

      return () => unsubscribe();
    }
  }, [id, isEditMode]);

  useEffect(() => {
    const fetchProperty = async () => {
      if (isEditMode && id) {
        try {
          const docRef = doc(db, "imoveis", id);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            const data = docSnap.data();
            reset({
              ...data,
              ...data.descriptionProperty,
              value: data.value ? Number(data.value) : 0,
            });

            setImageUrls(
              data.images.map((url: string, index: number) => ({
                url,
                publicId: data.imagePublicIds[index] || "",
              }))
            );
          }
        } catch (error) {
          console.error("Erro ao carregar imóvel:", error);
        }
      }
    };
    fetchProperty();
  }, [id, isEditMode, reset, withGarage, typeProperty]);

  const onSubmit = async (data: FormProperty) => {
    try {
      setIsLoading(true);
      const auth = getAuth();
      const user = auth.currentUser;

      if (!user) {
        alert("Faça login antes de cadastrar!");
        return;
      }

      let uploadedImages: CloudinaryImageProps[] = [...imageUrls];
      if (selectedImages.length > 0) {
        const newImages = await uploadImagesToCloudinary(selectedImages);
        uploadedImages = [...uploadedImages, ...newImages];
      }

      const imovelData = {
        typePropertie: data.typePropertie,
        city: data.city,
        garage: data.garage,
        value: Number(data.value),
        numberRooms: Number(data.numberRooms) || 0,
        area: Number(data.area) || 0,
        neighborhood: data.neighborhood,
        userId: user.uid,
        createdAt: isEditMode ? data.createdAt : serverTimestamp(),
        images: uploadedImages.map((img) => img.url),
        imagePublicIds: uploadedImages.map((img) => img.publicId),
        hasGarage: withGarage,
        saleOrRent: typeProperty,
        descriptionProperty: {
          typePropertie: data.typePropertie,
          description: data.description,
          address: data.address,
          numberRooms: Number(data.numberRooms),
          price: `R$ ${Number(data.value).toLocaleString()}`,
          descriptionValue: data.descriptionValue,
          condominium: Number(data.condominium) || 0,
          iptu: Number(data.iptu) || 0,
          suites: Number(data.suites) || 0,
          area: Number(data.area) || 0,
        },
      };

      if (isEditMode && id) {
        await updateDoc(doc(db, "imoveis", id), imovelData);
      } else {
        await addDoc(collection(db, "imoveis"), imovelData);
      }

      setOpenModal(true);
      setTimeout(() => {
        navigate("/admin/property-list", {
          state: { forceRefresh: true },
          replace: true,
        });
      }, 2000);
    } catch (error) {
      setIsLoading(false);
      console.error("Erro:", error);
      alert(`Erro ao ${isEditMode ? "atualizar" : "cadastrar"} imóvel`);
    }
    setIsLoading(false);
  };

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setWithGarage(event.target.value as string);
  };

  const handleChangeTypeProperty = (event: SelectChangeEvent<unknown>) => {
    setTypeProperty(event.target.value as string);
  };

  const location = useLocation();

  const fetchProperties = async () => {
    try {
      const imoveisRef = collection(db, "imoveis");
      const q = query(imoveisRef, orderBy("createdAt", "desc")); // Ordena por data
      const querySnapshot = await getDocs(q);

      const loadedProperties: FormProperty[] = [];
      querySnapshot.forEach((doc) => {
        loadedProperties.push({
          ...(doc.data() as FormProperty),
          id: doc?.id,
        });
      });

      setProperties(loadedProperties);
    } catch (error) {
      console.error("Erro ao carregar imóveis:", error);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  useEffect(() => {
    if (location.state?.forceRefresh) {
      fetchProperties(); // Sua função de carregamento
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  return (
    <S.ContainerNewProperty>
      <Title
        size="26px"
        description={isEditMode ? "Editar Imóvel" : "Novo Imóvel"}
      />

      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.TextField
          label="Título"
          {...register("typePropertie", { required: "Título é obrigatório" })}
          error={!!errors.typePropertie}
          helperText={errors.typePropertie?.message?.toString()}
          fullWidth
          focused={isEditMode}
        />
        <S.TextField
          label="Descrição"
          multiline
          rows={6}
          {...register("description", { required: "Descrição é obrigatória" })}
          error={!!errors.description}
          helperText={errors.description?.message?.toString()}
          fullWidth
          focused={isEditMode}
        />

        <S.TextField
          label="Endereço"
          {...register("address", {
            required: "Descrição é obrigatória",
          })}
          error={!!errors.address}
          helperText={errors.address?.message?.toString()}
          fullWidth
          focused={isEditMode}
        />
        <S.Flex>
          <S.TextField
            label="Cidade"
            {...register("city", {
              required: "Descrição é obrigatória",
            })}
            error={!!errors.city}
            helperText={errors.city?.message?.toString()}
            fullWidth
            focused={isEditMode}
          />
          <S.TextField
            label="Bairro"
            {...register("neighborhood", {
              required: "Descrição é obrigatória",
            })}
            error={!!errors.neighborhood}
            helperText={errors.neighborhood?.message?.toString()}
            fullWidth
            focused={isEditMode}
          />
        </S.Flex>

        <S.Flex>
          <S.TextField
            label="Quartos"
            type="number"
            {...register("numberRooms", {
              required: "Valor é obrigatório",
              valueAsNumber: true,
            })}
            error={!!errors.numberRooms}
            helperText={errors.numberRooms?.message?.toString()}
            focused={isEditMode}
          />
          <S.TextField
            label="Suítes"
            type="number"
            {...register("suites", {
              valueAsNumber: true,
            })}
            error={!!errors.suites}
            helperText={errors.suites?.message?.toString()}
            focused={isEditMode}
          />

          <S.TextField
            label="Area m²"
            type="number"
            {...register("area", {
              valueAsNumber: true,
            })}
            error={!!errors.area}
            helperText={errors.area?.message?.toString()}
            focused={isEditMode}
          />
        </S.Flex>
        <S.Flex>
          <S.TextField
            label="Valor"
            type="number"
            {...register("value", {
              required: "Valor é obrigatório",
              valueAsNumber: true,
            })}
            error={!!errors.value}
            helperText={errors.value?.message?.toString()}
            focused={isEditMode}
          />
          <S.TextField
            label="valor (complemento opcional)"
            {...register("descriptionValue")}
            error={!!errors.descriptionValue}
            helperText={errors.descriptionValue?.message?.toString()}
            fullWidth
            focused={isEditMode}
          />
        </S.Flex>

        <S.Flex>
          <FormControl fullWidth>
            <S.InputLabel>Vagas na garagem</S.InputLabel>
            <S.Select
              label="Vagas na garagem"
              MenuProps={S.MenuProps}
              value={withGarage}
              onChange={handleChange}
              sx={{
                "& .MuiOutlinedInput-input": {
                  color: "#273240 !important",
                },
              }}
            >
              <MenuItem value="sim">Sim</MenuItem>
              <MenuItem value="nao">Não</MenuItem>
            </S.Select>
          </FormControl>

          {withGarage === "sim" && (
            <S.TextField
              label="Número de Vagas"
              {...register("garage")}
              error={!!errors.garage}
              helperText={errors.garage?.message?.toString()}
              fullWidth
              focused={isEditMode}
            />
          )}
          <S.TextField
            label="Condomínio"
            type="number"
            {...register("condominium", {
              valueAsNumber: true,
            })}
            focused={isEditMode}
            error={!!errors.condominium}
            helperText={errors.condominium?.message?.toString()}
            fullWidth
          />
          <S.TextField
            label="Iptu"
            type="number"
            {...register("iptu", {
              valueAsNumber: true,
            })}
            focused={isEditMode}
            error={!!errors.iptu}
            helperText={errors.iptu?.message?.toString()}
            fullWidth
          />
        </S.Flex>
        <FormControl fullWidth>
          <S.InputLabel>Tipo de Propriedade</S.InputLabel>
          <S.Select
            label="Tipo de Propriedade"
            MenuProps={S.MenuProps}
            value={typeProperty}
            onChange={handleChangeTypeProperty}
            sx={{
              "& .MuiOutlinedInput-input": {
                color: "#273240 !important",
              },
            }}
          >
            <MenuItem value="sale">Venda</MenuItem>
            <MenuItem value="rent">Aluguel</MenuItem>
          </S.Select>
        </FormControl>
        <S.Flex $flexEnd>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            style={{ margin: "10px 0" }}
            ref={inputRef}
          />
        </S.Flex>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            margin: "10px 0",
          }}
        >
          {imageUrls?.length > 0 ? (
            <>
              {imageUrls.map((img, index) => (
                <div key={img.url} style={{ position: "relative" }}>
                  <S.ImagePreview
                    src={img.url}
                    alt={`Imagem existente ${index + 1}`}
                  />
                </div>
              ))}
            </>
          ) : (
            <>
              {filteredProperties.map((item, index) => (
                <>
                  {item?.map((img, idx) => (
                    <div key={index} style={{ position: "relative" }}>
                      <S.ImagePreview
                        src={img}
                        alt={`Imagem existente ${idx + 1}`}
                      />
                    </div>
                  ))}
                </>
              ))}
            </>
          )}

          {/* Pré-visualizações das novas imagens */}
          {previewUrls.map((url, index) => (
            <div key={url} style={{ position: "relative" }}>
              <S.ImagePreview src={url} alt={`Pré-visualização ${index + 1}`} />
              <S.ButtonDelete onClick={() => removeImageSelected(index, url)}>
                ×
              </S.ButtonDelete>
            </div>
          ))}
        </div>
        <S.Flex $flexEnd>
          <Button
            variant="outlined"
            color="inherit"
            type="button"
            onClick={() => navigate("/admin/property-list")}
          >
            Cancelar
          </Button>

          <Button
            disabled={isLoading}
            color="primary"
            type="submit"
            variant={isLoading ? "outlined" : "contained"}
          >
            {isLoading ? <img src={spinner} alt="spinner" /> : "Enviar"}
          </Button>
        </S.Flex>
      </S.Form>

      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <ModalInfo onClose={() => setOpenModal(false)}>
          <S.ModalSuccess>
            <Title
              size="24px"
              description={`Imóvel ${
                isEditMode ? "atualizado" : "cadastrado"
              } com sucesso!`}
            />
            <S.Icon src={checkAnimation} alt="" />
          </S.ModalSuccess>
        </ModalInfo>
      </Modal>
    </S.ContainerNewProperty>
  );
};

export default NewProperty;
