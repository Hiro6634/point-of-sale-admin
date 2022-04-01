import React from 'react';

import { 
    StockContainer,
    StockTableContainer
} from './stock-page.styles';

class StockPage extends React.Component {

    state = {
        loading: true
    }

    unsubscribeFromSnapshot = null;
    render(){
        return(
            <StockContainer>
                <h2>STOCK</h2>
                <StockTableContainer>

                </StockTableContainer>
            </StockContainer>
        );
    }
}

export default StockPage;