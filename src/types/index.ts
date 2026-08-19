export type Language = 'pt' | 'en';

export type ProductCategory = 'ac' | 'refrigeration' | 'ventilation' | 'parts';

export type PriceMode = 'exposed' | 'on_request';

export interface Product {
  id: string;
  name: {
    pt: string;
    en: string;
  };
  category: ProductCategory;
  description: {
    pt: string;
    en: string;
  };
  specs: {
    pt: string[];
    en: string[];
  };
  image: string;
  priceMode: PriceMode;
  price?: number; // Price in MT (Meticais) if priceMode === 'exposed'
  inStock: boolean;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface ServiceQuoteRequest {
  fullName: string;
  email: string;
  phone: string;
  serviceType: string;
  location: string;
  message: string;
}
