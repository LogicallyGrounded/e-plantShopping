import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    // Adds a new item to the cart or increases the quantity if it is already there
    addItem: (state, action) => {
      const { name, image, cost } = action.payload; 
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },
    // Removes an item entirely from the cart based on its name
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload);
    },
    // Updates the exact quantity of a specific item
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload; 
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity; 
      }
    },
  },
});

// Export the action creators to use in your other components
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export the reducer as the default to use in store.js
export default CartSlice.reducer;