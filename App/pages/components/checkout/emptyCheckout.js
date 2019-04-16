import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// returns the empty checkout view
const EmptyCheckout = () => {
    return (
        <View style={styles.app}>
            <View style={styles.content}>
                <Ionicons
                    name="ios-cafe"
                    size={256}
                    color="#005073"
                    ios="ios-cafe"
                />
                <Text style={styles.text}>Du har inte beställt kaffe</Text>
            </View>
        </View>
    );
};

export default EmptyCheckout;

const styles = StyleSheet.create({
    app: {
        flex: 1,
        alignItems: 'stretch',
    },
    content: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#004068',
    },
});
