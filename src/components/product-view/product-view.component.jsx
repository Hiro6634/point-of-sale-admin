import React, {useMemo} from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopCollectionsSortByCategory } from '../../redux/shop/shop.selectors';
import Table from '../table/table.component';
import CustomButton from '../custom-button/custom-button.component';
import { toggleProduct } from '../../redux/shop/shop.actions';
import { 
    ProductViewContainer,
    ProductTableContainer
 } from './product-view.styles';

 const toggleProductAvailability = (toggleProduct, row)  => {
    console.log("Row Selected: ", row);
    toggleProduct(row['producto']);
    /*const product = {
        category: 'NIHONRYORI',
        name:'KATSUDON',
        price: 300,
        enable: true
    };

    addOrUpdateProduct(product);
    console.log('DONE!');*/
  }
  
const getData = collections => {
    console.log("Produc ts:", collections);
    const transformedCollection = collections.map( item => {
        const enable = item.enable ? "V": "F";
        return {
            categoria: item.category,
            producto: item.name,
            precio: item.price,
            stock: 10,
            enable: enable
        };
    });

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator.push(collection);
        return accumulator;
    },[])
};

const ProductView = ({shopCollection, toggleProduct}) => {
    const data = useMemo(()=> getData(shopCollection));

    const columns = useMemo(
        ()=>[
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
                Cell: ({value, column, row}) => { return(<div onClick={()=>toggleProductAvailability(toggleProduct, row.original)}>{value}</div>)}
              }
            ],
            []
    );

    return(
    <ProductViewContainer>
        <h2>Product View</h2>
        <ProductTableContainer>
            <Table columns={columns} data={data}/>
        </ProductTableContainer>
        <div>
            <CustomButton type='button'  >Agregar Producto</CustomButton>
        </div>
    </ProductViewContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    toggleProduct: productName => dispatch(toggleProduct(productName))
});

const mapStateToProps = createStructuredSelector({
    shopCollection: selectShopCollectionsSortByCategory
});
export default connect(
    mapStateToProps, 
    mapDispatchToProps)
(ProductView);