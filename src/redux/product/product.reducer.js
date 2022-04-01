import ProductActionTypes from './product.types';

const INITIAL_STATE = {
    hidden: true
};

const productReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ProductActionTypes.TOGGLE_PRODUCT_EDIT_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case ProductActionTypes.UPDATE_PRODUCT:
            return {
                ...state,
                product: action.payload
            };
        case ProductActionTypes.CLEAR_PRODUCT:
            {                   
                console.log("Que esta pasando?");
                return {
                            ...state,
                            product: null
                        }
            }        
        default:
            return state;
    }
};

export default productReducer;
