import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

/**
 * @file This is the cart icon along with the small circle above the cart icon.
 * This component's job is to render the current amount of items in the cart.
 *
 * @param cartAmount The total amount of items currently in cart.
 *
 */

const OrderCartIconCounter = ({ cartAmount }) => {
    return (
        <View style={styles.cartIcon}>
            <Ionicons name="ios-cart" size={40} color={'white'} />
            <Text style={styles.cartIconText}>{cartAmount}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    cartIcon: {
        marginTop: 20,
        marginLeft: 20,
    },
    cartIconText: {
        position: 'absolute',
        backgroundColor: '#5AA3B7',
        overflow: 'hidden',
        fontSize: 15,
        color: 'white',
        textAlign: 'center',
        width: 20,
        height: 20,
        lineHeight: 20,
        borderRadius: 20 / 2,
        marginLeft: 20,
        marginTop: -5,
    },
});

export default OrderCartIconCounter;
