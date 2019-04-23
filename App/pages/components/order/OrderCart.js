import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import OrderCartIcon from './OrderCartIcon';

const OrderCart = ({ cart }) => {

    return (

        <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-end',
        }}>
            <OrderCartIcon cartAmount={cart.amount} />
            <Text style={styles.cartPriceText}>
              {`${cart.total} kr`}
            </Text>
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

export default OrderCart;
