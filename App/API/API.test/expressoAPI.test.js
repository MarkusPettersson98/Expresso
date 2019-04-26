import { getAllShopInfo, getAllShopNames, getShop, getAllCoffeeFromAShop } from '../expressoAPI';

describe('Testing if getAllShopInfo outputs all the shop info about all the shops', () => {

  it('Should output the coordinates and names of all the avaible shops', () => {

    expect(getAllShopInfo()).toEqual([
      {
        "coordinates": {
          "latitude": 57.690382,
          "longitude": 11.978556,
        },
        "namn": "Biblioteket",
      },
      {
        "coordinates": {
          "latitude": 57.689008,
          "longitude": 11.978538,
        },
        "namn": "Bulten",
      },
      {
        "coordinates": {
          "latitude": 57.687962,
          "longitude": 11.978813,
        },
        "namn": "Linsen",
      },
      {
        "coordinates": {
          "latitude": 57.693158,
          "longitude": 11.975036,
        },
        "namn": "Veras Café",
      },
      {
        "coordinates": {
          "latitude": 57.692538,
          "longitude": 11.97539,
        },
        "namn": "Wijkanders",
      },
    ])
  })
})


describe('Testing if getAllShopNames output all the names', () => {

  it('Should output only the names of all the avaible shops', () => {

    expect(getAllShopNames()).toEqual([
      "Biblioteket",
      "Bulten",
      "Linsen",
      "Veras Café",
      "Wijkanders",
    ])
  })
});


describe('Testing if all the coffeesorts from a shop is printed out ', () => {

  it('Should print out the drinkList for a shop i.e. all the avaible coffee from a specific shop', () => {

    expect(getAllCoffeeFromAShop('Bulten')).toEqual({
      "brewed_coffee": {
        "id": 123,
        "name": "Brewed Coffee",
        "price": 12,
        "volume": 330,
      },
      "cappuccino": {
        "id": 124,
        "name": "Cappuccino",
        "price": 28,
        "volume": 500,
      },
      "latte": {
        "id": 125,
        "name": "Caffee Latte",
        "price": 28,
        "volume": 500,
      },
    })
  });

  it('Case insensitive check of above', () => {

    expect(getAllCoffeeFromAShop('buLteN')).toEqual({
      "brewed_coffee": {
        "id": 123,
        "name": "Brewed Coffee",
        "price": 12,
        "volume": 330,
      },
      "cappuccino": {
        "id": 124,
        "name": "Cappuccino",
        "price": 28,
        "volume": 500,
      },
      "latte": {
        "id": 125,
        "name": "Caffee Latte",
        "price": 28,
        "volume": 500,
      },
    })
  });

  it('Checking other restaurants, list for Wijkanders expected', () => {

    expect(getAllCoffeeFromAShop('Wijkanders')).toEqual({
        "brewed_coffee": {
          "id": 123,
          "name": "Brewed Coffee",
          "price": 12,
          "volume": 330,
        },
        "latte": {
          "id": 125,
          "name": "Caffee Latte",
          "price": 28,
          "volume": 500,
        },
    })
  });

})

 
describe('Testing if getShop returns the right shop', () => {

  it('Should output Bulten store', () => {
    expect(getShop('Bulten')).toEqual({
      "coordinates": {
        "latitude": 57.689008,
        "longitude": 11.978538,
      },
      "drinkList": {
        "brewed_coffee": {
          "id": 123,
          "name": "Brewed Coffee",
          "price": 12,
          "volume": 330,
        },
        "cappuccino": {
          "id": 124,
          "name": "Cappuccino",
          "price": 28,
          "volume": 500,
        },
        "latte": {
          "id": 125,
          "name": "Caffee Latte",
          "price": 28,
          "volume": 500,
        },
      },
      "name": "Bulten",
    }

    )
  });

  it('Case sensitivity check', () => {
    expect(getShop('buLtEn')).toEqual({
      "coordinates": {
        "latitude": 57.689008,
        "longitude": 11.978538,
      },
      "drinkList": {
        "brewed_coffee": {
          "id": 123,
          "name": "Brewed Coffee",
          "price": 12,
          "volume": 330,
        },
        "cappuccino": {
          "id": 124,
          "name": "Cappuccino",
          "price": 28,
          "volume": 500,
        },
        "latte": {
          "id": 125,
          "name": "Caffee Latte",
          "price": 28,
          "volume": 500,
        },
      },
      "name": "Bulten",
    }

    )
  });


  it('Should output Wijkanders store, checking if other restaurants work too', () => {
    expect(getShop('Wijkanders')).toEqual({
      "coordinates": {
        "latitude": 57.692538,
        "longitude": 11.97539,
      },
      "drinkList": {
        "brewed_coffee": {
          "id": 123,
          "name": "Brewed Coffee",
          "price": 12,
          "volume": 330,
        },
        "latte": {
          "id": 125,
          "name": "Caffee Latte",
          "price": 28,
          "volume": 500,
        },
      },
      "name": "Wijkanders",
    }
    )
  });

}); 