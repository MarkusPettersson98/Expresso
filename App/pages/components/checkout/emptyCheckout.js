import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

/**
 * This view shows the emptycart-icon and text, perhaps this view could benefit from recommending the customer a purchase
 * that s/he has done before.
 * This view does not have navigation, the navigation lies within the header folder.
 */
const EmptyCheckout = () => {
    return (
        <View style={styles.app}>
            <View style={styles.content}>
                <View style={{ width: 96, height: 96 }}>
                    <Feather name="shopping-bag" size={96} color="#57454B" />
                </View>
                <Text style={styles.textTitle}>Här var det tomt.</Text>
                <Text style={styles.textDesc}>Lägg till en vara först.</Text>
            </View>
        </View>
    );
};

export default EmptyCheckout;

const styles = StyleSheet.create({
    app: {
        flex: 1,
    },
    content: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        width: '100%',
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
