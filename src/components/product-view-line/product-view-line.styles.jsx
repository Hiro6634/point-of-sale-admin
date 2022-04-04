import styled, {css}  from 'styled-components';

export const ProductViewLineContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    ${'' /* padding: 25px 20px;  */}
`;

export const CategoryContainer = styled.span`
    width: 30%;
    text-align:left;
    border: 0px solid black;
`;

export const NameContainer = styled.span`
    width: 30%;
    text-align:left;
    border: 0px solid black;
`;

export const PriceContainer = styled.span`
    width: 10%;
    text-align:right;
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
    text-align: center;

    ${getIconStyles}
`;

