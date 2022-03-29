export const addProduct = (products, productToAdd) => {
    const existingProducts = products.find(
        product => product.id === productToAdd.id
    );

    if(!existingProducts){
        return 
    }
}