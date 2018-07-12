import {ICartItemProps} from '../Home/types';

export const ADD_TO_CART = "ADD_TO_CART";
export const SUBSTRACT_FROM_CART = "SUBSTRACT_FROM_CART";

export interface ICartProps{
    cartItems: ICartItemProps
}

export interface ICartContainerProps{
    cartItems: ICartItemProps
}

export interface ITotalCounterProps{
    cartItems: ICartItemProps
}