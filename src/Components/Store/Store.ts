import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { PostSlice } from "./Post-Slice";
import { configureStore } from "@reduxjs/toolkit";

// Define a key for storing the state in local storage
const localStorageKey = "reduxState";



// Retrieve the state from local storage
const retrieveStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem(localStorageKey);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error("Failed to retrieve state from local storage:", error);
    return undefined;
  }
};

// Save the state to local storage
const saveStateToLocalStorage = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(localStorageKey, serializedState);
  } catch (error) {
    console.error("Failed to save state to local storage:", error);
  }
};

// Configure the Redux store with the "post" slice reducer
export const store = configureStore({
  reducer: {
    post: PostSlice.reducer
  },
  preloadedState: retrieveStateFromLocalStorage() // Initialize with the persisted state
});

// Subscribe to store changes and save the state to local storage
store.subscribe(() => {
  const state = store.getState();
  saveStateToLocalStorage(state);
});

// Define a custom hook for accessing the store's dispatch function
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();

// Define a custom hook for selecting state values
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
