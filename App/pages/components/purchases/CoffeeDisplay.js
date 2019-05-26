import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CoffeeDisplay = ({ coffees }) => {
    //Vill skriva ut: Antal : Kaffesort : pris : Typ av mugg
    const coffeeItems = coffees.map(({ amount, coffee }) => {
        let antal = amount;
        let namn = coffee.name;
        let pris = coffee.price;
        let mugg = coffee.ownMug ? 'Egen' : 'Låna';
        return (
            <View style={styles.spaceing} key={antal + namn + pris + mugg}>

                <View style={styles.outerLeft}>
                    <Text style={styles.text}>{antal}</Text>
                </View>
                <View style={styles.innerLeft}>
                    <Text style={styles.text}>{namn}</Text>
                </View>
                <View style={styles.innerRight}>
                    <Text style={styles.text}>{mugg}</Text>
                </View>
                <View style={styles.outerRight}>
                    <Text style={styles.text}>{pris}</Text>
                </View>
            </View>
        );
    });

    return coffeeItems;
};
export default CoffeeDisplay;

const styles = StyleSheet.create({
    spaceing: {
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 3,
    },
    outerLeft: {
        flex: 2,
    },
    innerLeft: {
        flex: 3,
    },
    innerRight: {
        flex: 2,
    },
    outerRight: {
        flex: 1,
    },
    text: {
        color: '#57454B',
        fontSize: 18
    },
});
