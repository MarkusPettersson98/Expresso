import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

// returns the empty checkout view
const EmptyCheckout = () => {
    return (
        <View style={styles.app}>
            <View style={styles.content}>
                <Feather name="shopping-bag" size={64} color="#57454B" />
                <Text style={styles.textTitle}>Här var det tomt.</Text>
                <Text style={styles.textDesc}>Lägg till en vara först.</Text>
            </View>
        </View>
    );
};

export default EmptyCheckout;

const styles = StyleSheet.create({
    app: {
        flex: 1
    },
    content: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    textTitle: {
        fontSize: 26,
        fontWeight: '600',
        color: '#57454B',
        marginTop: 30,
        marginBottom: 10,
    },
    textDesc: {
        fontSize: 16,
        fontWeight: '400',
        color: '#7C6A70',
    },
});
