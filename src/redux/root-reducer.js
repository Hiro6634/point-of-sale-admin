import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import shopReducer from './shop/shop.reducer';
import categoryReducer from './category/category.reducer';
import productReducer from './product/product.reducer';
import stockReducer from './stock/stock.reducer';

export default combineReducers({
    user: userReducer,
    shop: shopReducer,
    category: categoryReducer,
    product: productReducer,
    stock: stockReducer
});