import ProductActionTypes from './product.types';

export const toggleProductEditHidden = () => {
    return({
        type: ProductActionTypes.TOGGLE_PRODUCT_EDIT_HIDDEN
    });
};

export const updateProduct = (product) => {
    return({
        type: ProductActionTypes.UPDATE_PRODUCT,
        payload: product
    });
};

export const clearProduct = () => {
    return({
        type: ProductActionTypes.CLEAR_PRODUCT
    });
}