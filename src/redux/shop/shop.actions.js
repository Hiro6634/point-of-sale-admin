import ShopActionTypes from './shop.types';

export const updateProducts = (productsMap) => ({
    type: ShopActionTypes.UPDATE_PRODUCTS,
    payload: productsMap
});


export const toggleProduct = (product) => ({
    type: ShopActionTypes.TOGGLE_PRODUCT,
    payload: product
});

export const toggleAutostopProduct = (product) => ({
    type: ShopActionTypes.TOGGLE_AUTOSTOP_PRODUCT,
    payload: product
});


export const deleteProduct = (product) => ({
    type: ShopActionTypes.DELETE_PRODUCT,
    payload: product
});

