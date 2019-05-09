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
    name: "Biblioteket",
    // picture: require("./resources/biblan.js"),
    coordinates: {
        latitude: 57.690382,
        longitude: 11.978556
    },
    drinkList: [brewed_coffee, latte, cappuccino]
};

const bulten = {
    name: "Bulten",
    // picture: require("./resources/bulten.jpg"),
    coordinates: {
        latitude: 57.689008,
        longitude: 11.978538
    },
    drinkList: [brewed_coffee, cappuccino]
};

const linsen = {
    name: "Linsen",
    // picture: require("./resources/linsen.jpg"),
    coordinates: {
        latitude: 57.687962,
        longitude: 11.978813
    },
    drinkList: [brewed_coffee, cappuccino, latte]
};

const veras_cafe = {
    name: "Veras Café",
    // picture: require("./resources/vera.jpg"),
    coordinates: {
        latitude: 57.693158,
        longitude: 11.975036
    },
    drinkList: [brewed_coffee, cappuccino, latte]
};

const wijkanders = {
    name: "Wijkanders",
    // picture: require("./resources/wijkanders.jpg"),
    coordinates: {
        latitude: 57.692538,
        longitude: 11.97539
    },
    drinkList: [brewed_coffee, latte]
};


const shops = [
    {
        ...biblioteket
    },
    {
        ...bulten
    },
    {
        ...linsen
    },
    {
        ...veras_cafe
    },
    {
        ...wijkanders
    },
];

const coffeeSorts = [
    {
        ...brewed_coffee
    },
    {
        ...cappuccino
    },
    {
        ...latte
    }
];

module.exports = {
    shops: shops,
    coffeeSorts: coffeeSorts
};
