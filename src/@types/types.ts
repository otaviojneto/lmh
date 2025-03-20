export type Property = {
  descriptionProperty: DescriptionProperty;
};

export type DescriptionProperty = {
  title: string;
  description: string;
  room: number;
  address: string;
  price: string;
  garage: string;
  img: Pic[];
};

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

export type Property1 = {
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
};

export type DescriptionProperty1 = {
  typePropertie: string;
  description: string;
  address: string;
  numberRooms: number;
  price?: string;
  condominium?: number;
  iptu?: number;
  suites?: number;
  area?: number;
};

export type FullProperty = CardProperty & Property;
