'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type OrderItem = {
  key: string;
  name: string;
  variant: string;
  price: number;
  qty: number;
};

type OrderContextType = {
  items: OrderItem[];
  addItem: (item: Omit<OrderItem, 'key'>) => void;
  removeItem: (key: string) => void;
  clearOrder: () => void;
  total: number;
};

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export function OrderProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<OrderItem[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('vapehub_cart');
    if (saved) {
      try { 
        const parsed = JSON.parse(saved);
        setTimeout(() => setItems(parsed), 0);
      } catch (e) {}
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('vapehub_cart', JSON.stringify(items));
  }, [items]);

  const addItem = (item: Omit<OrderItem, 'key'>) => {
    const key = `${item.name}|${item.variant}`;
    setItems((prev) => {
      const existing = prev.find((i) => i.key === key);
      if (existing) {
        return prev.map((i) => (i.key === key ? { ...i, qty: i.qty + item.qty } : i));
      }
      return [...prev, { ...item, key }];
    });
  };

  const removeItem = (key: string) => setItems((p) => p.filter((i) => i.key !== key));
  const clearOrder = () => setItems([]);

  const total = items.reduce((acc, i) => acc + i.price * i.qty, 0);

  return (
    <OrderContext.Provider value={{ items, addItem, removeItem, clearOrder, total }}>
      {children}
    </OrderContext.Provider>
  );
}

export const useOrder = () => {
  const ctx = useContext(OrderContext);
  if (!ctx) throw new Error('useOrder must be used within OrderProvider');
  return ctx;
};
