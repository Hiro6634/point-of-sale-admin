import React, { useMemo, useState, useEffect } from 'react';
import Table from '../../components/table/table.component';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {  selectShopCollectionsSortByCategory } from '../../redux/shop/shop.selectors';

const getDataFromCollection = collections => {
  console.log("COLLECTIONS", collections);
  const transformedCollection = collections.map ( item => {
    const enable = item.enable ? "V": "F";
    const categoria = item.category.toUpperCase();
    return {
      categoria: categoria,
      producto: item.name,
      precio: item.price,
      stock: 0,
      enable: enable
    };
  });

  return transformedCollection.reduce((accumulator, collection)=>{
    accumulator.push(collection);
    return accumulator
  },[]);
};

const doSomethigToRow = (row)  => {
  console.log("Row Selected: ", row['producto']);

}

const TestTablePage = ({collections}) => {
    const data = useMemo( () => getDataFromCollection(collections));

    const columns = useMemo(
        () => [
          {
            Header: "Categoria",
            accessor: "categoria"
          },
          {
            Header: "Producto",
            accessor: "producto"
          },
          {
            Header: "Precio",
            accessor: "precio"
          },
          {
            Header: "Stock",
            accessor: "stock"
          },
          {
            Header: "En Venta",
            accessor: "enable",
            Cell: ({value, column, row}) => { return(<div onClick={()=>doSomethigToRow(row.original)}>{value}</div>)}
          }
    ],
    []
);

const TableContainer = styled.div`
    margin: auto;
    width: 60%;
    padding: 10px;
`;

    return(
    <TableContainer>
        <Table columns={columns} data={data} />
    </TableContainer>
    );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsSortByCategory
});

export default connect(mapStateToProps)( TestTablePage);