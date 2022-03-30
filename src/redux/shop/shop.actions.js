import ShopActionTypes from './shop.types';

export const updateProducts = (productsMap) => ({
    type: ShopActionTypes.UPDATE_PRODUCTS,
    payload: productsMap
});


export const toggleProduct = (productName) => ({
    type: ShopActionTypes.TOGGLE_PRODUCT,
    payload: productName
});

