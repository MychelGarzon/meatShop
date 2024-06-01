import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { CartState } from "./cartSlice";
import userReducer, { UserState } from "./userSlice";
 
// Define root state
interface RootState {
cart: CartState,
user: UserState
}
 
// Load Initial State from sessionStorage
function loadState(): RootState | undefined {
  try {
    const serializedState = sessionStorage.getItem("reduxState");
    if (serializedState === null) {
      return undefined; // If no saved state exists, return undefined
    }
    return JSON.parse(serializedState); // Deserialize and return the state
  } catch (err) {
    console.error("Error loading state from sessionStorage:", err);
    return undefined; // If an error occurs, return undefined
  }
}
 
// Save State to sessionStorage
function saveState(state: RootState) {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem("reduxState", serializedState);
  } catch (err) {
    console.error("Error saving state to sessionStorage:", err);
  }
}
 
// Load initial state from sessionStorage
const persistedState = loadState();
 
// Create Redux store with persisted state
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer
  },
  preloadedState: persistedState, // Initialize store with persisted state
});
 
// Subscribe to store updates and save state to sessionStorage
store.subscribe(() => {
  saveState(store.getState());
});
 
export type AppDispatch = typeof store.dispatch;
export type { RootState };