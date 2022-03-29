import ShopActionTypes from './shop.types';
const INITIAL_STATE = {
    collections: null,
    products: null
};

const shopReducer = ( state=INITIAL_STATE, action) => {
    switch( action.type ){
        case ShopActionTypes.UPDATE_PRODUCTS:
            return {
                ...state,
                collections: action.payload
            }
        case ShopActionTypes.UPDATE_PRODUCT:
            return {
                ...state,
                product: action.payload
            }
        default:
            return state;
    }
};

export default shopReducer;