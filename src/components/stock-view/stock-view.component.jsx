import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopCollectionsSortByCategory} from '../../redux/shop/shop.selectors';
import StockLineRow from '../../components/stock-line/stock-line-row/stock-line-row.component';
import { 
    StockViewContainer,
    StockTableContainer
} from './stock-view.styles';

const  StockView = ({stockItems}) =>{
    console.log("STOCK_ITEMS:", stockItems);
    return(
    <StockViewContainer>
        <h2>STOCK</h2>
        {/* <StockLineHeader/> */}
        
        <StockTableContainer>
        {
            stockItems.map(s => {
                console.log(s)
                return(<StockLineRow key={s.id} stockItem={s}/>)
            })
        }
        </StockTableContainer>
    </StockViewContainer>
)}

const mapStateToProps = createStructuredSelector({
    stockItems: selectShopCollectionsSortByCategory
});

export default connect(mapStateToProps)(StockView);