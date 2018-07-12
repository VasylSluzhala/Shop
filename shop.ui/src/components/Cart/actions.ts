import { ADD_TO_CART, SUBSTRACT_FROM_CART } from './types';

export function addToCart(product){
    return {
        type:ADD_TO_CART,
        payload: product
    }
}

export function substractFromCart(product){
    return {
        type:SUBSTRACT_FROM_CART,
        payload: product
    }
}