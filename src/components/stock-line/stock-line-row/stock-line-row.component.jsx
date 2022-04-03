import React from 'react';
import {ReactComponent as IconTrue} from '../../../assets/checkmark-outline.svg';
import {ReactComponent as IconFalse} from '../../../assets/close-outline.svg';
import {ReactComponent as IconEdit} from '../../../assets/create-outline.svg';

import { 
    StockLineContainer,
    ProductContainer,
    StockContainer,
    WarningContainer,
    AutostopContainer,
    IconContainer
} from '../stock-line.styles';

const StockLineRow = ({stockItem}) => (
    <StockLineContainer>
        <ProductContainer disable={stockItem.disable}>{stockItem.id}</ProductContainer>
        <StockContainer>{stockItem.stock}</StockContainer>
        <WarningContainer>{stockItem.warning}</WarningContainer>
        <IconContainer>{
            stockItem.autostop_enable?<IconTrue/>:<IconFalse/>
        }</IconContainer>
        <AutostopContainer>{stockItem.autostop}</AutostopContainer>
        <IconContainer isClickeable>{stockItem.enable?<IconTrue/>:<IconFalse/>}</IconContainer>
        <IconContainer isClickeable><IconEdit/></IconContainer>
    </StockLineContainer>
);

export default StockLineRow;