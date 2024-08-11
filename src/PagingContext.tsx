import { createContext } from "react";

export const PagingContext = createContext<{
  totalItemsCount: number;
  setTotalsCount: (total: number) => void;
} | null>(null);
