import React from 'react';
import { View, StyleSheet } from 'react-native';

import OrderCart from './OrderCart';
import OrderCheckoutButton from './OrderCheckoutButton';

const OrderFooter = ({ cart }) => {

    return (
        <View style={styles.footer}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <OrderCart cart={cart} />

                <OrderCheckoutButton />
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
    text: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white',
    },
});

export default OrderFooter;