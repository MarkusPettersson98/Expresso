const shops = [
    {
        name: 'Biblioteket',
        picture: require('./resources/biblan.jpg'),
        coordinates: {
            latitude: 57.690382,
            longitude: 11.978556,
        },
    },
    {
        name: 'Bulten',
        picture: require('./resources/bulten.jpg'),
        coordinates: {
            latitude: 57.689008,
            longitude: 11.978538,
        },
    },
    {
        name: 'Linsen',
        picture: require('./resources/linsen.jpg'),
        coordinates: {
            latitude: 57.687962,
            longitude: 11.978813,
        },
    },
    {
        name: 'Veras Café',
        picture: require('./resources/vera.jpg'),
        coordinates: {
            latitude: 57.693158,
            longitude: 11.975036,
        },
    },
    {
        name: 'Wijkanders',
        picture: require('./resources/wijkanders.jpg'),
        coordinates: {
            latitude: 57.692538,
            longitude: 11.97539,
        },
    },
];

export const myCart = true;

export const brygg_kaffe = {
  name: "Bryggkaffe",
  price: 12,
  volume: 330,
  id: 123
}

export const cappuccino = {
  name: "Cappuccino",
  price: 28,
  volume: 500,
  id: 124
}

export const latte = {
  name: "Caffee Latte",
  price: 28,
  volume: 500,
  id: 125
}

export default shops;
