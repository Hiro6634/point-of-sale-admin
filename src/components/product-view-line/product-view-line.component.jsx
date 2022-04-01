import React from 'react';

import { connect } from 'react-redux';
import {ReactComponent as IconDelete} from '../../assets/trash-outline.svg';
import {ReactComponent as IconEdit} from '../../assets/create-outline.svg';
import {ReactComponent as IconTrue} from '../../assets/checkmark-outline.svg';
import {ReactComponent as IconFalse} from '../../assets/close-outline.svg';

import { 
    ProductViewLineContainer,
    NameContainer,
    CategoryContainer,
    PriceContainer,
    IconContainer
} from './product-view-line.styles';

import { 
    toggleProductEditHidden, 
    updateProduct 
} from '../../redux/product/product.actions';
import { deleteProduct } from '../../redux/shop/shop.actions';


const ProductViewLine = ({
    product, 
    updateProduct, 
    toggleProductEditHidden,
    deleteProduct
}) => (
    <ProductViewLineContainer>
        <CategoryContainer>{product.category.toUpperCase()}</CategoryContainer>
        <NameContainer>{product.name.toUpperCase()}</NameContainer>
        <PriceContainer>${product.price}</PriceContainer>
        <IconContainer>{product.enable?<IconTrue/>:<IconFalse/>}</IconContainer> 
        <IconContainer isClickeable>
            <IconEdit 
                onClick={()=>{
                    updateProduct(product);
                    toggleProductEditHidden();
                }}
            />
        </IconContainer>
        <IconContainer isClickeable>
            <IconDelete onClick={()=>{
                console.log("DELETE!")
                window.confirm("QUIERE ELIMINAR EL PRODUCTO: " + product.name + "?") ? 
                    deleteProduct(product)
                : 
                    console.log("CANCEL");
                }
            }/>
        </IconContainer>
    </ProductViewLineContainer>
);

const mapDispatchToState = dispatch => ({
    toggleProductEditHidden: () => dispatch(toggleProductEditHidden()),
    updateProduct: (product) => dispatch(updateProduct(product)),
    deleteProduct: (product) => dispatch(deleteProduct(product))
});

export default connect(null ,mapDispatchToState)(ProductViewLine);