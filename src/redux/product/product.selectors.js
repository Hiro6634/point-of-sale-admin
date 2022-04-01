import { createSelector } from 'reselect';

const selectProductState = state=>state.product;

export const selectProductEditHidden = createSelector(
    [selectProductState],
    product => product.hidden
);

export const selectProduct = createSelector(
    [selectProductState],
    product => product.product
); 
