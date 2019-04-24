import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const OrderCheckoutButton = () => {
    const clickAction = () =>
        console.log('OrderCheckoutButton: Klickade på betala');

    return (
        <View style={styles.OrderButton}>
            <TouchableOpacity
                onPress={clickAction}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
                <Text style={styles.OrderButtonText}>BETALA ></Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    OrderButton: {
        marginRight: 25,
        marginTop: 25,
        color: 'white',
    },
    OrderButtonText: {
        fontWeight: '500',
        letterSpacing: 2,
        fontSize: 20,
        color: 'white',
    },
});

export default OrderCheckoutButton;
