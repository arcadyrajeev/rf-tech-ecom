export type productCardData = {
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  oldPrice: number;
  discount: string;
  link: string;
};

export type productDetails = {
  title: string;
  description: string;
  image1Url: string;
  image2Url?: string;
  image3Url?: string;
  price: number;
  oldPrice?: number;
  discount?: string;
  specs: string;
  sold: number;
  link: string;
};

export type blogCardData = {
  imageUrl: string;
  date: string;
  title: string;
  description: string;
  link: string;
};

export interface ProductSectionProps {
  title?: string;
  description?: string;

  cardData?: productCardData[];
}
