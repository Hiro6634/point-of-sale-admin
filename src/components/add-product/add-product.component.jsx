import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { AddProductContainer } from './add-product.styles';

class AddProduct extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            category: '',
            product: '',
            price: 0,
            enable: false
        };
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value});
    }
    
    render(){
        return(
            <AddProductContainer>
                <h2>{title}</h2>
                <form>
                    <FormInput 
                        name="category"
                        label="Categoria"
                        type="text"
                        value={this.state.category}
                        handleChange={this.handleChange}
                        required
                    />
                </form>
            </AddProductContainer>
        )
    }
};

export default AddProduct;