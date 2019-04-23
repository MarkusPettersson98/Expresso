import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const OrderCartIcon = ({ cartAmount }) => {
    return (
        <View style={{
        }}>
            <View style={styles.cartIcon}>
                <Ionicons
                    name="ios-cart"
                    size={40}
                    color={'white'} />
                <Text style={styles.cartIconText}>
                    {cartAmount ? cartAmount : 0}
                </Text>
            </View>


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

export default OrderCartIcon;
