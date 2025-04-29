import { configureStore } from '@reduxjs/toolkit';
import CategoriSlice from './CategoriSlice';
import productSlice from './ProductSlice';
import cartSlice from './CartSlice';

export const store = configureStore({
  reducer: {
    categories: CategoriSlice,
    products: productSlice,
    carts: cartSlice,
  },
});
