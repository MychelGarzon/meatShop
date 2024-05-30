import { PayloadAction, createSlice } from "@reduxjs/toolkit";
 
// Define slice state type
export interface UserState {
  user:{
    name: string;
    city: string;
    address: string;
    neighborhood: string;
    locality: string;
    phone: string;
    email: string;
    comments?: string;
  }
}
 
// Initial state
const initialState: UserState = {
    user:{
        name: "",
        city: "",
        address:"",
        neighborhood:"",
        locality:"",
        phone:"",
        email: "",
        comments: "",
    }
};
 
export const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        setUser(state, action: PayloadAction<UserState['user']>) {
            state.user = action.payload;
        },
    },
});
 
export const { setUser } = userSlice.actions;
 
export default userSlice.reducer;