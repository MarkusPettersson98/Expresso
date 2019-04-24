import allData from './dummy-data';

export const getAllShopNames = () => {
    /*
      Returns the names of all the avaiable shops 
    */
    const nameMap = ( shop ) => 
    {
        return shop.name 
    }
    return  allData.shops.map(nameMap) ;
};

export const getAllShopInfo = () => {
/*  
    Returns the coordinates (longitude and latitude) and the name of all the avaiable shops
*/
    const shopMap = ( info ) => 
    {
        return {
            namn: info.name,
            coordinates: info.coordinates
        }
    }  
     return allData.shops.map(shopMap); 
}; 

 //Kanske onödig att ha med (?)
 export const getCoffeeInfo = (wantedCoffee) => {

    //Returns all the info about a specific coffeesort 

    const foundCoffee = allData.coffeeSorts.find(function( coffee ){
        return coffee.name == wantedCoffee; 
     }); 
    return foundCoffee; 
};

export const getAllCoffeeFromAShop = ( wantedShop ) => {
/* 
    Returns all the coffesorts in a specific shop 
*/

    const foundShop = allData.shops.find(function( shop ){
        return shop.name == wantedShop; 
     }); 

     console.log('foundshop',foundShop);

    return foundShop.drinkList; 
}; 

