export const addProduct = (products, productToAdd) => {
    const existingProducts = products.find(
        product => product.id === productToAdd.id
    );

    if(!existingProducts){
        return 
    }
}

export const toggleProduct = (products, productName) => {
    console.log("ARACA", products);
    console.log("ProductName:" + productName);
    console.log("A ver", products[productName]);
    
    products.map( product => {
        console.log(product.name);
    });
    /*const productToChange = products.find(
        product => product.name === productName
    );
    console.log("LA CANA");
    console.log("PRODUCT: ", productToChange);*/
}