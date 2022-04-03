import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { addOrUpdateProduct } from '../../firebase/firebase.utils';
import { toggleProductEditHidden } from '../../redux/product/product.actions';
import { selectProduct } from '../../redux/product/product.selectors';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { 
    AddProductContainer,
    ButtonContainer
} from './add-or-update-product.styles';

class AddOrUpdateProduct extends React.Component {
    constructor(props){
        super(props);
        
        const {product} = this.props;
        const id = product ? product.id : null;
        const category = product ? product.category : '';
        const name = product ? product.name : '';
        const price = product ? product.price : 0;
        const enable = product ? product.enable : false;

        this.state = {
            id: id,
            category: category,
            name: name,
            price: price,
            enable: enable,
            disabled: false
        };
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value});
    }

    updateProducts = async () => {
        const {id, category, name, price, enable, stock, warninglevel, stoplevel, enablestop } = this.state;

        const product = { 
            id: id,
            category: category, 
            name: name, 
            price: price, 
            enable: enable,
            stock: stock,
            warninglevel: warninglevel,
            stoplevel: stoplevel,
            enablestop: enablestop
        };
        console.log("ADD", product)
        await addOrUpdateProduct(product);
    }

    render(){
        const {toggleProductEditHidden} = this.props;
        const { category, name, price, enable, stock, warninglevel, stoplevel, enablestop } = this.state;

        return(
            <AddProductContainer>
                <h2>Producto</h2>
                <form onSubmit={this.handleOnSubmit}>
                    <FormInput 
                        name="category"
                        label="Categoria"
                        type="text"
                        value={category}
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput 
                        name="name"
                        label="Nombre"
                        type="text"
                        value={name}
                        handleChange={this.handleChange}
                        required
                    />

                    <FormInput 
                        name="price"
                        label="Precio"
                        type="number"
                        value={price}
                        handleChange={this.handleChange}
                        required
                    />

                    <FormInput 
                        name="stock"
                        label="Stock"
                        type="number"
                        value={stock?stock:0}
                        handleChange={this.handleChange}
                        required
                    />
{/*                    <FormInput 
                        name="stock"
                        label="Stock"
                        type="number"
                        value={stock}
                        handleChange={this.handleChange}
                        required
                    />

                    <FormInput 
                        name="wraninglevel"
                        label="Warning"
                        type="number"
                        value={warninglevel}
                        handleChange={this.handleChange}
                    />

                    <FormInput 
                        name="stoplevel"
                        label="Stop"
                        type="number"
                        value={stoplevel}
                        handleChange={this.handleChange}
                    />

                    <div>
                        <label>STOP</label>
                        <input 
                        type="checkbox" 
                        name="enablestop" 
                        defaultChecked={enablestop} 
                        onClick={()=>{
                            this.setState({
                                ...this.state,
                                enablestop: !enablestop
                            })
                        }}/>
                    </div>
 */}                    <div>
                        <label>HABILITADO</label>
                        <input 
                        type="checkbox" 
                        name="enable" 
                        defaultChecked={enable} 
                        onClick={()=>{
                            this.setState({
                                ...this.state,
                                enable: !enable
                            })
                        }}/>
                    </div>
                    <ButtonContainer>
                        <CustomButton 
                            type="button" 
                            onClick={ () => {
                                toggleProductEditHidden();
                            }
                        }>CANCELAR</CustomButton>
                        <CustomButton 
                            type="button" 
                            onClick={()=>{
                                if(this.state.disabled){
                                    return;
                                }
                                this.setState({
                                    ...this.state,
                                    disabled: true
                                });
                                this.updateProducts();
                                this.props.toggleProductEditHidden()
                            }
                        }>ACEPTAR</CustomButton>
                    </ButtonContainer>
                </form>
            </AddProductContainer>
        )
    }
};

const mapDispatchToProps = dispatch => ({
    toggleProductEditHidden: () => dispatch(toggleProductEditHidden()),
});

const mapStateToProps = createStructuredSelector({
    product: selectProduct
});

export default connect(
    mapStateToProps, 
    mapDispatchToProps
    )(AddOrUpdateProduct);