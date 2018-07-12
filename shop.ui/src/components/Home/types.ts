import { ICartItemProps, IProduct } from './types';
export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const FETCH_PRODUCT = "FETCH_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

export interface IHomeProps {
    products: IProduct[],
    cartItems: ICartItemProps[],
    fetchProducts: any
}

export interface IProductItemContainerProps {
    products: IProduct[],
    cartItems: ICartItemProps[]
}

export interface IProductItemProps {
    product: IProduct,
    amountInCart: number,
    addToCart: any
}

export interface IProduct {
    Id: any,
    Name: string,
    Price: number,
    OldPrice: number,
    IsNew: boolean
}

export interface ICartItemProps {
    item: IProduct,
    amount: number,
    addToCart: any,
    substractFromCart: any
}

