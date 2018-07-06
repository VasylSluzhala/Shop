export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const FETCH_PRODUCT = "FETCH_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

export interface IHomeProps {
    products: any,
    fetchProducts: any
}

export interface IProductItemContainerProps {
    products: IProduct[]
}

export interface IProductItemProps {
    product: IProduct
}

export interface IProduct {
    Id: any,
    Name: string,
    Price: number,
    OldPrice: number,
    IsNew: boolean
}