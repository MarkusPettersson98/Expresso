export const brewed_coffee = {
    name: "Brewed Coffee",
    price: 12,
    volume: 330,
    id: 123,
}

export const cappuccino = {
    name: "Cappuccino",
    price: 28,
    volume: 500,
    id: 124,
}

export const latte = {
    name: "Caffee Latte",
    price: 28,
    volume: 500,
    id: 125,
}



export const biblioteket = {
    name: 'Biblioteket',
    picture: require('../pages/components/resources/biblan.jpg'),
    coordinates:
    {
        latitude: 57.690382,
        longitude: 11.978556,
    },
    drinkList: {
        brewed_coffee,
        latte,
        cappuccino,

    },

}

export const bulten = {

    name: 'Bulten',
    picture: require('../pages/components/resources/bulten.jpg'),
    coordinates:
    {
        latitude: 57.689008,
        longitude: 11.978538,
    },
    drinkList: {
        brewed_coffee,
        cappuccino,
        latte,
    },
}

export const linsen = {

    name: 'Linsen',
    picture: require('../pages/components/resources/linsen.jpg'),
    coordinates:
    {
        latitude: 57.687962,
        longitude: 11.978813,
    },
    drinkList: {
        brewed_coffee,
        cappuccino,
        latte,
    },
}

export const veras_cafe = {

    name: 'Veras Café',
    picture: require('../pages/components/resources/vera.jpg'),
    coordinates:
    {
        latitude: 57.693158,
        longitude: 11.975036,
    },
    drinkList: {
        brewed_coffee,
        cappuccino,
        latte,
    },
}

export const wijkanders = {

    name: 'Wijkanders',
    picture: require('../pages/components/resources/wijkanders.jpg'),
    coordinates:
    {
        latitude: 57.692538,
        longitude: 11.97539,
    },
    drinkList: {
        brewed_coffee,
        latte,
    },
}


export const shops = [
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

export const coffeeSorts = [
    {
        ...brewed_coffee
    },
    {
        ...cappuccino
    },
    {
        ...latte
    },
]

export default allData = {
    shops: shops,
    coffeeSorts: coffeeSorts,
}

