import styled  from 'styled-components';

export const ProductViewLineContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    ${'' /* padding: 25px 20px;  */}
`;

export const CategoryContainer = styled.span`
    width: 20%
    align:left;
`;

export const NameContainer = styled.span`
    width: 20%
    align:left;
`;

export const PriceContainer = styled.span`
    width: 10%
    align:right;
`;

export const EnableContainer = styled.span`
    width: 10%
    align:right;
`;
