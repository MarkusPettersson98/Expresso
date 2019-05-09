import React from 'react';
import { View, StyleSheet } from 'react-native';

import CafeCartIcon from './CafeCartIcon';
import CafeCheckoutButton from './CafeCheckoutButton';

/**
 * @file This is the bottom part of the order view, containing information about the current
 * order and a way to proceed to checkout. OrderFooter.js does not render any data on it's own,
 * it's just a component hosting a set of child components.
 *
 * @param cart The current cart object in redux.
 *
 */

const CafeFooter = ({ orderInfo }) => {
    return (
        <View style={styles.footer}>
            <View style={styles.footerRow}>
                <CafeCartIcon cart={orderInfo.cart} />

                <CafeCheckoutButton selectedShop={orderInfo.shop} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        flex: 1,
        backgroundColor: '#57454B',
        maxHeight: 100,
    },
    footerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white',
    },
});

export default CafeFooter;
