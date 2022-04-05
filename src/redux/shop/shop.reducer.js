import { deleteProduct, toggleAutostopProductState, toggleProductState } from './shop.utils';
import ShopActionTypes from './shop.types';
const INITIAL_STATE = {
    collections: null
};

const shopReducer = ( state=INITIAL_STATE, action) => {
    console.log("ACTION.TYPE:"+ action.type);
    switch( action.type ){
        case ShopActionTypes.UPDATE_PRODUCTS:
            return {
                ...state,
                collections: action.payload
            };
        case ShopActionTypes.TOGGLE_PRODUCT:
            return{
                ...state,
                collections:toggleProductState(state.collections, action.payload)
            };
        case ShopActionTypes.DELETE_PRODUCT:
            return{
                ...state,
                collections:deleteProduct(state.collections, action.payload)
            };
        case ShopActionTypes.TOGGLE_AUTOSTOP_PRODUCT:
            return {
                ...state,
                collections:toggleAutostopProductState(state.collections, action.payload)
            };
        default:
            return state;
    }
};

export default shopReducer;