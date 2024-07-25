import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0
    },
    reducers: {
        increament: (state, action) => {
            state.count += 1;
        },
        decreament: (state, action) => {
            state.count -= 1;
        },
        reset: (state, action) => {
            state.count = 0
        }
    }
})


export const { increament, decreament, reset } = counterSlice.actions;

export default counterSlice.reducer;