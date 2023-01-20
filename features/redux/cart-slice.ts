import { createSlice } from "@reduxjs/toolkit"
import { CardapioProps } from "../../types/types"

interface cartState {
    items: CardapioProps[]
}

const initialState: cartState = {
    items: []
}

export const cartSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        addItemReducer: (state, action) => {
            state.items = [...state.items, action.payload];
        },
        removeItemReducer: (state, { payload }) => {
            state.items.splice(payload.index, 1);
        }
    },

})

export const { addItemReducer, removeItemReducer } = cartSlice.actions
export const cartReducers = cartSlice.reducer