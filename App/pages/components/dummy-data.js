export const shops = [
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
export const coffee =[
    {
        shop: 'Biblioteket',
        coffees: [
        {
            name: 'Bryggkaffe', 
            price: 12,
            description: 'Bränt kaffe från Hubben',
        },
        {
            name: 'Kaffe',
            price: 12,
            description: 'Mellanrost från Skåne',
        },
        {
            name: 'Kokkaffe', 
            price: 12,
            description: 'Mörkrost från Brasilien',
        },
        ]
    },
    {
        shop: 'Bulten',
        coffees: [{name: 'Latte', price: 10}] 
    },
    {
        shop: 'Linsen',
        coffees: [{name: 'Bryggkaffe', price: 12}] 
    },
    {
        shop: 'Vera café',
        coffees: [{name: 'Cappucino', price: 15}] 
    },    
    {
        shop: 'Wijkanders',
        coffees: [{name: 'Bryggkaffe', price: 12}] 
    },

];

export const latte = {
  name: "Caffee Latte",
  price: 28,
  volume: 500,
  id: 125
}


export const brygg_kaffe_in_cart = {
    '123': {
        amount: 1,
        coffee: {
            ...brygg_kaffe,
        },
    },
};

export const two_brygg_kaffe_in_cart = {
    '123': {
        amount: 2,
        coffee: {
            ...brygg_kaffe,
        },
    },
};

export const two_brygg_kaffe_one_cappuchino_in_cart = {
    '123': {
        amount: 2,
        coffee: {
            ...brygg_kaffe,
        },
    },
    '124': {
        amount: 1,
        coffee: {
            ...cappuccino,
        },
    },
};

export const one_brygg_kaffe_one_cappuchino_in_cart = {
    '123': {
        amount: 1,
        coffee: {
            ...brygg_kaffe,
        },
    },
    '124': {
        amount: 1,
        coffee: {
            ...cappuccino,
        },
    },
};

export default shops;

