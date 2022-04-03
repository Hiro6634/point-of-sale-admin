export const addItemToStock = (stockItems, stockItemToAdd) => {
    const existingStockItem = stockItems.find(
        stockItem => stockItem.id === stockItemToAdd.id
    );

    if( !existingStockItem){
        return[...stockItems,
        {...stockItemToAdd}]
    }
    return {...stockItems};
}

export const saveStockItems = ( stockItems ) => {
    
    return [...stockItems];
}

