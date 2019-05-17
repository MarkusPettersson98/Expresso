import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Data from './dummy-receipt';

class componentName extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.rubrik}>
                    Det här är ditt kvitto för din beställning!
                </Text>
                <View style={styles.infoBox}>
                    <Text style={styles.text}>
                        {Data.receipt.coffees[0].coffee[0].name}:
                        {Data.receipt.coffees[0].amount} {'\n'}
                    </Text>
                    <Text style={styles.text}>
                        Affär: {Data.receipt.shop} {'\n'}
                    </Text>
                    <Text style={styles.text}>
                        Totalpris: {Data.receipt.totalPrice} {'\n'}
                    </Text>
                    <Text style={styles.text}>
                        Datum: {Data.receipt.date} {'\n'}
                    </Text>
                </View>
            </View>
        );
    }
}
export default componentName;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#362D30',
        width: '100%',
        height: '30%',
        bottom: 0,
        alignItems: 'center',
    },
    rubrik: {
        top: 10,
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    infoBox: {
        fontSize: 12,
        width: '100%',
        height: '100%',
        top: 30,
        textAlign: 'left',
    },
    text: {
        top: 0, 
        color: 'white',
    },
});
