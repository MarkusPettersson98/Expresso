import { calculateCartPrice } from '../../redux/cartFunctions';
import {
    brygg_kaffe,
    cappuccino,
    brygg_kaffe_in_cart,
    two_brygg_kaffe_in_cart,
	two_brygg_kaffe_one_cappuchino_in_cart,
	one_brygg_kaffe_one_cappuchino_in_cart,

} from '../../dummy-data';

test('if empty cart, total should be 0', () => {
	expect(calculateCartPrice({})).toEqual(0);
})

test('if cart with 1 (one) item price should be the total of that item', () => {
	expect(calculateCartPrice(brygg_kaffe_in_cart)).toEqual(brygg_kaffe.price);
})

test('if cart with 2 (two) of same item, price should be equal to 2* that items price', () => {
	expect(calculateCartPrice(two_brygg_kaffe_in_cart)).toEqual(brygg_kaffe.price * 2);
})

test('if cart with 2 (two) of different items, with the amount 1 (one) of each, price should be the sum of those prices', () => {
	expect(calculateCartPrice(one_brygg_kaffe_one_cappuchino_in_cart)).toEqual(brygg_kaffe.price + cappuccino.price);
})

test('if cart with 2 (two) of different items, with varying amount, the price should be adjusted accordingly', () => {
	expect(calculateCartPrice(two_brygg_kaffe_one_cappuchino_in_cart)).toEqual(2*brygg_kaffe.price + cappuccino.price);
})
