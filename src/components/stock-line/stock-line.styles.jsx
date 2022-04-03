import styled, {css} from 'styled-components';

export const StockLineContainer = styled.div`
    width:100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const ProductContainer = styled.span`
    width: 20%;
    text-align: left;
    ${'' /* ${getIsEnable} */}
`;

export const StockContainer = styled.span`
    width: 10%;
    text-align: right;
`;

export const WarningContainer = styled.span`
    width: 10%;
    text-align: right;
`;

export const AutostopContainer = styled.span`
    width: 10%;
    text-align: right;
`;

export const ProductHdrContainer = styled.span`
    width: 20%;
    text-align: center;
`;

export const StockHdrContainer = styled.span`
    width: 10%;
    text-align: center;
`;

export const WarningHdrContainer = styled.span`
    width: 10%;
    text-align: center;
`;

export const AutostopHdrContainer = styled.span`
    width: 15%;
    text-align: center;
`;

export const EnableHdrContainer = styled.span`
    width: 5%;
    text-align: center;
`;

const iconClickeableStyles = css`
    cursor: pointer;    
    &:hover {
        background-color: lightgrey;
        border: none
    }
`;

const getIconStyles = props => {
    if(props.isClickeable){
        return iconClickeableStyles;
    }
}

export const IconContainer = styled.span`
    width:20px;
    text-align: center;

    ${getIconStyles}
`;

const textDisbleStyle = css`
    text-decoration: line-through;
`;

const getIsEnable = props => {
    if(props.disable){
        return textDisbleStyle;
    }
}



