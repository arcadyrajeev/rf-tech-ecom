export type productCardData = {
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  oldPrice: number;
  discount: string;
  link: string;
};

export interface ProductSectionProps {
  title?: string;
  description?: string;

  cardData?: productCardData[];
}
