export type Property = {
  descriptionProperty: DescriptionProperty;
};

export type DescriptionProperty = {
  title: string;
  description: string;
  room: number;
  adress: string;
  price: string;
  garage: string;
  img: Pic[];
};

export type Pic = {
  pic: string;
};

export type CardProperty = {
  img: string;
  m?: number | undefined;
  city: string;
  garage: string;
  numberRooms: number;
  neighborhood: string;
  value: string;
  typePropertie: string;
};

export type FullProperty = CardProperty & Property;
