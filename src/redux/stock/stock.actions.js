import { StockActionTypes } from './stock.types';

export const updateStock = (stockMap) => ({
    type: StockActionTypes.UPDATE_STOCK,
    payload: stockMap
});

export const addItemToStock = (stockItem) => ({
    type: StockActionTypes.ADD_STOCK_ITEM,
    payload: stockItem
});