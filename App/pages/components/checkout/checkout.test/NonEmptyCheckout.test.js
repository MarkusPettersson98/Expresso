import { getTotalOrder } from '../NonEmptyCheckout';
import {
    brygg_kaffe,
    cappuccino,
    brygg_kaffe_in_cart,
    two_brygg_kaffe_in_cart,
    two_brygg_kaffe_one_cappuchino_in_cart,
} from '../../redux/redux.test/dummy-data';

// curreuntly getting errors because of usage of stylesheet, cant wrap head around
// how to fix, will reaturn.

test('if empty cart, total should be 0', () => {
	expect(getTotalOrder({})).toEqual(0);
})