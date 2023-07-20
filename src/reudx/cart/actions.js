import CartActionsTypes from "./action-types"

export const addProductToCart = ( payload ) => ({
  type: CartActionsTypes.ADD_PRODUCT,
  payload,
})

export const removeProductFromCart = (payload) => ({
  type: CartActionsTypes.REMOVE_PRODUCT,
  payload,
})

export const increaseProductQuantity = (payload) => ({
  type: CartActionsTypes.INCREASE_PRODUCT_QUANTITY,
  payload,
})

export const decraseProductQuantity = (payload) => ({
  type: CartActionsTypes.DECRASE_PRODUCT_QUANTITY,
  payload,
})