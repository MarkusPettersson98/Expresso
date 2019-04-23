import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const OrderCheckoutButton = ({ cartAmount }) => {

    const clickAction = () => console.log("Hej");

    return (

        <View
            style={styles.OrderButton}>
            <TouchableOpacity
                onPress={clickAction}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }} >
                <Text
                    style={styles.OrderButtonText}>
                    Betala >
                </Text>

            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    OrderButton: {
        alignItems: 'flex-end',
        marginRight: 30,
        marginTop: 25,
        color: 'white',
    },
    OrderButtonText: {
        borderColor: 'white',
        fontSize: 25,
        color: 'white',
    },
});

export default OrderCheckoutButton;
