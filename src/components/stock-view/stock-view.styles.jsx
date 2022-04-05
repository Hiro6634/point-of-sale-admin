import styled from 'styled-components';

export const StockViewContainer = styled.div`
    width:100%
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px 20px;
`;

export const StockTableContainer = styled.div`
    margin: auto;
    width: 850px;
    padding: 5px;
`;

export const StockHdrTableContainer = styled.div`
    width: 100%;
    padding-left: 50px;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    ${'' /* padding: 25px 20px;  */}
    font-weight: bold;
    border-bottom: 1px solid black;

`;

export const NameHdrContainer = styled.span`
    width: 25%;
    text-align:left;
    border: 0px solid black;
`;

export const StockHdrContainer = styled.span`
    width: 10%;
    text-align: center;
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
