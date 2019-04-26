import allData from './dummy-data';


/**
  * Returns all the names of all the shops in the database
  * This only inlcudes the names of the shops  
  */
export const getAllShopNames = () => {

  const getName = (shop) => {
    return shop.name
  }

  return allData.shops.map(getName);
};

/**
  * Returns all the information of a all the shops in the database
  * This includes the names and the coordinates  
  */
export const getAllShopInfo = () => {

  const getInformation = (info) => {
    return {
      namn: info.name,
      coordinates: info.coordinates
    }
  }
  return allData.shops.map(getInformation);
};

/**
  * Returns all the coffesorts in a specific shop 
  * @param wantedShop  The name of the wanted shop 
  */
export const getAllCoffeeFromAShop = (wantedShop) => {


  const foundShop = allData.shops.find(function (shop) {
    return shop.name.toUpperCase() == wantedShop.toUpperCase();
  });

  return foundShop.drinkList;
};

/**
  * Returns all the information about a specific shop 
  * This includes name, coordinates and the drinkList of the shop 
  * @param wantedShop  The name of the wanted shop 
  */
export const getShop = (wantedShop) => {

  const foundShop = allData.shops.find(function (shop) {


    return shop.name.toUpperCase() == wantedShop.toUpperCase();
  }

  );

   return {
    name: foundShop.name,
    coordinates: foundShop.coordinates,
    drinkList: foundShop.drinkList,
  };
};