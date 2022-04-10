import styled, {css} from 'styled-components';

const getBackgroundColor = props => {

    if( props.disable )
        return "white";
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

export const ProductViewLineContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    background-color: ${getBackgroundColor}
`;

export const CategoryContainer = styled.span`
    width: 30%;
    text-align:left;
    border: 0px solid black;
    ${getIsEnable}
`;

export const NameContainer = styled.span`
    width: 30%;
    text-align:left;
    border: 0px solid black;
    ${getIsEnable}
`;

export const PriceContainer = styled.span`
    width: 10%;
    text-align:right;
    border: 0px solid black;
    ${getIsEnable}
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
    text-align: center;

    ${getIconStyles}
`;

