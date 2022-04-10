import styled, {css} from 'styled-components';

const getBackgroundColor = props => {
    if(props.disabled){
        return 'white';
    }
    if(props.isWarning ){
        return 'Red';
    }
    return  props.backgroundcolor ? props.backgroundcolor :"white";
}

const getIsEnable = props => {
    if(props.disable){
        return textDisbleStyle;
    }
}

const textDisbleStyle = css`
    text-decoration: line-through;
    text-decoration-thickness: 3px;  
`;


export const StockLineContainer = styled.div`
    width:100%;
    display: flex;
    justify-content: flex-start;
    ${'' /* background-color: ${getBackgroundColor}; */}
    ${getIsEnable}
 `;

export const ProductContainer = styled.span`
    width: 25%;
    text-align: left;
    border: 0px solid black;
    text-transform: uppercase;
`;

export const StockContainer = styled.span`
    width: 10%;
    text-align: right;
    border: 0px solid black;
`;

export const AutostopContainer = styled.span`
    width: 15%;
    text-align: center;
    border: 0px solid black;
`;
export const EnableContainer = styled.div`
    display: flex;
    width: 15%;
    cursor: pointer;    
    justify-content: space-around;
    border: 0px solid black;
`;

export const ControlsContainer = styled.div`
    width:20%;
    display: flex;
    justify-content: space-around;

    cursor: pointer;    
    border: 0px solid black;
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
    height: 20px;
    padding: 0px 20px;
    text-align: center;

    ${getIconStyles}
`;


