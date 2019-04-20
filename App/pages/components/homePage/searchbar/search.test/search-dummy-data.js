/* Coffees */

export const brygg_kaffe = {
    name: "Bryggkaffe",
    price: 12,
    volume: 330,
    id: 123,
};

export const cappuccino = {
    name: "Cappuccino",
    price: 28,
    volume: 500,
    id: 124,
};

export const coffees = [
    brygg_kaffe, 
    cappuccino, 
    brygg_kaffe, 
    cappuccino,
];

/* Shops */

export const biblioteket = {
    name: 'Biblioteket',
    coordinates: {
        latitude: 57.690382,
        longitude: 11.978556,
    },
};

export const bulten = {
    name: 'Bulten',
    coordinates: {
        latitude: 57.689008,
        longitude: 11.978538,
    },
};

export const linsen = {
    name: 'Linsen',
    coordinates: {
        latitude: 57.687962,
        longitude: 11.978813,
    },
};

export const shops = [
    biblioteket,
    bulten,
    linsen,
];