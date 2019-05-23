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
        <View>
            <View styles={{ width: 25, height: 25 }}>
                <Ionicons name="ios-cart" size={25} color={'white'} />
            </View>
            <Text style={styles.cartIconText}>{cartAmount}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    cartIconText: {
        position: 'absolute',
        backgroundColor: '#ff4e4e',
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
