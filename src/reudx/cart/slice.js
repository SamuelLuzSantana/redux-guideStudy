import { createSlice } from "@reduxjs/toolkit";

const initialState = { products: [] }

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const productIsAlreadyInCart = state.products.some(product => product.id === action.payload.id)
            if (productIsAlreadyInCart) {
                state.product = state.products.map(product =>
                    product.id === action.payload.id
                        ? { ...product, quantity: product.quantity + 1 }
                        : product
                );
                return
            }
            state.product = [...state.products, { ...action.payload, quantity: 1 }]
        },

        increaseProductQuantity: (state, action) => {
            state.product = state.products.map(product => product.id === action.payload ? { ...product, quantity: product.quantity + 1 } : product)
        },

        decreaseProductQuantity: (state, action) => {
            state.product = state.products.map(product => product.id === action.payload
                ? { ...product, quantity: product.quantity - 1 }
                : product).filter(product => product.quantity > 0)
        },

        removeProduct: (state, action) => {
            state.product = state.products.filter(product => product.id !== action.payload)
        }
    }
})

export const { addProduct,removeProduct,increaseProductQuantity,decreaseProductQuantity } = cartSlice.actions
export default cartSlice.reducer;
