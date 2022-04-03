import React from 'react';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import ProductView from '../../components/product-view/product-view.component';

import { 
    firestore,
    convertCategorySnapshotToMap, 
    convertProductsSnapshotToMap,
    convertStockSnapshotToMap
} from '../../firebase/firebase.utils';

import { updateProducts } from '../../redux/shop/shop.actions';
import { connect } from 'react-redux';

import { 
    HomePageContainer 
} from './homepage.styles';
import { updateCategories } from '../../redux/category/category.actions';
import { addItemToStock, updateStock } from '../../redux/stock/stock.actions';
import { createStructuredSelector } from 'reselect';
import { selectShopCollections } from '../../redux/shop/shop.selectors';
import { selectStockItems } from '../../redux/stock/stock.selectors';

const ProductViewWithSpinner = WithSpinner(ProductView);


class Homepage extends React.Component {

    state = {
        loading: true,
        productsUpdated: false,
        categoriesUpdated: false,
        stockUpdated: false
    }

    unsubscribeFromSnapshot = null;

    updateStock(){
        const {productItems, stockItems, addItemToStock} = this.props;

        console.log("UPDATING STOCK");  
        var added = false;
        const stockKey = stockItems.reduce( (acc, s) => {
            acc.push(s.id.toLowerCase())
            return acc;
        },[]);

        const arraySearch = (arr, key) => {
            const searchT = key.toLowerCase();
            return arr.filter( value => {
                return value.toLowerCase() === searchT;
            });
        };
        
        productItems.map(p => {
            if( arraySearch(stockKey, p.name).length === 0){
                console.log("INSERT: " + p.name);
                added = true;
                addItemToStock({
                    id: p.name.toLowerCase()
                });
            }
        });

        if(added){
            console.log("Calling Backend");
        }
    }

    
    componentDidMount(){
        const {
            updateProducts, 
            updateCategories,
            updateStock
        } = this.props;

//        const productsRef = firestore.collection('collections');
        const productsRef = firestore.collection('products');
        const categoriesRef = firestore.collection('categories');
        const stockRef = firestore.collection('stock');

        stockRef.onSnapshot( async snapshot => {
            const stockMap = await convertStockSnapshotToMap(snapshot);
            
            console.log("StockMAP:", stockMap);
            updateStock(stockMap);

            this.setState({
                ...this.state,
                stockUpdated: true
            });

            if( this.state.categoriesUpdated && 
                this.state.productsUpdated){
                    this.setState({
                        ...this.state,
                        loading: false
                    });
                    console.log("STOCK Passed...");
                    this.updateStock();
                }
        });

        productsRef.onSnapshot( async snapshot =>{
            const productsMap = await convertProductsSnapshotToMap(snapshot);
            
            updateProducts(productsMap);

            this.setState({
                ...this.state,
                productsUpdated: true
            });

            if( this.state.categoriesUpdated &&
                this.state.stockUpdated ){
                this.setState({ 
                    ...this.state,
                    loading: false
                });
                console.log("PRODUCT Passed...");
                this.updateStock();
            }
        });

        categoriesRef.get().then(snapshot => {
            const categoriesMap = convertCategorySnapshotToMap(snapshot);

            updateCategories(categoriesMap);
            this.setState({
                ...this.state,
                categoriesUpdated: false
            });

            if( this.state.productsUpdated &&
                this.state.stockUpdated ){
                this.setState({ 
                    ...this.state,
                    loading: false
                });
                console.log("CATEGORIES Passed...");
                this.updateStock();
            }
        });
    }
    render(){
        return(
        <HomePageContainer>
            <ProductViewWithSpinner/>
        </HomePageContainer>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateProducts: productsMap => dispatch(updateProducts(productsMap)),
    updateCategories: categoriesMap => dispatch(updateCategories(categoriesMap)),
    updateStock: stockMap => dispatch(updateStock(stockMap)),
    addItemToStock: (stockItem) => dispatch(addItemToStock(stockItem))

});

const mapStateToProps = createStructuredSelector({
    productItems: selectShopCollections,
    stockItems: selectStockItems
});
export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
