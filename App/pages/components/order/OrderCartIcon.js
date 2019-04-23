import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const OrderCartIcon = props => {
    return (
        <View style={{ flexDirection: 'row', margin: 5 }}>
            <Ionicons
                name="ios-cart"
                size={30}
            />
            <View style={styles.cartIndicator}>
                <Text style={styles.cartIndicatorText}>
                    10
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cartIndicator: {
        position: 'absolute',
        left: 15,
        top: -12,
        backgroundColor: '#09CDDA',
        color: 'white',
        borderRadius: 1000,
        flex: 1,
    },
    cartIndicatorText: {
        borderWidth: 3,
        borderColor: 'white',
        fontSize: 15,
        borderRadius: 1000,
        color: 'white',
    },
});

export default OrderCartIcon;
