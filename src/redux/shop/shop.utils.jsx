import { addOrUpdateProduct, removeProduct } from '../../firebase/firebase.utils';

export const addProduct = (products, productToAdd) => {
    const existingProducts = products.find(
        product => product.id === productToAdd.id
    );

    if(!existingProducts){
        return 
    }
}

export const toggleProductState = (products, product) => {
    product.enable = !product.enable;
    addOrUpdateProduct(product);
    return { ...products };
}

export const deleteProduct = (products, productToDelete) =>{
    removeProduct(productToDelete);     
    return {...products };    
} 