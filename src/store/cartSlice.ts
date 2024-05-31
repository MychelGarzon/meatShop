import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import /* data,  */{ Products } from "../data/data";
 
// Define slice state type
export interface CartState {
  cart: Products[]
}
 
// Initial state
const initialState: CartState = {
    // cart: data
    cart: []
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