import ShopActionTypes from './shop.types';

export const updateProducts = (productsMap) => ({
    type: ShopActionTypes.UPDATE_PRODUCTS,
    payload: productsMap
});

