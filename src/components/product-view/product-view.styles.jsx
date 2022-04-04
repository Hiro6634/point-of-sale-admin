import styled  from 'styled-components';

export const ProductViewContainer = styled.div`
    width: 100%
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px 20px;

`;

export const ProductTableContainer = styled.div`
    margin: auto;
    width: 700px;
    padding: 10px;
`;

export const ProductHdrTableContainer = styled.div`
    margin: auto;
    width: 60%;
    padding: 10px;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    ${'' /* padding: 25px 20px;  */}
    font-weight: bold;
    border-bottom: 1px solid black;

`;

export const CategoryHdrContainer = styled.span`
    width: 30%;
    text-align:left;
    border: 0px solid black;
`;

export const NameHdrContainer = styled.span`
    width: 30%;
    text-align:left;
    border: 0px solid black;
`;

export const PriceHdrContainer = styled.span`
    width: 10%;
    text-align:left;
    border: 0px solid black;
`;

export const EnableHdrContainer = styled.span`
    width: 15%;
    text-align:left;
    cursor: pointer;    
    border: 0px solid black;
`;
export const ControlsHdrContainer = styled.div`
    width:20%;
    cursor: pointer;    
    border: 0px solid black;
`;
