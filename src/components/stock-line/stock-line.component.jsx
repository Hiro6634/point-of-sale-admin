import React from 'react';
import { connect } from 'react-redux';
import {ReactComponent as IconTrue} from '../../assets/checkmark-outline.svg';
import {ReactComponent as IconFalse} from '../../assets/close-outline.svg';
import {ReactComponent as IconEdit} from '../../assets/create-outline.svg';
import {ReactComponent as IconDelete} from '../../assets/trash-outline.svg';

import { 
    toggleProductEditHidden, 
    updateProduct 
} from '../../redux/product/product.actions';
import { 
    deleteProduct,
    toggleProduct,
    toggleAutostopProduct
} from '../../redux/shop/shop.actions';

import { 
    StockLineContainer,
    ProductContainer,
    StockContainer,
    IconContainer,
    ControlsContainer,
    EnableContainer
} from './stock-line.styles';

const StockLine = ({
    stockItem,
    updateProduct,
    toggleProductEditHidden,
    deleteProduct,
    toggleProduct,
    toggleAutostopProduct
}) => {
    console.log("STOCKITEM enable:",stockItem.enable);
    return(
    <StockLineContainer>
        <ProductContainer disable={!stockItem.enable}>{stockItem.id}</ProductContainer>
        <StockContainer>{stockItem.stock}</StockContainer>
        <StockContainer>{stockItem.warninglevel}</StockContainer>
        <StockContainer>{stockItem.stoplevel}</StockContainer>
        <EnableContainer>
            <IconContainer isClickeable onClick={()=>{
                console.log("TOGGLE AUTOSTOP");
                toggleAutostopProduct(stockItem)
            }}>{stockItem.enablestop?<IconTrue/>:<IconFalse/>}</IconContainer> 
        </EnableContainer>
        <EnableContainer>
            <IconContainer isClickeable onClick={()=>{
                console.log("TOGGLE ENABLE");
                toggleProduct(stockItem)
            }}>{stockItem.enable?<IconTrue/>:<IconFalse/>}</IconContainer> 
        </EnableContainer>
        <ControlsContainer>
            <IconContainer isClickeable>
                <IconEdit 
                    onClick={()=>{
                        updateProduct(stockItem);
                        toggleProductEditHidden();
                    }}
                />
            </IconContainer>
            <IconContainer isClickeable>
                <IconDelete onClick={()=>{
                    console.log("DELETE!")
                    window.confirm("QUIERE ELIMINAR EL PRODUCTO: " + stockItem.name + "?") ? 
                        deleteProduct(stockItem)
                    : 
                        console.log("CANCEL");
                    }
                }/>
            </IconContainer>
        </ControlsContainer>
    </StockLineContainer>
);}

const mapDispatchToState = dispatch => ({
    toggleProductEditHidden: () => dispatch(toggleProductEditHidden()),
    updateProduct: (product) => dispatch(updateProduct(product)),
    deleteProduct: (product) => dispatch(deleteProduct(product)),
    toggleProduct: (product) => dispatch(toggleProduct(product)),
    toggleAutostopProduct: (product) => dispatch(toggleAutostopProduct(product))
});

export default connect(null, mapDispatchToState)(StockLine);