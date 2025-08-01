import { configureStore } from '@reduxjs/toolkit';
import wishlistReducer from './wishlistSlice';
import cartReducer from "./cartslice";

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("cartState");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

// Save cart to localStorage
const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state.cart);
    localStorage.setItem("cartState", serializedState);
  } catch (e) {
    console.error("Could not save state", e);
  }
};

const preloadedState = {
  cart: loadFromLocalStorage() || { cartItems: [] }
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});


export default store;
