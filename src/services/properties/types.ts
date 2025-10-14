export type PropertiesList = Properties[];

export interface Properties {
  id: string;
  user_id: string;
  description: string;
  area: number;
  number_rooms: number;
  price: number;
  address: string;
  type_propertie: string;
  iptu: number;
  condominium: number;
  suites: number;
  has_garage: string;
  garage: string;
  value: number;
  neighborhood: string;
  city: string;
  sale_or_rent: string;
  title_property?: string;
  complementary_value_text?: string;
  created_at: string;
  property_images: PropertyImage[];
}

export interface PropertyImage {
  id: string;
  url: string;
}

export type PostPropertyResponse = {
  id: string;
  message: string;
};
