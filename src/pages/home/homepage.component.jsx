import React from 'react';
import { convertCategorySnapshotToMap, firestore } from '../../firebase/firebase.utils';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import ProductView from '../../components/product-view/product-view.component';

import { convertProductsSnapshotToMap } from '../../firebase/firebase.utils';
import { updateProducts } from '../../redux/shop/shop.actions';
import { connect } from 'react-redux';

import { 
    HomePageContainer 
} from './homepage.styles';
import { updateCategories } from '../../redux/category/category.actions';
import { createStructuredSelector } from 'reselect';
import { selectCartTotal } from '../../redux/cart/cart.selectors';

const ProductViewWithSpinner = WithSpinner(ProductView);


class Homepage extends React.Component {

    state = {
        loading: true,
        productsUpdated: false,
        categoriesUpdated: false
    }

    unsubscribeFromSnapshot = null;

    componentDidMount(){
        const {updateProducts, updateCategories} = this.props;
        const collectionRef = firestore.collection('collections');
        const categoriesRef = firestore.collection('categories');


        collectionRef.get().then(snapshot => {
            const productsMap = convertProductsSnapshotToMap(snapshot);
            updateProducts(productsMap);
            this.setState({
                ...this.state,
                productsUpdated: true
            });

            if( this.state.categoriesUpdated ){
                this.setState({ 
                    ...this.state,
                    loading: false
                });
            }
        });

        categoriesRef.get().then(snapshot => {
            const categoriesMap = convertCategorySnapshotToMap(snapshot);

            updateCategories(categoriesMap);
            this.setState({
                ...this.state,
                categoriesUpdated: false
            });

            if( this.state.productsUpdated ){
                this.setState({ 
                    ...this.state,
                    loading: false
                });
            }
        });
    }
    render(){
        const { loading } = this.state;
        const {total} = this.props;

        return(
        <HomePageContainer>
            <ProductViewWithSpinner/>
        </HomePageContainer>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateProducts: productsMap => dispatch(updateProducts(productsMap)),
    updateCategories: categoriesMap => dispatch(updateCategories(categoriesMap))
});

const mapStateToProps = createStructuredSelector({
    total: selectCartTotal
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
