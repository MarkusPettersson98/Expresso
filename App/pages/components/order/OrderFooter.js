import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import OrderCartIcon from './OrderCartIcon';
import OrderCheckoutButton from './OrderCheckoutButton';

const OrderFooter = (props) => {
    return (
        <View style={styles.footer}>
            <View style={{
                flexDirection: 'column',
            }}>
                <OrderCartIcon cartAmount={10} />

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