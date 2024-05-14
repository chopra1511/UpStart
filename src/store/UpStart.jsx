import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    
    
}

const storeSlice = createSlice({
    name: "store",
    initialState,
    reducers: {
        
    }
});

const store = configureStore({
    reducer: {
        [storeSlice.name]: storeSlice.reducer
    }
});

export const storeActions = storeSlice.actions;
export default store;