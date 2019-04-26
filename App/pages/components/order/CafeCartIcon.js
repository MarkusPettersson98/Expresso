import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import OrderCartIconCounter from './OrderCartIconCounter';
import {
    calculateCartPrice,
    calculateCartAmount,
} from '../redux/cartFunctions';

const CafeCartIcon = ({ cart }) => {
    const total = calculateCartPrice(cart);
    const amount = calculateCartAmount(cart);

    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'flex-end',
            }}
        >
            <OrderCartIconCounter cartAmount={amount} />
            <Text style={styles.cartPriceText}>{`${total} kr`}</Text>
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
});

export default CafeCartIcon;
