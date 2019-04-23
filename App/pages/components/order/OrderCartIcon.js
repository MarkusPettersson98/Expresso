import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const OrderCartIcon = ({ cartAmount }) => {
    return (
        <View style={{
            alignItems: 'flex-start',
        }}>
            <View style={styles.cartIcon}>
                <Ionicons
                    name="ios-cart"
                    size={40}
                    color={'white'}
                />
            </View>

            <View 
            style={styles.cartIconCounter}
            >
                <Text style={styles.cartIconText}>
                    {cartAmount ? cartAmount : 0}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cartIcon: {
        position: 'absolute',
        left: 10,
        top: -10,
        marginLeft: 20,
        marginTop: 30,
    },
    cartIconCounter: {
        position: 'absolute',
        left: 30,
        top: -10,
        marginLeft: 18,
        marginTop: 20,
        backgroundColor: '#5AA3B7',
        color: 'white',
        borderRadius: 1000,
    },
    cartIconText: {
        borderWidth: 3,
        borderColor: 'white',
        fontSize: 15,
        borderRadius: 1000,
        color: 'white',
    },
});

export default OrderCartIcon;
