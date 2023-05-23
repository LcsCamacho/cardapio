import { createSlice } from "@reduxjs/toolkit"
import { CardapioProps } from "../../types/types"

interface pedidosState {
    pedidos: CardapioProps[]
}

const initialState: pedidosState = {
    pedidos: []
}

export const pedidosSlice = createSlice({
    name: 'pedidos',
    initialState,
    reducers: {
        addItemReducer: (state, action) => {
            console.log(action.payload)
            state.pedidos = [...state.pedidos, ...action.payload];
        },
        removeItemReducer: (state, { payload }) => {
            state.pedidos.splice(payload.index, 1);
        }
    },

})

export const { addItemReducer, removeItemReducer } = pedidosSlice.actions
export const pedidosReducers = pedidosSlice.reducer