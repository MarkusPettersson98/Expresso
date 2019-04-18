import { cart } from './reducers';
import { addCoffee, incrementCoffee } from './actions';
import { brygg_kaffe } from '../dummy-data';

const brygg_kaffe_in_cart = {
	'123': {
		amount: 1,
		coffee: {
			name: 'Bryggkaffe',
			price: 12,
			volume: 330,
			id: 123,
		},
	}
};

test('add a brygg_kaffe to an empty cart', () => {
    expect(cart({}, addCoffee(brygg_kaffe))).toEqual(brygg_kaffe_in_cart)});

/* test('increment brygg_kaffe to a cart with 1 (one) brygg_kaffe in it', () => {
	expect(cart({brygg_kaffe_in_cart}, incrementCoffee(brygg_kaffe))).toEqual(
		{brygg_kaffe_in_cart}
)});*/