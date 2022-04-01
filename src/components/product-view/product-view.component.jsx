import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopCollectionsSortByCategory } from '../../redux/shop/shop.selectors';
import CustomButton from '../custom-button/custom-button.component';
import { 
    ProductViewContainer,
    ProductTableContainer
 } from './product-view.styles';
import ProductViewLine from '../product-view-line/product-view-line.component';
import { selectProductEditHidden } from '../../redux/product/product.selectors';
import AddOrUpdateProductComponent from '../add-or-update-product/add-or-update-product.component';
import { clearProduct, toggleProductEditHidden } from '../../redux/product/product.actions';

   const ProductView = ({shopCollection, productEditHidden, toggleProductEditHidden, clearProduct}) => {
    return(
    <ProductViewContainer>
        <h2>Productos</h2>
        <ProductTableContainer>
        {
            shopCollection.map( product => (
                <ProductViewLine key={product.id} product={product}/>
            ))
        }
        </ProductTableContainer>
        <div>
            <CustomButton 
                type='button' 
                onClick={()=>{
                    clearProduct();
                    toggleProductEditHidden();   
                }}
            >Agregar</CustomButton>
        </div>
        {
            !productEditHidden ? <AddOrUpdateProductComponent/> : null
        }
    </ProductViewContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    toggleProductEditHidden: () => dispatch(toggleProductEditHidden()),
    clearProduct: () => dispatch(clearProduct())
});

const mapStateToProps = createStructuredSelector({
    shopCollection: selectShopCollectionsSortByCategory,
    productEditHidden: selectProductEditHidden
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductView);