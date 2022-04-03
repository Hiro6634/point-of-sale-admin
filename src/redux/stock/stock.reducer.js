import { StockActionTypes } from './stock.types';
import { addItemToStock } from './stock.utils';

const INITIAL_STATE = {
    stock: null
}

const stockReducer = ( state=INITIAL_STATE, action) => {
    switch(action.type){
        case StockActionTypes.UPDATE_STOCK:
            return {
                ...state,
                stock: action.payload
            }
        case StockActionTypes.ADD_STOCK_ITEM:
            return {
                ...state,
                stock: addItemToStock(state.stock, action.payload)
            }
        default:
            return state;
    }
};

export default stockReducer;