import { cart, INITIAL_CART_STATE } from '../reducers';
import {
    addCoffee,
    incrementCoffee,
    decrementCoffee,
    clearCart,
} from '../actions';

import {
    brygg_kaffe,
    cappuccino,
    brygg_kaffe_in_cart,
    two_brygg_kaffe_in_cart,
    two_brygg_kaffe_one_cappuchino_in_cart,
    brygg_kaffe_ownmug_in_cart,
    two_brygg_kaffe_ownmug_and_borrowed_in_cart
} from '../../dummy-data';


test('add 1 (one) brygg_kaffe without OWN MUG to cart with one (1) brygg_kaffe with OWN MUG', () => {
    expect(
        cart(brygg_kaffe_ownmug_in_cart, addCoffee({...brygg_kaffe, ownMug: false}))
    ).toEqual(two_brygg_kaffe_ownmug_and_borrowed_in_cart);
});

test('add a brygg_kaffe to a cart with 1 (one) brygg_kaffe in it', () => {
    expect(cart(brygg_kaffe_in_cart, addCoffee(brygg_kaffe))).toEqual(
        two_brygg_kaffe_in_cart,
    );
});

test('increment brygg_kaffe to a cart with 1 (one) brygg_kaffe in it', () => {
    expect(cart(brygg_kaffe_in_cart, incrementCoffee(brygg_kaffe))).toEqual(
        two_brygg_kaffe_in_cart,
    );
});

test('decrement brygg_kaffe to a cart with 2 (two) brygg_kaffe in it', () => {
    expect(cart(two_brygg_kaffe_in_cart, decrementCoffee(brygg_kaffe))).toEqual(
        {
            price: 12,
            amount: 1,
            shop: '',
            orderItems: [
                {
                    amount: 1,
                    coffee: { ...brygg_kaffe },
                },
            ],
        },
    );
});

test('add 1 (one) cappuchino to a cart with 1 (one) brygg_kaffe in it', () => {
    expect(cart(brygg_kaffe_in_cart, addCoffee(cappuccino))).toEqual({
        price: 40,
        amount: 2,
        shop: '',
        orderItems: [
            {
                amount: 1,
                coffee: { ...brygg_kaffe },
            },
            {
                amount: 1,
                coffee: { ...cappuccino },
            },
        ],
    });
});

test('decrement 1 (one) cappuchino from a cart with 2 (two) brygg_kaffe and 1 (one) cappuchino in it', () => {
    expect(
        cart(
            two_brygg_kaffe_one_cappuchino_in_cart,
            decrementCoffee(cappuccino),
        ),
    ).toEqual({
        price: 24,
        amount: 2,
        shop: '',
        orderItems: [
            {
                amount: 2,
                coffee: { ...brygg_kaffe },
            },
        ],
    });
});

test('decrement brygg_kaffe from a cart with 2 (two) brygg_kaffe and 1 (one) cappuchino in it', () => {
    expect(
        cart(
            two_brygg_kaffe_one_cappuchino_in_cart,
            decrementCoffee(brygg_kaffe),
        ),
    ).toEqual({
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
    });
});

test('clear cart with 2 (two) brygg_kaffe and 1 (one) cappuchino in it', () => {
    expect(cart(two_brygg_kaffe_one_cappuchino_in_cart, clearCart())).toEqual(
        INITIAL_CART_STATE,
    );
});
test('clear cart of a empty cart', () => {
    expect(cart({}, clearCart())).toEqual(INITIAL_CART_STATE);
});
