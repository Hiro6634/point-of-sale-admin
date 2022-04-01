import styled, {css}  from 'styled-components';

export const ProductViewLineContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    ${'' /* padding: 25px 20px;  */}
`;

export const CategoryContainer = styled.span`
    width: 30%;
    text-align:left;
`;

export const NameContainer = styled.span`
    width: 30%;
    text-align:left;
`;

export const PriceContainer = styled.span`
    width: 10%;
    text-align:right;
`;

export const EnableContainer = styled.span`
    width: 10%;
    text-align:right;
    cursor: pointer;    
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
    alig-text: center;

    ${getIconStyles}
`;
