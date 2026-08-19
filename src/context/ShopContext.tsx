import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product, CartItem } from '../types';
import { initialProducts } from '../data/initialProducts';

interface ShopContextType {
  products: Product[];
  cart: CartItem[];
  isCartOpen: boolean;
  isQuoteModalOpen: boolean;
  selectedServiceForQuote: string | null;
  addProduct: (product: Omit<Product, 'id'>) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (id: string) => void;
  resetCatalog: () => void;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  openQuoteModal: (serviceName?: string) => void;
  closeQuoteModal: () => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

const PRODUCTS_STORAGE_KEY = 'emformaa_products_v1';
const CART_STORAGE_KEY = 'emformaa_cart_v1';

export const ShopProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem(PRODUCTS_STORAGE_KEY);
      return saved ? JSON.parse(saved) : initialProducts;
    } catch {
      return initialProducts;
    }
  });

  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string | null>(null);

  // Sync products to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(products));
    } catch (err) {
      console.error('Failed to save products to localStorage:', err);
    }
  }, [products]);

  // Sync cart to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (err) {
      console.error('Failed to save cart to localStorage:', err);
    }
  }, [cart]);

  const addProduct = (newProdData: Omit<Product, 'id'>) => {
    const newProduct: Product = {
      ...newProdData,
      id: `prod-${Date.now()}`
    };
    setProducts(prev => [newProduct, ...prev]);
  };

  const updateProduct = (updatedProduct: Product) => {
    setProducts(prev => prev.map(p => p.id === updatedProduct.id ? updatedProduct : p));
  };

  const deleteProduct = (id: string) => {
    setProducts(prev => prev.filter(p => p.id !== id));
    setCart(prev => prev.filter(item => item.product.id !== id));
  };

  const resetCatalog = () => {
    setProducts(initialProducts);
    localStorage.removeItem(PRODUCTS_STORAGE_KEY);
  };

  const addToCart = (product: Product, quantity = 1) => {
    setCart(prev => {
      const existingIndex = prev.findIndex(item => item.product.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      return [...prev, { product, quantity }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prev => prev.map(item => 
      item.product.id === productId ? { ...item, quantity } : item
    ));
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleCart = () => {
    setIsCartOpen(prev => !prev);
  };

  const openQuoteModal = (serviceName?: string) => {
    setSelectedServiceForQuote(serviceName || null);
    setIsQuoteModalOpen(true);
  };

  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setSelectedServiceForQuote(null);
  };

  return (
    <ShopContext.Provider value={{
      products,
      cart,
      isCartOpen,
      isQuoteModalOpen,
      selectedServiceForQuote,
      addProduct,
      updateProduct,
      deleteProduct,
      resetCatalog,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      toggleCart,
      openQuoteModal,
      closeQuoteModal
    }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = (): ShopContextType => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};
