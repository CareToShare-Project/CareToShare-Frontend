import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { PostSlice } from "./Post-Slice";
import {configureStore} from "@reduxjs/toolkit"

export const store = configureStore({
    reducer: {
        post : PostSlice.reducer
    }
})


export const useAppDispatch : () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;