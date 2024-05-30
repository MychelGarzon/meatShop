import { PayloadAction, createSlice } from "@reduxjs/toolkit";
 
// Define slice state type
export interface CartState {
  cart:{
  name: string;
  amount: number; 
  price: number;
  }
}
 
// Initial state
const initialState: CartState = {
    cart:{
    name: "",
    amount: 0,
    price: 0
    }
};
 
export const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        setCart(state, action: PayloadAction<CartState['cart']>) {
            state.cart = action.payload;
        },
    },
});
 
export const { setCart } = cartSlice.actions;
 
export default cartSlice.reducer;