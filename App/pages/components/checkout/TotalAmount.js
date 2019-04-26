import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/** 
 * Residing in the checkout folder, this is the component that displays the total amount of an order aswell as 'kr' 
 * using styling.
 * 
 * @param {total} total is the price of which the component should display. 
 */
const TotalAmount = ({ total }) => {
    return (
        <View
            style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginHorizontal: '5%',
            }}
        >
            <Text style={styles.titleText}>Totalt:</Text>
            <Text style={styles.priceText}>{`${total} kr`}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    titleText: {
        fontSize: 16,
        fontWeight: '400',
        color: '#57454B',
    },
    priceText: {
        fontSize: 24,
        fontWeight: '600',
        color: '#57454B',
    },
});

export default TotalAmount;
