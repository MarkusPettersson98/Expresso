import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import OrderCartIconCounter from './OrderCartIconCounter';
import {
    calculateCartPrice,
    calculateCartAmount,
} from '../redux/cartFunctions';

/**
 * @file This is a presenetational view that shows the user the current state of the cart.
 *
 * Since cart does not have any properties containing information about the amount of coffees
 * or total price of all coffees, we need to calculate them using some functions related to
 * the state of the cart. Further reading in {@link cartFunctions.js}
 *
 * @param cart The current cart object in redux.
 *
 */

const CafeCartIcon = ({ cart }) => {
    const total = calculateCartPrice(cart);
    const amount = calculateCartAmount(cart);

    return (
        <View style={styles.cartAlignItems}>
            <OrderCartIconCounter cartAmount={amount} />
            {/*<Text style={styles.cartPriceText}>{`${total} kr`}</Text>*/}
        </View>
    );
}; 

const styles = StyleSheet.create({
    cartPriceText: {
        borderWidth: 3,
        borderColor: 'white',
        fontSize: 30,
        borderRadius: 1000,
        color: 'white',
        marginLeft: 10,
    },
    cartAlignItems: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        position: 'absolute',
    },
});

export default CafeCartIcon;
