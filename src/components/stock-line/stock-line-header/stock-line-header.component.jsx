import React from 'react';

import { 
    StockLineContainer,
    ProductHdrContainer,
    StockHdrContainer,
    WarningHdrContainer,
    AutostopHdrContainer,
    EnableHdrContainer
} from '../stock-line.styles';

const StockLineHeader = () => (
    <StockLineContainer>
        <ProductHdrContainer>Producto</ProductHdrContainer>
        <StockHdrContainer>Stock</StockHdrContainer>
        <WarningHdrContainer>Atencion</WarningHdrContainer>
        <AutostopHdrContainer>Autostop</AutostopHdrContainer>
        <EnableHdrContainer>Habilitado</EnableHdrContainer>
    </StockLineContainer>
);

export default StockLineHeader;