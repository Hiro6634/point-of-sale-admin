import React from 'react';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import ProductView from '../../components/product-view/product-view.component';

import { 
    firestore,
    convertProductsSnapshotToMap,
} from '../../firebase/firebase.utils';

import { updateProducts } from '../../redux/shop/shop.actions';
import { connect } from 'react-redux';

import { 
    HomePageContainer 
} from './homepage.styles';

const ProductViewWithSpinner = WithSpinner(ProductView);


class Homepage extends React.Component {

    state = {
        loading: true,
    }

    unsubscribeFromSnapshot = null;

    componentDidMount(){
        const {
            updateProducts, 
        } = this.props;

        const productsRef = firestore.collection('products');

        productsRef.onSnapshot( async snapshot =>{
            const productsMap = await convertProductsSnapshotToMap(snapshot);
            
            updateProducts(productsMap);

            this.setState({
                ...this.state,
                loading: false
            });
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
    updateProducts: productsMap => dispatch(updateProducts(productsMap))
});

export default connect(null, mapDispatchToProps)(Homepage);
