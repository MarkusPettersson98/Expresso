import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CoffeeDisplay = ({ coffees }) => {
    //Vill skriva ut: Antal : Kaffesort : pris : Typ av mugg
    const coffeeItems = coffees.map(({ amount, coffee }) => {
        let antal = amount;
        let namn = coffee.name;
        let pris = coffee.price;
        let mugg = coffee.ownMug ? 'Har egen mugg ' : ' Dödar miljön ';
        return (
            <View style={styles.spaceing}>
                <Text style={styles.text}>{antal}</Text>
                <Text style={styles.text}>{namn}</Text>
                <Text style={styles.text}>{mugg}</Text>
                <Text style={styles.text}>{pris}</Text>
            </View>
        );
    });

    return coffeeItems;
};
export default CoffeeDisplay;

const styles = StyleSheet.create({
    text: {
        color: 'white',
        width: 20,
        flex: 1,
    },
    spaceing: {
        flexDirection: 'row',
    },
});
