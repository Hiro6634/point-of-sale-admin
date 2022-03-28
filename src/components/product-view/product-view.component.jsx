import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopCollectionsSortByCategory } from '../../redux/shop/shop.selectors';
import ProductViewLine from '../product-view-line/product-view-line.component';

import { ProductViewContainer } from './product-view.styles';

const ProductView = ({shopCollection}) => {
    console.log(shopCollection);
    return(
    <ProductViewContainer>
        <h2>Product View</h2>
        {
            shopCollection.map((col)=>(
                <ProductViewLine key={col.id} product={col}/>
            ))
        }
    </ProductViewContainer>
    );
}


const mapStateToProps = createStructuredSelector({
    shopCollection: selectShopCollectionsSortByCategory
});
export default connect(mapStateToProps)(ProductView);