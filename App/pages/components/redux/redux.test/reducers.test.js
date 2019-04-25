import { cart } from '../reducers';
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
} from '../../dummy-data';

test('add 1 (one) brygg_kaffe to an empty cart', () => {
    expect(cart({}, addCoffee(brygg_kaffe))).toEqual(brygg_kaffe_in_cart);
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
            '123': {
                amount: 1,
                coffee: { ...brygg_kaffe },
            },
        },
    );
});

test('add 1 (one) cappuchino to a cart with 1 (one) brygg_kaffe in it', () => {
    expect(cart(brygg_kaffe_in_cart, addCoffee(cappuccino))).toEqual({
        '123': {
            amount: 1,
            coffee: { ...brygg_kaffe },
        },
        '124': {
            amount: 1,
            coffee: { ...cappuccino },
        },
    });
});

test('decrement 1 (one) cappuchino from a cart with 2 (two) brygg_kaffe and 1 (one) cappuchino in it', () => {
    expect(
        cart(
            two_brygg_kaffe_one_cappuchino_in_cart,
            decrementCoffee(cappuccino),
        ),
    ).toEqual({
        '123': {
            amount: 2,
            coffee: { ...brygg_kaffe },
        },
    });
});

test('decrement brygg_kaffe from a cart with 2 (two) brygg_kaffe and 1 (one) cappuchino in it', () => {
    expect(
        cart(
            two_brygg_kaffe_one_cappuchino_in_cart,
            decrementCoffee(brygg_kaffe),
        ),
    ).toEqual({
        '123': {
            amount: 1,
            coffee: { ...brygg_kaffe },
        },
        '124': {
            amount: 1,
            coffee: { ...cappuccino },
        },
    });
});

test('clear cart with 2 (two) brygg_kaffe and 1 (one) cappuchino in it', () => {
    expect(cart(two_brygg_kaffe_one_cappuchino_in_cart, clearCart())).toEqual(
        {},
    );
});
test('clear cart of a empty cart', () => {
    expect(cart({}, clearCart())).toEqual({});
});
