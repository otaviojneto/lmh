export type Pic = {
  pic: string;
};

export type CardProperty = {
  img?: string;
  m?: number | undefined;
  city?: string;
  garage?: string;
  numberRooms?: number;
  neighborhood?: string;
  value?: string;
  typePropertie?: string;
  description?: string;
  address?: string;
  price?: string;
  condominium?: number;
  iptu?: number;
  suites?: number;
  area?: number;
};

export type Property = {
  id: string;
  typePropertie: string;
  city: string;
  garage: string;
  value: number;
  numberRooms: number;
  area?: number;
  userId?: string;
  neighborhood: string;
  descriptionProperty?: DescriptionProperty;
  images?: string[];
};

export type DescriptionProperty = {
  typePropertie: string;
  description: string;
  address: string;
  numberRooms: number;
  price?: string;
  descriptionValue?: string;
  condominium?: number;
  iptu?: number;
  suites?: number;
  area?: number;
};
