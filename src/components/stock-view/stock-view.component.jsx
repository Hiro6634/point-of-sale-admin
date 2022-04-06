import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopCollectionsSortByCategory} from '../../redux/shop/shop.selectors';
import StockLine from '../stock-line/stock-line.component';
import { selectProductEditHidden } from '../../redux/product/product.selectors';
import AddOrUpdateProduct from '../add-or-update-product/add-or-update-product.component';

import { 
    StockViewContainer,
    StockTableContainer,
    StockHdrTableContainer,
    EnableHdrContainer,
    ControlsHdrContainer,
    ProductHdrContainer,
    StockHdrContainer
} from './stock-view.styles';

const  StockView = ({stockItems, productEditHidden}) =>{
    console.log("STOCK_ITEMS:", stockItems);
    return(
    <StockViewContainer>
        <h2>STOCK</h2>
        <StockHdrTableContainer>
            <ProductHdrContainer>Producto</ProductHdrContainer>
            <StockHdrContainer>Stock</StockHdrContainer>
            <StockHdrContainer>Minimo</StockHdrContainer>
            <StockHdrContainer>Critico</StockHdrContainer>
            <EnableHdrContainer>AutoStop</EnableHdrContainer>
            <EnableHdrContainer>Habilitado</EnableHdrContainer>
            <ControlsHdrContainer>Editar/Borrar</ControlsHdrContainer>
        </StockHdrTableContainer>
        <StockTableContainer>
        {
            stockItems.map(s => {
                console.log(s)
                return(<StockLine key={s.id} stockItem={s}/>)
            })
        }
        </StockTableContainer>
        {
            !productEditHidden ? <AddOrUpdateProduct/> : null
        }

    </StockViewContainer>
)}

const mapStateToProps = createStructuredSelector({
    stockItems: selectShopCollectionsSortByCategory,
    productEditHidden: selectProductEditHidden
});

export default connect(mapStateToProps)(StockView);