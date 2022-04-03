import { createSelector } from 'reselect';

const selectStock = state => state.stock;

export const selectStockItems = createSelector(
    [selectStock],
    stock => stock.stock
);

