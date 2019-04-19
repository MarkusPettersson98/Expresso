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