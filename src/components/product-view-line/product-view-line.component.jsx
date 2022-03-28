import React from 'react';

import { 
    ProductViewLineContainer,
    NameContainer,
    CategoryContainer,
    PriceContainer,
    EnableContainer
} from './product-view-line.styles';

const ProductViewLine = ({product}) => (
    <ProductViewLineContainer>
        <CategoryContainer>{product.category.toUpperCase()}</CategoryContainer>
        <NameContainer>{product.name.toUpperCase()}</NameContainer>
        <PriceContainer>${product.price}</PriceContainer>
        <EnableContainer>{product.enable?'TRUE':'FALSE'}</EnableContainer>
    </ProductViewLineContainer>
); 

export default ProductViewLine;