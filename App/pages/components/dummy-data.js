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
  name: 'Bryggkaffe',
  price: 12,
  volume: 330,
  id: 123,
};

export const cappuccino = {
  name: 'Cappuccino',
  price: 28,
  volume: 500,
  id: 124,
};
export const coffee = [
  {
    id: 0,
    shop: 'Biblioteket',
    coffees: [
      {
        name: 'Bryggkaffe',
        price: 12,
        description: 'Bränt kaffe från Hubben',
        id: 123,
        shopId: 0,
      },
      {
        name: 'Kaffe',
        price: 12,
        description: 'Mellanrost från Skåne',
        id: 124,
        shopId: 0,
      },
      {
        name: 'Kokkaffe',
        price: 12,
        description: 'Mörkrost från Brasilien',
        id: 125,
        shopId: 0,
      },
    ],
  },
  {
    id: 1,
    shop: 'Bulten',
    coffees: [{
      name: 'Bryggkaffe',
      price: 12,
      description: 'Bränt kaffe från Hubben',
      id: 123,
      shopId: 1,
    }],
  },
  {
    id: 2,
    shop: 'Linsen',
    coffees: [{
      name: 'Bryggkaffe',
      price: 12,
      description: 'Bränt kaffe från Hubben',
      id: 123,
      shopId: 2,
    }],
  },
  {
    id: 3,
    shop: 'Veras Café',
    coffees: [{
      name: 'Kaffe',
      price: 12,
      description: 'Mellanrost från Skåne',
      id: 124,
      shopId: 3,
    }],
  },
  {
    id: 4,
    shop: 'Wijkanders',
    coffees: [{
      name: 'Kaffe',
      price: 12,
      description: 'Mellanrost från Skåne',
      id: 124,
      shopId: 4,
    }],
  },
];

export const latte = {
  name: 'Caffee Latte',
  price: 28,
  volume: 500,
  id: 125,
};

export const brygg_kaffe_in_cart = {
  price: 12,
  amount: 1,
  shop: '',
  orderItems: [
    {
      amount: 1,
      coffee: {
        ...brygg_kaffe,
      },
    },
  ],
};

export const two_brygg_kaffe_in_cart = {
  price: 24,
  amount: 2,
  shop: '',
  orderItems: [
    {
      amount: 2,
      coffee: {
        ...brygg_kaffe,
      },
    },
  ],
};

export const two_brygg_kaffe_one_cappuchino_in_cart = {
  price: 52,
  amount: 3,
  shop: '',
  orderItems: [
    {
      amount: 2,
      coffee: {
        ...brygg_kaffe,
      },
    },
    {
      amount: 1,
      coffee: {
        ...cappuccino,
      },
    },
  ],
};

export const one_brygg_kaffe_one_cappuchino_in_cart = {
  price: 40,
  amount: 2,
  shop: '',
  orderItems: [
    {
      amount: 1,
      coffee: {
        ...brygg_kaffe,
      },
    },
    {
      amount: 1,
      coffee: {
        ...cappuccino,
      },
    },
  ],
};

export const brygg_kaffe_ownmug_in_cart = {
  price: 10,
  amount: 1,
  shop: '',
  orderItems: [
    {
      amount: 1,
      coffee: { ...brygg_kaffe, price: 10, ownMug: true },
    },
  ],
};

export const two_brygg_kaffe_ownmug_and_borrowed_in_cart = {
  price: 22,
  amount: 2,
  shop: '',
  orderItems: [
    {
      amount: 1,
      coffee: { ...brygg_kaffe, price: 10, ownMug: true },
    },
    {
      amount: 1,
      coffee: { ...brygg_kaffe, price: 12, ownMug: false },
    },
  ],
};

export default shops;
