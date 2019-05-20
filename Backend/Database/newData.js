const brewed_coffee = {
  name: "Brewed Coffee",
  price: 12,
  volume: 330,
  id: 123
};

const cappuccino = {
  name: "Cappuccino",
  price: 28,
  volume: 500,
  id: 124
};

const latte = {
  name: "Caffee Latte",
  price: 28,
  volume: 500,
  id: 125
};

const biblioteket = {
  id: 0,
  name: "Biblioteket",
  // picture: require("./resources/biblan.js"),
  coordinates: {
    latitude: 57.690382,
    longitude: 11.978556
  },
  drinkList: [
    {
      ...brewed_coffee,
      shopId: 0
    },
    {
      ...latte,
      shopId: 0
    },
    {
      ...cappuccino,
      shopId: 0
    }
  ]
};

const bulten = {
  id: 1,
  name: "Bulten",
  // picture: require("./resources/bulten.jpg"),
  coordinates: {
    latitude: 57.689008,
    longitude: 11.978538
  },
  drinkList: [
    {
      ...brewed_coffee,
      shopId: 1
    },
    {
      ...cappuccino,
      shopId: 1
    }
  ]
};

const linsen = {
  id: 2,
  name: "Linsen",
  // picture: require("./resources/linsen.jpg"),
  coordinates: {
    latitude: 57.687962,
    longitude: 11.978813
  },
  drinkList: [
    {
      ...brewed_coffee,
      shopId: 2
    },
    {
      ...latte,
      shopId: 2
    },
    {
      ...cappuccino,
      shopId: 2
    }
  ]
};

const veras_cafe = {
  id: 3,
  name: "Veras Café",
  // picture: require("./resources/vera.jpg"),
  coordinates: {
    latitude: 57.693158,
    longitude: 11.975036
  },
  drinkList: [
    {
      ...brewed_coffee,
      shopId: 3
    },
    {
      ...latte,
      shopId: 3
    },
    {
      ...cappuccino,
      shopId: 3
    }
  ]
};

const wijkanders = {
  id: 4,
  name: "Wijkanders",
  // picture: require("./resources/wijkanders.jpg"),
  coordinates: {
    latitude: 57.692538,
    longitude: 11.97539
  },
  drinkList: [
    {
      ...brewed_coffee,
      shopId: 4
    },
    {
      ...latte,
      shopId: 4
    }
  ]
};

const shops = [biblioteket, bulten, linsen, veras_cafe, wijkanders];

const coffeeSorts = [brewed_coffee, cappuccino, latte];

module.exports = {
  shops: shops,
  coffeeSorts: coffeeSorts
};
