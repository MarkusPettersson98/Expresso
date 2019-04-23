import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

import OrderCartIcon from './OrderCartIcon';

const OrderFooter = (props) => {
    return (
        <View style={styles.footer}>
            <OrderCartIcon cartAmount={10} />
            <TouchableOpacity
                onPress={() => props.navigationProps.navigate('Checkout')}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 40,
        backgroundColor: 'brown',
        maxHeight: 80,
    },
    cartIcon: {
        height: 50,
        justifyContent: 'center',
        borderColor: '#F0F7F4',
        backgroundColor: 'black',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white',
    },
});

export default OrderFooter;